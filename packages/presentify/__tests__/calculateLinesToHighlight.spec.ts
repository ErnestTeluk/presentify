import { describe, expect, it } from 'vitest';

import { calculateLinesToHighlight } from '../src/lib/calculateLinesToHighlight';

describe('calculateLinesToHighlight', () => {
  it('should return false when undefined was passed', () => {
    const shouldHighlightLine = calculateLinesToHighlight(undefined);
    expect(shouldHighlightLine(0)).toBe(false);
  });
  it('should return false when broken value was passed', () => {
    const shouldHighlightLine = calculateLinesToHighlight('test');
    expect(shouldHighlightLine(0)).toBe(false);
  });
});
