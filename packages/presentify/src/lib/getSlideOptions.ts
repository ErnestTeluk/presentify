import { Children, ReactElement, ReactNode } from 'react';

import { parseOptions } from './parseOptions';

export const getSlideOptions = (slide: ReactNode) => {
  const optionsRegex = /^([+]{3})(.*)([+]{3})$/gs;
  const elementArray = Children.toArray(slide);
  let options: string | undefined;
  const slideWithoutOptions = elementArray
    ?.map(element => {
      const { type, props } = element as ReactElement;
      if (
        type === 'p' &&
        typeof props.children === 'string' &&
        optionsRegex.test(props.children.toString())
      ) {
        options = props.children.toString();
        return null;
      }
      return element;
    })
    .filter(element => element);

  const parsedOptions = parseOptions(options);

  return { slideWithoutOptions, options: parsedOptions };
};
