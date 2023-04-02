import { Children, ReactElement, ReactNode } from 'react';

import { Slide } from '../types/types';

export const splitSlides = ({ children }: { children: ReactNode }) => {
  const splits: number[] = [];
  const slides: Slide[] = [];
  const elements = Children.toArray(children);

  elements.forEach((child, idx) => {
    const { type } = child as ReactElement;
    if (type === 'hr') {
      splits.push(idx);
    }
  });

  let previousSplit = 0;
  splits.forEach(split => {
    const children = [...elements.slice(previousSplit, split)];
    slides.push(children as Slide);
    previousSplit = split + 1;
  });
  const last = [...elements.slice(previousSplit)];
  slides.push(last as Slide);

  return slides;
};
