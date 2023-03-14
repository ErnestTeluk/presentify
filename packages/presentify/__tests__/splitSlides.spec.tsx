import React from 'react';
import { expect, describe, it } from 'vitest';

import { splitSlides } from '../src/lib/splitSlides';

describe('splitSlides', () => {
  it('split slide by hr type', () => {
    const Test = () => (
      <div>
        <div />
        <div />
        <hr />
        <div />
        <div />
        <div />
      </div>
    );
    const children = Test().props.children;
    const slides = splitSlides({ children });
    expect(slides.length).toBe(2);
    expect(slides[0].length).toBe(2);
    expect(slides[1].length).toBe(3);
  });
});
