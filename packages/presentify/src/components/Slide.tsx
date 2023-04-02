import styled from '@emotion/styled';
import React from 'react';

import { SlideProps } from '../types/types';

const SliderWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Slide = ({ children }: SlideProps) => (
  <SliderWrapper data-testid="slide">{children}</SliderWrapper>
);
