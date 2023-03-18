import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { expect, describe, it, afterEach, beforeEach } from 'vitest';

import { PresentifyProvider } from '../src';

const keys = [
  { name: 'ArrowUp', startFrom: 0, elements: 3 },
  { name: 'ArrowDown', startFrom: 1, elements: 2 },
  { name: 'ArrowRight', startFrom: 0, elements: 3 },
  { name: 'ArrowLeft', startFrom: 1, elements: 2 },
];

const Test = () => (
  <div data-testid="x">
    <PresentifyProvider>
      <div />
      <div />
      <hr />
      <div />
      <div />
      <div />
    </PresentifyProvider>
  </div>
);

afterEach(() => {
  cleanup();
  window.history.pushState(
    undefined,
    '',
    `${window.location.toString().replace(window.location.search, '')}`,
  );
});

describe('PresentifyProvider', () => {
  it('Set slide to 2 when ?page=1 query was provided', () => {
    window.history.pushState(
      undefined,
      '',
      `${window.location
        .toString()
        .replace(window.location.search, '')}?page=1`,
    );
    render(<Test />);
    expect(screen.getByTestId('x').children).toHaveLength(3);
  });
  it('Set slide to 1 when ?page=0 query was provided', () => {
    window.history.pushState(
      undefined,
      '',
      `${window.location
        .toString()
        .replace(window.location.search, '')}?page=0`,
    );
    render(<Test />);
    expect(screen.getByTestId('x').children).toHaveLength(2);
  });
  it('Set slide to 1 when non number query was provided', () => {
    window.history.pushState(
      undefined,
      '',
      `${window.location
        .toString()
        .replace(window.location.search, '')}?page=test`,
    );
    render(<Test />);
    expect(screen.getByTestId('x').children).toHaveLength(2);
  });
});

describe('Keyboard', () => {
  keys.map(({ name, startFrom, elements }) =>
    it(`${name} change slide`, async () => {
      window.history.pushState(
        undefined,
        '',
        `${window.location
          .toString()
          .replace(window.location.search, '')}?page=${startFrom}`,
      );
      render(<Test />);
      await userEvent.keyboard(`{${name}}`);
      expect(screen.getByTestId('x').children).toHaveLength(elements);
    }),
  );
  it('ArrowUp go to first slide when clicked on last slide', async () => {
    render(<Test />);
    await userEvent.keyboard('{ArrowUp}{ArrowUp}');
    expect(screen.getByTestId('x').children).toHaveLength(2);
  });
  it('ArrowDown go to last slide when clicked on first slide', async () => {
    render(<Test />);
    await userEvent.keyboard('{ArrowDown}');
    expect(screen.getByTestId('x').children).toHaveLength(3);
  });
  it('not used key was pressed', async () => {
    render(<Test />);
    await userEvent.keyboard('{Enter}');
    expect(screen.getByTestId('x').children).toHaveLength(2);
  });
});
