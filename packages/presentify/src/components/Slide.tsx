import React, { ReactNode } from 'react';

import { usePresentifyContext } from './PresentifyProvider';
import { getSlideNotes } from '../lib/getSlideNotes';
import { getSlideOptions } from '../lib/getSlideOptions';
import { SliderWrapper } from '../styles/Slide.styled';

export const Slide = ({ children }: { children: ReactNode }) => {
  const { slideWithoutOptions, options: SlideOptions } =
    getSlideOptions(children);
  const { slideWithoutNotes } = getSlideNotes(slideWithoutOptions);
  const { className, backgroundColor, backgroundImg, layout } =
    SlideOptions || {};
  const presentifyContext = usePresentifyContext();
  const {
    className: globalClassName,
    backgroundColor: globalBackgroundColor,
    backgroundImg: globalBackgroundImg,
    layout: globalLayout,
  } = presentifyContext?.options || {};
  return (
    <SliderWrapper
      data-testid="slide"
      className={className || globalClassName}
      backgroundColor={backgroundColor || globalBackgroundColor}
      backgroundImg={backgroundImg || globalBackgroundImg}
      layout={layout || globalLayout}
    >
      {slideWithoutNotes}
    </SliderWrapper>
  );
};
