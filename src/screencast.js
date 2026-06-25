// Live screencast capture over a Chrome DevTools Protocol session.
//
// Wraps `Page.startScreencast` into a throttled, capped frame source for the
// Extraction Theatre: the browser is already driving the page, this just taps
// what it renders and hands each JPEG frame to `onFrame`.
//
// The CDP client is INJECTED, so this unit-tests with a fake client that emits
// `Page.screencastFrame` events — no real browser, no Playwright in the test.
//
// CDP contract we depend on:
//   client.send('Page.startScreencast', opts)      -> begins the cast
//   client.on('Page.screencastFrame', handler)     -> { data, metadata, sessionId }
//   client.send('Page.screencastFrameAck', {...})  -> MUST ack or Chrome pauses
//   client.send('Page.stopScreencast')             -> ends the cast

export const SCREENCAST_DEFAULTS = {
  format: 'jpeg',
  quality: 50,
  maxWidth: 1280,
  maxHeight: 800,
  everyNthFrame: 1,
  fps: 6, // throttle: never emit faster than this
  maxFrames: 240, // hard cap (~40s @ 6fps)
  maxDurationMs: 45_000,
};

// Minimal interval (ms) between emitted frames for a target fps.
function frameInterval(fps) {
  return fps > 0 ? Math.floor(1000 / fps) : 0;
}

/**
 * Start a throttled screencast. Returns `{ stop }`.
 *
 * @param {{ send:Function, on:Function, off?:Function, removeListener?:Function }} client
 *        an injected CDP session
 * @param {(frame:{seq:number,t:number,data:string,width?:number,height?:number})=>void} onFrame
 * @param {object} [opts] overrides for SCREENCAST_DEFAULTS, plus optional `now`
 * @returns {Promise<{stop:()=>Promise<void>}>}
 */
export async function startScreencast(client, onFrame, opts = {}) {
  if (!client || typeof client.send !== 'function' || typeof client.on !== 'function') {
    throw new TypeError('startScreencast requires a CDP client with send() and on()');
  }
  if (typeof onFrame !== 'function') {
    throw new TypeError('startScreencast requires an onFrame callback');
  }

  const cfg = { ...SCREENCAST_DEFAULTS, ...opts };
  const now = typeof cfg.now === 'function' ? cfg.now : Date.now;
  const minGap = frameInterval(cfg.fps);

  const startedAt = now();
  let seq = 0;
  let emitted = 0;
  let lastEmit = -Infinity;
  let stopped = false;

  const stop = makeStopper(client, () => {
    stopped = true;
  });

  const onScreencastFrame = async (params = {}) => {
    if (stopped) return;
    const { data, metadata, sessionId } = params;

    // Ack FIRST and ALWAYS — even for frames we drop — or Chrome stalls the cast.
    if (sessionId != null) {
      try {
        await client.send('Page.screencastFrameAck', { sessionId });
      } catch {
        // A failed ack just means the cast is ending; nothing to recover.
      }
    }

    const t = now() - startedAt;

    // Throttle to the target fps.
    if (now() - lastEmit < minGap) return;
    lastEmit = now();

    if (typeof data === 'string' && data.length) {
      onFrame({
        seq: seq++,
        t,
        data,
        width: metadata?.deviceWidth,
        height: metadata?.deviceHeight,
      });
      emitted++;
    }

    // Enforce the caps.
    if (emitted >= cfg.maxFrames || t >= cfg.maxDurationMs) {
      await stop();
    }
  };

  client.on('Page.screencastFrame', onScreencastFrame);
  stop._detach = () => detach(client, 'Page.screencastFrame', onScreencastFrame);

  try {
    await client.send('Page.startScreencast', {
      format: cfg.format,
      quality: cfg.quality,
      maxWidth: cfg.maxWidth,
      maxHeight: cfg.maxHeight,
      everyNthFrame: cfg.everyNthFrame,
    });
  } catch (err) {
    // Could not even start — clean up the listener and surface failure so the
    // caller degrades to a token-only stream.
    detach(client, 'Page.screencastFrame', onScreencastFrame);
    throw err;
  }

  return { stop };
}

// Build a stop() that is idempotent: detaches the listener, stops the cast, and
// flips the caller's `stopped` flag exactly once.
function makeStopper(client, markStopped) {
  let done = false;
  const stop = async () => {
    if (done) return;
    done = true;
    markStopped();
    if (typeof stop._detach === 'function') stop._detach();
    try {
      await client.send('Page.stopScreencast');
    } catch {
      // Session may already be gone — fine.
    }
  };
  return stop;
}

function detach(client, event, handler) {
  if (typeof client.off === 'function') client.off(event, handler);
  else if (typeof client.removeListener === 'function') client.removeListener(event, handler);
}

/**
 * Glue: derive a CDP session from a Playwright page. Kept separate from the
 * pure core above so the core stays browser-free for tests.
 * @param {import('playwright-core').Page} page
 * @returns {Promise<object>} a CDP session
 */
export async function cdpClientForPage(page) {
  const context = page.context();
  return context.newCDPSession(page);
}
