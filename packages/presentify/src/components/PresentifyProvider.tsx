import { MDXProvider } from '@mdx-js/react';
import React, { ReactNode } from 'react';

import { splitSlides } from '../lib/splitSlides';

export const PresentifyProvider = ({ children }: { children: ReactNode }) => {
  const slides = splitSlides({ children });

  return <>{slides[0]}</>;
};
