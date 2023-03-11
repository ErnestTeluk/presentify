import fs from 'fs-extra';
import { join } from 'node:path';
import { beforeAll, afterEach, describe, it, expect } from 'vitest';

import { getTargetDir, isDirEmpty, cli } from '../src/index';

const projectName = 'test-app';
const genPath = join(__dirname, projectName);

const createTestDir = () => {
  fs.mkdirpSync(genPath);
  const pkgJson = join(genPath, 'package.json');
  fs.writeFileSync(pkgJson, '{ "foo": "bar" }');
};

beforeAll(() => fs.remove(genPath));
afterEach(() => fs.remove(genPath));

describe('getTargetDir', () => {
  it('work with _', () => {
    expect(getTargetDir('test_dir')).toBe('test_dir');
  });
  it('work with -', () => {
    expect(getTargetDir('test-dir')).toBe('test-dir');
  });
  it('deletes spaces', () => {
    expect(getTargetDir('test dir')).toBe('testdir');
    expect(getTargetDir('test-dir ')).toBe('test-dir');
    expect(getTargetDir('te st-dir ')).toBe('test-dir');
  });
  it('deletes special characters', () => {
    expect(getTargetDir('test/dir')).toBe('testdir');
    expect(getTargetDir('test*dir')).toBe('testdir');
    expect(getTargetDir('test#dir')).toBe('testdir');
  });
});

describe('isDirEmpty', () => {
  it('with package.json', () => {
    createTestDir();
    expect(isDirEmpty(genPath)).toBe(false);
  });
  it('empty folder', () => {
    fs.mkdirpSync(genPath);
    expect(isDirEmpty(genPath)).toBe(true);
  });
});
