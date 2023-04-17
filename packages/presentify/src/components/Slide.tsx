import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { ReactNode } from 'react';

import { getSlideOptions } from '../lib/getSlideOptions';
import { SliderWrapper } from '../styles/Slide.styled';

export const Slide = ({ children }: { children: ReactNode }) => {
  const { slideWithoutOptions, options } = getSlideOptions(children);
  const { className, backgroundColor, backgroundImg, layout } = options || {};
  return (
    <SliderWrapper
      data-testid="slide"
      className={className}
      backgroundColor={backgroundColor}
      backgroundImg={backgroundImg}
      layout={layout}
    >
      {slideWithoutOptions}
    </SliderWrapper>
  );
};
