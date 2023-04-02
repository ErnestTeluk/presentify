import { describe, it, expect } from 'vitest';

import { parseOptions } from '../src/lib/parseOptions';
import { Options } from '../src/types/types';

const options: Options[] = [
  { slideNumber: 0, options: '+++\n layout: "center" \n+++' },
];
describe('parseOptions', () => {
  it('parse layout option', () => {
    const parsedOptions = parseOptions({ options });
    expect(parsedOptions).toContainEqual({
      slideNumber: 0,
      options: '+++\n layout: "center" \n+++',
      parsedOptions: { layout: 'center' },
    });
  });
});
