import React, { ReactNode } from 'react';
import { describe, it, expect } from 'vitest';

import { getSlideOptions } from '../src/lib/getSlideOptions';

describe('getSlideOptions', () => {
  it('should parse slide options correctly', () => {
    const slide: ReactNode = (
      <>
        <p>+++layout:normal,backgroundColor:red,className:test+++</p>
        <h1>test</h1>
      </>
    );

    const expectedOptions = {
      layout: 'normal',
      backgroundColor: 'red',
      className: 'test',
    };

    const result = getSlideOptions(slide.props.children);
    expect(result.options).toEqual(expectedOptions);
  });
});
