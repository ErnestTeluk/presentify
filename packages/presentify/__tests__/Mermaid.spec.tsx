import matchers from '@testing-library/jest-dom/matchers';
import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import { describe, it, expect, afterEach } from 'vitest';

import { Mermaid } from '../src/components/Mermaid';
import { PresentifyProvider } from '../src/components/PresentifyProvider';

expect.extend(matchers);

afterEach(() => {
  cleanup();
});

const example = `flowchart TD
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[fa:fa-car Car]`;

describe('Mermaid', () => {
  it('should Mermaid render', async () => {
    render(<Mermaid>{example}</Mermaid>);
    expect(await screen.findByTestId('mermaid')).toBeTruthy();
    expect(await screen.findByTestId('mermaid')).toHaveAttribute(
      'data-processed',
      'true',
    );
    expect(await screen.findByTestId('mermaid')).toHaveAttribute(
      'data-theme',
      'default',
    );
    expect(await screen.findByTestId('mermaid')).toHaveAttribute(
      'data-font',
      'monospace',
    );
  });
  it('has dark theme, and firaCode', async () => {
    render(
      <PresentifyProvider options={{ theme: 'dark', useFiraCode: true }}>
        <Mermaid>{example}</Mermaid>
      </PresentifyProvider>,
    );
    expect(await screen.findByTestId('mermaid')).toHaveAttribute(
      'data-theme',
      'dark',
    );
    expect(await screen.findByTestId('mermaid')).toHaveAttribute(
      'data-font',
      'Fira Code, monospace',
    );
  });
});
