import { readdirSync } from 'node:fs';

export const isDirEmpty = (path: string) => {
  const files = readdirSync(path);
  return files.length === 0 || (files.length === 1 && files[0] === '.git');
};
