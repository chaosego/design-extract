'use client';

import { useCallback, useMemo, useState } from 'react';

// Curated tab order. Hides noise (preview.html, mcp.json, agent rules dir)
// from the inline viewer — they're still in the .zip download.
const TAB_PRIORITY = [
  { match: /-DESIGN\.md$/,            label: 'DESIGN.md',      lang: 'markdown' },
  { match: /-design-language\.md$/,   label: 'Markdown',       lang: 'markdown' },
  { match: /\.brand\.html$/,          label: 'Brand book',     lang: 'html', render: 'iframe' },
  { match: /-design-tokens\.json$/,   label: 'Design Tokens',  lang: 'json' },
  { match: /-motion\.html$/,          label: 'Motion',         lang: 'html', render: 'iframe' },
  { match: /-motion\.framer\.js$/,    label: 'Framer Motion',  lang: 'javascript' },
  { match: /-tailwind\.config\.js$/,  label: 'Tailwind',       lang: 'javascript' },
  { match: /-variables\.css$/,        label: 'CSS Variables',  lang: 'css' },
  { match: /-figma-variables\.json$/, label: 'Figma',          lang: 'json' },
  { match: /-shadcn-theme\.css$/,     label: 'shadcn',         lang: 'css' },
  { match: /-theme\.js$/,             label: 'React theme',    lang: 'javascript' },
  { match: /-wordpress-theme\.json$/, label: 'WordPress',      lang: 'json' },
  { match: /^ios\/.*\.swift$/,        label: 'iOS',            lang: 'swift' },
  { match: /^android\/Theme\.kt$/,    label: 'Android',        lang: 'kotlin' },
  { match: /^flutter\/.*\.dart$/,     label: 'Flutter',        lang: 'dart' },
];

function pickTabs(files) {
  const out = [];
  for (const def of TAB_PRIORITY) {
    const key = Object.keys(files).find((k) => def.match.test(k));
    if (key) out.push({ ...def, key });
  }
  return out;
}

