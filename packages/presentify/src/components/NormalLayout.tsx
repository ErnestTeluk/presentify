import React from 'react';

import { NotFound } from './NotFound';
import { Slide } from './Slide';
import { Layout } from '../styles/NormalLayout.styled';

export const NormalLayout = ({
  slides,
  currentSlide,
}: {
  slides: React.ReactNode[];
  currentSlide: number;
}) => (
  <Layout>
    <Slide>{slides[currentSlide] ? slides[currentSlide] : <NotFound />}</Slide>
  </Layout>
);
