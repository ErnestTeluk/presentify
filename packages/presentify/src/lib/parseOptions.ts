import matter from 'gray-matter';
import { pick } from 'lodash';

import { Options } from '../types/types';
export const parseOptions = ({ options }: { options: Options[] }) =>
  options.map(option => {
    const { data } = matter(option.options, { delimiters: '+++' });
    const slideOptions = pick(data, [
      'layout',
      'backgroundColor',
      'backgroundImg',
      'className',
    ]);
    return { ...option, parsedOptions: slideOptions };
  });
