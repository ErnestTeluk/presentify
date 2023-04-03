import { Global } from '@emotion/react';
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import { Keyboard } from './Keyboard';
import { NotFound } from './NotFound';
import { Slide } from './Slide';
import { useQueryParams } from '../hooks/useQueryParams';
import { getSlideOptions } from '../lib/getSlideOptions';
import { splitSlides } from '../lib/splitSlides';
import { globalStyles } from '../styles/GlobalStyles.styled';
import { Layout } from '../styles/Layout.styled';
import { PresentifyContextProps } from '../types/types';

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
      <Global styles={globalStyles} />
      <Keyboard />
      <Layout>
        <Slide>
          {slides[currentSlide] ? slides[currentSlide] : <NotFound />}
        </Slide>
      </Layout>
    </PresentifyContext.Provider>
  );
};

export const usePresentifyContext = () => useContext(PresentifyContext);
