import styled from '@emotion/styled';
import React, { ReactNode } from 'react';

type SlideProps = {
  children: ReactNode;
};

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
  <SliderWrapper>{children}</SliderWrapper>
);
