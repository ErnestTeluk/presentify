import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import { Keyboard } from './Keyboard';
import { NotFound } from './NotFound';
import { useQueryParams } from '../hooks/useQueryParams';
import { splitSlides } from '../lib/splitSlides';

export interface PresentifyContextProps {
  slides: ReactNode[][];
  currentSlide: number;
  onGoNextSlide: () => void;
  onGoBackSlide: () => void;
}

const PresentifyContext = createContext<PresentifyContextProps | null>(null);

export const PresentifyProvider = ({ children }: { children: ReactNode }) => {
  const { getParams, setParams } = useQueryParams();
  const pageFromParams = parseInt(getParams('page') || '0', 10);

  const [currentSlide, setCurrentSlide] = useState<number>(
    isNaN(pageFromParams) ? 0 : pageFromParams,
  );

  useEffect(() => {
    setParams('page', currentSlide.toString());
  }, [currentSlide, setParams]);

  const slides = splitSlides({ children });
  const numberOfSlides = slides.length - 1;

  const onGoNextSlide = () =>
    setCurrentSlide(prevState => {
      if (numberOfSlides !== prevState) {
        return prevState + 1;
      }
      return 0;
    });
  const onGoBackSlide = () =>
    setCurrentSlide(prevState => {
      if (prevState === 0) {
        return numberOfSlides;
      }
      return prevState - 1;
    });

  const contextValue = {
    slides,
    currentSlide,
    onGoNextSlide,
    onGoBackSlide,
  };

  return (
    <PresentifyContext.Provider value={contextValue}>
      <Keyboard />
      {slides[currentSlide] ? slides[currentSlide] : <NotFound />}
    </PresentifyContext.Provider>
  );
};

export const usePresentifyContext = () => useContext(PresentifyContext);
