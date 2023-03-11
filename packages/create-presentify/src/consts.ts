import { blue, yellow } from 'kolorist';
import minimist from 'minimist';

export const defaultTargetDir = 'presentify-project';

export const argValue = minimist<{
  t?: string;
  template?: string;
}>(process.argv.slice(2), { string: ['_'] });

export const cwd = process.cwd();

export const variants = [
  {
    name: 'js',
    display: 'JavaScript',
    color: yellow,
  },
  {
    name: 'ts',
    display: 'TypeScript',
    color: blue,
  },
];
