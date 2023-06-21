import { Global } from '@emotion/react';
import { isNil } from 'lodash';
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import { Keyboard } from './Keyboard';
import { NormalLayout } from './NormalLayout';
import { PresenterLayout } from './PresenterLayout';
import { useQueryParams } from '../hooks/useQueryParams';
import { useSharedState } from '../hooks/useSharedState';
import { splitSlides } from '../lib/splitSlides';
import { globalStyles } from '../styles/GlobalStyles.styled';
import { Options, PresentifyContextProps } from '../types/types';

const PresentifyContext = createContext<PresentifyContextProps | null>(null);

export const PresentifyProvider = ({
  children,
  options,
}: {
  children: ReactNode;
  options?: Options;
}) => {
  const { getParams, setParams } = useQueryParams();
  const pageFromParams = parseInt(getParams('page') || '0', 10);

  const [currentSlide, setCurrentSlide] = useSharedState<number>(
    isNaN(pageFromParams) ? 0 : pageFromParams,
  );
  const [presenterMode, setPresenterMode] = useState<boolean>(false);

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

  const togglePresenterMode = () => {
    if (options?.disablePresenterMode !== true) {
      setPresenterMode(prevState => !prevState);
      if (!presenterMode) {
        window.open(window.location.href, '_blank');
      }
    }
  };

  const contextValue = {
    slides,
    options,
    currentSlide,
    onGoNextSlide,
    onGoBackSlide,
    presenterMode,
    togglePresenterMode,
  };

  return (
    <PresentifyContext.Provider value={contextValue}>
      <Global styles={globalStyles} />
      <Keyboard />
      {presenterMode ? (
        <PresenterLayout slides={slides} currentSlide={currentSlide} />
      ) : (
        <NormalLayout slides={slides} currentSlide={currentSlide} />
      )}
    </PresentifyContext.Provider>
  );
};

export const usePresentifyContext = () => useContext(PresentifyContext);
