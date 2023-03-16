import React, { useEffect } from 'react';

import { usePresentifyContext } from '../components/PresentifyProvider';

enum Keys {
  Right = 'ArrowRight',
  Left = 'ArrowLeft',
  Up = 'ArrowUp',
  Down = 'ArrowDown',
}

export const useKeyboard = () => {
  const { onGoNextSlide, onGoBackSlide, currentSlide } = usePresentifyContext();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.code) {
        case Keys.Right:
        case Keys.Up: {
          e.preventDefault();
          onGoNextSlide();
          break;
        }
        case Keys.Left:
        case Keys.Down: {
          e.preventDefault();
          onGoBackSlide();
          break;
        }
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSlide, onGoBackSlide, onGoNextSlide]);
};
