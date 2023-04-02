import { ReactElement } from 'react';
import { describe, it, expect } from 'vitest';

import { getSlideOptions } from '../src/lib/getSlideOptions';

describe('getSlideOptions', () => {
  it('should parse slide options correctly', () => {
    const slides: ReactElement[][] = [
      [
        {
          key: '.0',
          type: 'p',
          props: { children: '+++\nlayout: "center"\n+++' },
        },
        { key: '.1', type: 'h1', props: { children: 'Slide 1' } },
      ],
      [
        { key: '.3', type: 'p', props: { children: 'Some text' } },
        { key: '.4', type: 'h1', props: { children: 'Slide 2' } },
      ],
    ];
    const expectedOptions = [
      {
        slideNumber: 0,
        options: '+++\nlayout: "center"\n+++',
        parsedOptions: {
          layout: 'center',
        },
      },
    ];
    const result = getSlideOptions({ slides });
    expect(result.options).toEqual(expectedOptions);
  });
});
