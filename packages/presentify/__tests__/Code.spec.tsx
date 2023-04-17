import matchers from '@testing-library/jest-dom/matchers';
import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import { describe, it, expect, afterEach } from 'vitest';

import { Code } from '../src/components/Code';
import { PresentifyProvider } from '../src/components/PresentifyProvider';

expect.extend(matchers);

afterEach(() => {
  cleanup();
});

describe('Code', () => {
  it('should render correctly', () => {
    render(
      <Code>
        <code className="language-js">const test = 'test';</code>
      </Code>,
    );
    expect(screen.getByTestId('code').children).toHaveLength(1);
    expect(screen.getByTestId('code').children[0].children).toHaveLength(6);
    expect(screen.getByTestId('code').children[0].children[2]).toHaveClass(
      'operator',
    );
  });
  it('should render correctly className', () => {
    const { rerender } = render(
      <Code>
        <code className="language-js">const test = 'test';</code>
      </Code>,
    );
    expect(screen.getByTestId('code')).toHaveClass('language-js');
    rerender(
      <Code>
        <code>const test = 'test';</code>
      </Code>,
    );
    expect(screen.getByTestId('code')).not.toHaveClass('language-js');
  });
  it('should render correctly with showLineNumbers', () => {
    render(
      <Code showLineNumbers>
        <code className="language-js">const test = 'test';</code>
      </Code>,
    );
    expect(screen.getByTestId('code').children[0].children[0].innerHTML).toBe(
      '1',
    );
  });
  it('should render correctly with highlightLines', () => {
    render(
      <Code showLineNumbers highlightLines="1">
        <code className="language-js">const test = 'test';</code>
      </Code>,
    );
    expect(screen.getByTestId('code').children[0]).not.toHaveStyle(
      'opacity: 0.3;',
    );
  });
  it('should render Fira Code correctly', () => {
    render(
      <PresentifyProvider options={{ useFiraCode: true }}>
        <Code showLineNumbers highlightLines="1">
          <code className="language-js">const test = 'test';</code>
        </Code>
      </PresentifyProvider>,
    );
    expect(screen.getByTestId('code').children[0]).toHaveStyle(
      'font-family: Fira Code,monospace;',
    );
  });
});
