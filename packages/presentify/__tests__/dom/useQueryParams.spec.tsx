import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import { useQueryParams } from '../../src/hooks/useQueryParams';

describe('useQueryParams', () => {
  it('setParams', () => {
    const Test = () => {
      const { setParams } = useQueryParams();
      setParams('test', 'test');

      return null;
    };

    render(<Test />);

    expect(window.location.search).toBe('?test=test');
  });
  it('getParams', () => {
    window.history.pushState(
      undefined,
      '',
      `${window.location
        .toString()
        .replace(window.location.search, '')}?test=test`,
    );
    const Test = () => {
      const { getParams } = useQueryParams();

      return <p data-testid="testParam">{getParams('test')}</p>;
    };

    render(<Test />);

    expect(screen.getByTestId('testParam').innerHTML).toBe('test');
  });
});
