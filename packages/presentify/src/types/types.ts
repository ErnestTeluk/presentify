import { ReactElement, ReactNode } from 'react';

export enum Keys {
  Right = 'ArrowRight',
  Left = 'ArrowLeft',
  Up = 'ArrowUp',
  Down = 'ArrowDown',
}

export interface PresentifyContextProps {
  slides: ReactNode[][];
  currentSlide: number;
  options?: Options;
  onGoNextSlide: () => void;
  onGoBackSlide: () => void;
}

export interface Options {
  theme?: 'dark' | 'light';
  useFiraCode?: boolean;
}
