import github from 'prism-react-renderer/themes/github';
import vsDark from 'prism-react-renderer/themes/vsDark';
import { describe, expect, it } from 'vitest';

import { getTheme } from '../src/lib/getTheme';

describe('getTheme', () => {
  it('should return theme correctly', () => {
    expect(getTheme('light')).toEqual(github);
    expect(getTheme('dark')).toEqual(vsDark);
    expect(getTheme(undefined)).toEqual(github);
  });
});
