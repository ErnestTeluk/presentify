import { ReactElement, ReactNode } from 'react';

export enum Keys {
  Right = 'ArrowRight',
  Left = 'ArrowLeft',
  Up = 'ArrowUp',
  Down = 'ArrowDown',
  P = 'KeyP',
}

export interface PresentifyContextProps {
  slides: ReactNode[][];
  currentSlide: number;
  options?: Options;
  presenterMode: boolean;
  onGoNextSlide: () => void;
  onGoBackSlide: () => void;
  togglePresenterMode: () => void;
}

export interface Options {
  theme?: 'dark' | 'light';
  useFiraCode?: boolean;
  className?: string;
  backgroundColor?: string;
  backgroundImg?: string;
  layout?: string;
  disablePresenterMode?: boolean;
}
