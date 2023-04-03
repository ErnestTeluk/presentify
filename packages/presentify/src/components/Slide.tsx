import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { ReactNode } from 'react';

import { getSlideOptions } from '../lib/getSlideOptions';

const SliderWrapper = styled.div<{
  backgroundColor: string;
  backgroundImg: string;
  layout: string;
}>`
  width: 100%;
  height: 100%;
  padding: 20px;
  ${({ backgroundColor }) =>
    backgroundColor && `background-color: ${backgroundColor}`};
  ${({ backgroundImg }) =>
    backgroundImg &&
    css`
      background-image: url(${backgroundImg});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      height: 100vh;
    `}
  ${({ layout }) =>
    layout === 'normal'
      ? css``
      : css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        `}
`;

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
