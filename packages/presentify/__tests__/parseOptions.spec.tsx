import { describe, it, expect } from 'vitest';

import { parseOptions } from '../src/lib/parseOptions';

const option = '+++\n layout: center \n+++';
describe('parseOptions', () => {
  it('parse layout option', () => {
    const parsedOptions = parseOptions(option);
    expect(parsedOptions).toEqual({ layout: 'center' });
  });
});
