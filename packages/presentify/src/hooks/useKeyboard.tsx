import React, { useEffect } from 'react';

import { usePresentifyContext } from '../components/PresentifyProvider';
import { Keys } from '../types/types';

export const useKeyboard = () => {
  const context = usePresentifyContext();
  const { onGoNextSlide, onGoBackSlide, currentSlide, togglePresenterMode } =
    context || {};

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey) {
        switch (e.code) {
          case Keys.P: {
            e.preventDefault();
            togglePresenterMode && togglePresenterMode();
            break;
          }
          default:
            break;
        }
      } else {
        switch (e.code) {
          case Keys.Right:
          case Keys.Up: {
            e.preventDefault();
            onGoNextSlide && onGoNextSlide();
            break;
          }
          case Keys.Left:
          case Keys.Down: {
            e.preventDefault();
            onGoBackSlide && onGoBackSlide();
            break;
          }
          default:
            break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSlide, onGoBackSlide, onGoNextSlide, togglePresenterMode]);
};
