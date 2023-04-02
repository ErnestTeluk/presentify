import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

import { SlideProps } from '../types/types';

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

export const Slide = ({ children, options }: SlideProps) => {
  const { parsedOptions } = options || {};
  const { className, backgroundColor, backgroundImg, layout } =
    parsedOptions || {};
  return (
    <SliderWrapper
      data-testid="slide"
      className={className}
      backgroundColor={backgroundColor}
      backgroundImg={backgroundImg}
      layout={layout}
    >
      {children}
    </SliderWrapper>
  );
};