// Inline transforms — RegExp.prototype.exec, not child_process.
function renderInline(text, keyBase) {
  const re = /(`[^`\n]+`)|(\*\*[^*\n]+\*\*)|(\*[^*\n]+\*)|(\[[^\]\n]+\]\([^)\n]+\))/g;
  const out = [];
  let last = 0;
  let m;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const t = m[0];
    const k = `${keyBase}-i${i++}`;
    if (t.startsWith('`')) {
      out.push(<code key={k} className="md-inline-code">{t.slice(1, -1)}</code>);
    } else if (t.startsWith('**')) {
      out.push(<strong key={k}>{t.slice(2, -2)}</strong>);
    } else if (t.startsWith('*')) {
      out.push(<em key={k}>{t.slice(1, -1)}</em>);
    } else if (t.startsWith('[')) {
      const linkRe = /\[([^\]]+)\]\(([^)]+)\)/;
      const lm = linkRe.exec(t);
      if (lm) {
        out.push(
          <a key={k} href={lm[2]} rel="noopener" style={{ borderBottom: '1px solid currentColor' }}>{lm[1]}</a>
        );
      }
    }
    last = m.index + t.length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function renderMarkdown(src) {
  if (typeof src !== 'string') return null;
  const lines = src.split('\n');
  const blocks = [];
  let i = 0;
  let blockKey = 0;
  const k = () => `b${blockKey++}`;

  // YAML front matter — render as a styled mono block.
  if (lines[0]?.trim() === '---') {
    const end = lines.indexOf('---', 1);
    if (end > 0) {
      const fm = lines.slice(1, end);
      blocks.push(
        <pre key={k()} className="md-front-matter">{fm.join('\n')}</pre>
      );
      i = end + 1;
    }
  }

  while (i < lines.length) {
    const line = lines[i];
    if (line.trim() === '') { i++; continue; }
    if (/^---+\s*$/.test(line)) { blocks.push(<hr key={k()} className="md-hr" />); i++; continue; }

    const headRe = /^(#{1,6})\s+(.*)$/;
    const h = headRe.exec(line);
    if (h) {
      const level = h[1].length;
      const Tag = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'][level - 1];
      blocks.push(<Tag key={k()} className={`md-h${level}`}>{renderInline(h[2], k())}</Tag>);
      i++;
      continue;
    }

    if (line.startsWith('```')) {
      const lang = line.slice(3).trim();
      const buf = [];
      i++;
      while (i < lines.length && !lines[i].startsWith('```')) {
        buf.push(lines[i]);
        i++;
      }
      i++;
      blocks.push(
        <pre key={k()} className="md-code-block" data-lang={lang || 'text'}>{buf.join('\n')}</pre>
      );
      continue;
    }

    if (line.startsWith('> ')) {
      const buf = [];
      while (i < lines.length && lines[i].startsWith('> ')) {
        buf.push(lines[i].slice(2));
        i++;
      }
      blocks.push(
        <blockquote key={k()} className="md-blockquote">{renderInline(buf.join(' '), k())}</blockquote>
      );
      continue;
    }

    if (line.startsWith('|') && lines[i + 1] && /^\|[\s:|-]+\|$/.test(lines[i + 1].trim())) {
      const headerCells = line.split('|').slice(1, -1).map((c) => c.trim());
      const rows = [];
      i += 2;
      while (i < lines.length && lines[i].startsWith('|')) {
        rows.push(lines[i].split('|').slice(1, -1).map((c) => c.trim()));
        i++;
      }
      blocks.push(
        <table key={k()} className="md-table">
          <thead>
            <tr>{headerCells.map((c, j) => <th key={j}>{renderInline(c, `${k()}-th${j}`)}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((r, ri) => (
              <tr key={ri}>{r.map((c, ci) => <td key={ci}>{renderInline(c, `${k()}-td${ri}-${ci}`)}</td>)}</tr>
            ))}
          </tbody>
        </table>
      );
      continue;
    }

    if (/^[-*]\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^[-*]\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^[-*]\s+/, ''));
        i++;
      }
      blocks.push(
        <ul key={k()} className="md-ul">
          {items.map((it, j) => <li key={j}>{renderInline(it, `${k()}-li${j}`)}</li>)}
        </ul>
      );
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s+/, ''));
        i++;
      }
      blocks.push(
        <ol key={k()} className="md-ol">
          {items.map((it, j) => <li key={j}>{renderInline(it, `${k()}-li${j}`)}</li>)}
        </ol>
      );
      continue;
    }

    const buf = [line];
    i++;
    while (
      i < lines.length &&
      lines[i].trim() !== '' &&
      !/^(#{1,6}\s|```|>\s|\|.*\||---+\s*$|[-*]\s|\d+\.\s)/.test(lines[i])
    ) {
      buf.push(lines[i]);
      i++;
    }
    blocks.push(<p key={k()} className="md-p">{renderInline(buf.join(' '), k())}</p>);
  }

  return blocks;
}

