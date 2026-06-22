// Load fidelity reports off disk for the gallery. Each `designlang fidelity`
// run writes a `fidelity.json`; point this at a directory (one subdir per clone)
// and it collects them all. Malformed/invalid files are skipped, not fatal.

import { readdirSync, readFileSync, statSync } from 'fs';
import { join } from 'path';

function isReportFile(name) {
  return name === 'fidelity.json' || name.endsWith('.fidelity.json');
}

// Recursive walk without relying on a specific Node readdir option set.
function walk(dir, depth, acc) {
  let entries;
  try { entries = readdirSync(dir, { withFileTypes: true }); } catch { return acc; }
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === 'node_modules' || e.name.startsWith('.')) continue;
      if (depth > 0) walk(full, depth - 1, acc);
    } else if (e.isFile() && isReportFile(e.name)) {
      acc.push(full);
    }
  }
  return acc;
}

export function findReportFiles(dir, { depth = 4 } = {}) {
  try { if (!statSync(dir).isDirectory()) return []; } catch { return []; }
  return walk(dir, depth, []).sort();
}

export function loadReportsFromDir(dir, opts = {}) {
  const reports = [];
  for (const file of findReportFiles(dir, opts)) {
    try {
      const parsed = JSON.parse(readFileSync(file, 'utf8'));
      if (parsed && (parsed.overall != null || parsed.host || parsed.url)) reports.push(parsed);
    } catch {
      // skip unreadable / malformed report
    }
  }
  return reports;
}
