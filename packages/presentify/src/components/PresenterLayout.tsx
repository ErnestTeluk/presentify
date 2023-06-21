import React from 'react';

import { Slide } from './Slide';
import { getSlideNotes } from '../lib/getSlideNotes';
import {
  Layout,
  NextSlideAndNotesWrapper,
  NextSlideContainer,
  NextSlideWrapper,
  NotesContainer,
  NotesWrapper,
  SlideContainer,
  SlideWrapper,
} from '../styles/PresenterLayout.styled';

export const PresenterLayout = ({
  slides,
  currentSlide,
}: {
  slides: React.ReactNode[];
  currentSlide: number;
}) => {
  const { notes } = getSlideNotes(slides[currentSlide]);

  return (
    <Layout>
      <SlideContainer>
        <h1>Current Slide</h1>
        <SlideWrapper>
          <Slide>{slides[currentSlide]}</Slide>
        </SlideWrapper>
      </SlideContainer>
      <NextSlideAndNotesWrapper>
        <NextSlideContainer>
          <h1>NextSlide</h1>
          <NextSlideWrapper>
            {slides[currentSlide + 1] ? (
              <Slide>{slides[currentSlide + 1]}</Slide>
            ) : (
              <Slide>{slides[0]}</Slide>
            )}
          </NextSlideWrapper>
        </NextSlideContainer>
        {notes && (
          <NotesContainer>
            <h1>Notes</h1>
            <NotesWrapper>{notes}</NotesWrapper>
          </NotesContainer>
        )}
      </NextSlideAndNotesWrapper>
    </Layout>
  );
};