export default function ResultViewer({ files, onDownloadZip, downloadBusy }) {
  const tabs = useMemo(() => pickTabs(files), [files]);
  const [active, setActive] = useState(tabs[0]?.key || null);
  const [mode, setMode] = useState('preview');
  const [copied, setCopied] = useState(false);

  const activeTab = tabs.find((t) => t.key === active) || tabs[0];
  const content = activeTab ? files[activeTab.key] : '';
  const isMarkdown = activeTab?.lang === 'markdown';
  const isIframe = activeTab?.render === 'iframe';
  const hasPreview = isMarkdown || isIframe;

  const copy = useCallback(async () => {
    if (!content) return;
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  }, [content]);

  const downloadFile = useCallback(() => {
    if (!activeTab || !content) return;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = activeTab.key.split('/').pop();
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }, [activeTab, content]);

  if (!tabs.length) return null;

  return (
    <div className="rv">
      <div className="rv-tabs">
        {tabs.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => { setActive(t.key); setMode('preview'); }}
            className={`rv-tab mono ${t.key === active ? 'is-active' : ''}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="rv-toolbar">
        <div className="rv-filename mono">{activeTab.key}</div>
        <div className="rv-toolbar-actions">
          {hasPreview && (
            <div className="rv-toggle mono">
              <button
                type="button"
                className={mode === 'source' ? 'is-active' : ''}
                onClick={() => setMode('source')}
              >
                ‹/› Source
              </button>
              <button
                type="button"
                className={mode === 'preview' ? 'is-active' : ''}
                onClick={() => setMode('preview')}
              >
                ◉ Preview
              </button>
            </div>
          )}
          <button type="button" onClick={copy} className="rv-btn mono">
            {copied ? 'Copied' : 'Copy'}
          </button>
          <button type="button" onClick={downloadFile} className="rv-btn mono">
            Download
          </button>
        </div>
      </div>

      <div className="rv-content">
        {isMarkdown && mode === 'preview' ? (
          <article className="md-doc">{renderMarkdown(content)}</article>
        ) : isIframe && mode === 'preview' ? (
          <iframe
            className="rv-frame"
            srcDoc={content}
            sandbox="allow-scripts"
            title={activeTab.label}
            loading="lazy"
          />
        ) : (
          <pre className="rv-pre mono">{content}</pre>
        )}
      </div>

      <div className="rv-footer">
        <div className="mono" style={{ fontSize: 11, color: 'var(--ink-3)', letterSpacing: '0.04em' }}>
          {Object.keys(files).length} files extracted · {tabs.length} previewable here
        </div>
        <button
          type="button"
          onClick={onDownloadZip}
          disabled={downloadBusy}
          className="cta"
          style={{ fontSize: 13 }}
        >
          {downloadBusy ? 'Zipping…' : 'Download all (.zip)'}
        </button>
      </div>

      <style jsx>{`
        .rv {
          margin-top: var(--r6);
          border: var(--hair);
          background: var(--paper);
          /* Force left alignment — the home hero uses text-align: center
             which would otherwise center each YAML line and push the
             markdown article into a half-width column. */
          text-align: left;
        }
        .rv-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 0;
          border-bottom: var(--hair);
          background: var(--paper-2);
        }
        .rv-tab {
          padding: 12px 16px;
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--ink-2);
          background: transparent;
          border: 0;
          border-right: 1px solid var(--paper-3);
          cursor: pointer;
          transition: color 120ms ease, background 120ms ease;
        }
        .rv-tab:hover { color: var(--ink); }
        .rv-tab.is-active {
          color: var(--ink);
          background: var(--paper);
          box-shadow: inset 0 -2px 0 0 var(--accent);
        }
        .rv-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 16px;
          gap: 16px;
          border-bottom: 1px solid var(--paper-3);
          flex-wrap: wrap;
        }
        .rv-filename {
          font-size: 12px;
          color: var(--ink-3);
          letter-spacing: 0.04em;
          word-break: break-all;
        }
        .rv-toolbar-actions {
          display: flex;
          gap: 8px;
          align-items: center;
        }
        .rv-toggle {
          display: inline-flex;
          border: 1px solid var(--paper-3);
        }
        .rv-toggle button {
          padding: 6px 12px;
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--ink-3);
          background: transparent;
          border: 0;
          cursor: pointer;
        }
        .rv-toggle button.is-active {
          background: var(--ink);
          color: var(--paper);
        }
        .rv-btn {
          padding: 6px 12px;
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--ink);
          background: var(--paper);
          border: 1px solid var(--ink);
          cursor: pointer;
          transition: background 120ms ease, color 120ms ease;
        }
        .rv-btn:hover { background: var(--ink); color: var(--paper); }
        .rv-content {
          max-height: 600px;
          overflow: auto;
        }
        .rv-pre {
          margin: 0;
          padding: 20px;
          font-size: 12.5px;
          line-height: 1.7;
          background: var(--ink);
          color: var(--paper);
          white-space: pre;
          tab-size: 2;
        }
        .rv-frame {
          display: block;
          width: 100%;
          height: 600px;
          border: 0;
          background: #fff;
        }
        .rv-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          border-top: var(--hair);
          flex-wrap: wrap;
          gap: 12px;
        }

        .md-doc {
          padding: 32px clamp(20px, 4vw, 48px);
          font-size: 15px;
          line-height: 1.65;
          color: var(--ink);
          max-width: 72ch;
          margin: 0 auto; /* centre the reading column inside the full-width viewer */
        }
        .md-doc :global(.md-front-matter) {
          margin: 0 0 24px;
          padding: 16px 20px;
          background: var(--paper-2);
          border-left: 2px solid var(--accent);
          font-family: var(--font-mono);
          font-size: 11.5px;
          line-height: 1.7;
          color: var(--ink-2);
          white-space: pre;
          overflow-x: auto;
        }
        .md-doc :global(.md-h1) {
          font-family: var(--font-display);
          font-size: clamp(28px, 4vw, 40px);
          letter-spacing: -0.025em;
          line-height: 1.05;
          margin: 32px 0 16px;
          font-weight: 500;
        }
        .md-doc :global(.md-h1:first-child) { margin-top: 0; }
        .md-doc :global(.md-h2) {
          font-family: var(--font-display);
          font-size: clamp(22px, 3vw, 28px);
          letter-spacing: -0.02em;
          line-height: 1.1;
          margin: 28px 0 12px;
          font-weight: 500;
          padding-bottom: 8px;
          border-bottom: 1px solid var(--paper-3);
        }
        .md-doc :global(.md-h3) {
          font-family: var(--font-display);
          font-size: 19px;
          letter-spacing: -0.01em;
          margin: 24px 0 10px;
          font-weight: 500;
        }
        .md-doc :global(.md-h4) { font-size: 16px; margin: 20px 0 8px; font-weight: 600; }
        .md-doc :global(.md-p) { margin: 0 0 14px; }
        .md-doc :global(.md-p em),
        .md-doc :global(.md-h1 em),
        .md-doc :global(.md-h2 em),
        .md-doc :global(.md-h3 em) {
          font-family: var(--font-display);
          font-style: italic;
          color: var(--accent);
        }
        .md-doc :global(.md-inline-code) {
          font-family: var(--font-mono);
          font-size: 0.88em;
          background: var(--paper-2);
          padding: 1px 6px;
          border-radius: 2px;
          color: var(--ink);
        }
        .md-doc :global(.md-code-block) {
          margin: 16px 0;
          padding: 16px 20px;
          background: var(--ink);
          color: var(--paper);
          font-family: var(--font-mono);
          font-size: 12.5px;
          line-height: 1.65;
          overflow-x: auto;
          white-space: pre;
        }
        .md-doc :global(.md-blockquote) {
          margin: 16px 0;
          padding: 4px 16px;
          border-left: 2px solid var(--accent);
          font-family: var(--font-display);
          font-style: italic;
          font-size: 17px;
          color: var(--ink-2);
        }
        .md-doc :global(.md-hr) {
          border: 0;
          border-top: 1px solid var(--paper-3);
          margin: 24px 0;
        }
        .md-doc :global(.md-ul),
        .md-doc :global(.md-ol) {
          margin: 0 0 14px;
          padding-left: 22px;
        }
        .md-doc :global(.md-ul li),
        .md-doc :global(.md-ol li) { margin: 6px 0; }
        .md-doc :global(.md-table) {
          width: 100%;
          margin: 16px 0;
          border-collapse: collapse;
          font-size: 13px;
        }
        .md-doc :global(.md-table th),
        .md-doc :global(.md-table td) {
          padding: 8px 12px;
          border-bottom: 1px solid var(--paper-3);
          text-align: left;
          vertical-align: top;
        }
        .md-doc :global(.md-table th) {
          font-family: var(--font-mono);
          font-size: 10.5px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--ink-2);
          font-weight: 500;
          border-bottom: 2px solid var(--ink);
        }
        .md-doc :global(.md-table tr:last-child td) { border-bottom: 0; }
        .md-doc :global(.md-table code.md-inline-code) { font-size: 11.5px; }

        @media (max-width: 600px) {
          .rv-tabs { font-size: 10px; }
          .rv-tab { padding: 10px 12px; }
          .rv-content { max-height: 480px; }
          .md-doc { padding: 20px 16px; font-size: 14px; }
        }
      `}</style>
    </div>
  );
}
