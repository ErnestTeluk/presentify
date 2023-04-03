import { ReactElement, ReactNode } from 'react';

export enum Keys {
  Right = 'ArrowRight',
  Left = 'ArrowLeft',
  Up = 'ArrowUp',
  Down = 'ArrowDown',
}

export type Slide = ReactElement[];

export type Options = {
  option: string;
};

export interface PresentifyContextProps {
  slides: ReactNode[][];
  currentSlide: number;
  onGoNextSlide: () => void;
  onGoBackSlide: () => void;
}

export type SlideProps = {
  children: Slide;
};
