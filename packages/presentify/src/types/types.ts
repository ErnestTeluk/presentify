import { ReactElement, ReactNode } from 'react';

export enum Keys {
  Right = 'ArrowRight',
  Left = 'ArrowLeft',
  Up = 'ArrowUp',
  Down = 'ArrowDown',
}

export type Slide = ReactElement[];

export type Options = {
  slideNumber: number;
  options: string;
};

export type LayoutOptions = {
  parsedOptions: Pick<
    { [p: string]: any },
    'backgroundColor' | 'layout' | 'backgroundImg' | 'className'
  >;
} & Options;

export interface PresentifyContextProps {
  slides: ReactNode[][];
  currentSlide: number;
  onGoNextSlide: () => void;
  onGoBackSlide: () => void;
}

export type SlideProps = {
  children: ReactNode;
  options: LayoutOptions | undefined;
};
