import { describe, it, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { findReportFiles, loadReportsFromDir } from '../src/gallery/load.js';

let root;

before(() => {
  root = mkdtempSync(join(tmpdir(), 'gallery-load-'));
  mkdirSync(join(root, 'stripe'), { recursive: true });
  mkdirSync(join(root, 'linear'), { recursive: true });
  mkdirSync(join(root, 'node_modules', 'pkg'), { recursive: true });
  writeFileSync(join(root, 'stripe', 'fidelity.json'), JSON.stringify({ host: 'stripe.com', overall: 88, grade: 'B' }));
  writeFileSync(join(root, 'linear', 'fidelity.json'), JSON.stringify({ host: 'linear.app', overall: 95, grade: 'A' }));
  writeFileSync(join(root, 'acme.fidelity.json'), JSON.stringify({ host: 'acme.com', overall: 70, grade: 'C' }));
  writeFileSync(join(root, 'stripe', 'other.json'), JSON.stringify({ not: 'a report' }));
  writeFileSync(join(root, 'linear', 'broken.fidelity.json'), '{ not valid json');
  writeFileSync(join(root, 'node_modules', 'pkg', 'fidelity.json'), JSON.stringify({ host: 'noise', overall: 1 }));
});

after(() => rmSync(root, { recursive: true, force: true }));

describe('findReportFiles', () => {
  it('finds fidelity.json and *.fidelity.json, skips node_modules and other files', () => {
    const files = findReportFiles(root);
    assert.equal(files.length, 4, 'stripe, linear, acme, and the broken one are all matched by name');
    assert.ok(files.every(f => !f.includes('node_modules')), 'node_modules excluded');
    assert.ok(!files.some(f => f.endsWith('other.json')), 'non-report json excluded');
  });

  it('returns [] for a missing directory', () => {
    assert.deepEqual(findReportFiles(join(root, 'nope')), []);
  });
});

describe('loadReportsFromDir', () => {
  it('parses valid reports and skips malformed ones', () => {
    const reports = loadReportsFromDir(root);
    const hosts = reports.map(r => r.host).sort();
    assert.deepEqual(hosts, ['acme.com', 'linear.app', 'stripe.com']);
    assert.ok(!reports.some(r => r.host === 'noise'), 'node_modules report ignored');
  });
});
