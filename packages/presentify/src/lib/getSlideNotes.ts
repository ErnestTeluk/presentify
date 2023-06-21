import { Children, ReactElement, ReactNode } from 'react';

export const getSlideNotes = (slide: ReactNode) => {
  const optionsRegex = /^([/]{2})(.*)$/gs;
  const elementArray = Children.toArray(slide);
  let notes: string | undefined;
  const slideWithoutNotes = elementArray
    ?.map(element => {
      const { type, props } = element as ReactElement;
      if (
        type === 'p' &&
        typeof props.children === 'string' &&
        optionsRegex.test(props.children.toString())
      ) {
        notes = props.children.toString().replace('//', '');
        return null;
      }
      return element;
    })
    .filter(element => element);
  return { slideWithoutNotes, notes };
};
