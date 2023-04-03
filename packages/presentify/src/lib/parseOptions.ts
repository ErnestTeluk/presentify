import { pick } from 'lodash';

export const parseOptions = (options: string | undefined) => {
  if (!options) {
    return undefined;
  }
  const optionsWithoutPlusesAndNewLines = options
    .replace(/[+]/gs, '')
    .replace(/(\r\n|\n|\r|\s)/gm, '');
  const parsedOptions = Object.fromEntries(
    optionsWithoutPlusesAndNewLines.split(',').map(i => i.split(':')),
  );
  return pick(parsedOptions, [
    'layout',
    'className',
    'backgroundColor',
    'backgroundImg',
  ]);
};
