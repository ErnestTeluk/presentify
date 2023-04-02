import matchers from '@testing-library/jest-dom/matchers';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { expect, describe, it, afterEach } from 'vitest';

import { PresentifyProvider } from '../src';

expect.extend(matchers);

const keys = [
  { name: 'ArrowUp', startFrom: 0, elements: 3 },
  { name: 'ArrowDown', startFrom: 1, elements: 2 },
  { name: 'ArrowRight', startFrom: 0, elements: 3 },
  { name: 'ArrowLeft', startFrom: 1, elements: 2 },
];

const string = '+++\nlayout: "normal"\n+++';

const Test = () => (
  <PresentifyProvider>
    <p>{string}</p>
    <div />
    <div />
    <hr />
    <div />
    <div />
    <div />
  </PresentifyProvider>
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
  it('Pass slide options', () => {
    window.history.pushState(
      undefined,
      '',
      `${window.location
        .toString()
        .replace(window.location.search, '')}?page=0`,
    );
    render(<Test />);
    expect(screen.getByTestId('slide').children).toHaveLength(2);
    expect(screen.getByTestId('slide')).not.toHaveStyle('display: flex');
  });
  it('Not pass slide options', () => {
    window.history.pushState(
      undefined,
      '',
      `${window.location
        .toString()
        .replace(window.location.search, '')}?page=1`,
    );
    render(<Test />);
    expect(screen.getByTestId('slide').children).toHaveLength(3);
    expect(screen.getByTestId('slide')).toHaveStyle('display: flex');
  });
  it('Set slide to 2 when ?page=1 query was provided', () => {
    window.history.pushState(
      undefined,
      '',
      `${window.location
        .toString()
        .replace(window.location.search, '')}?page=1`,
    );
    render(<Test />);
    expect(screen.getByTestId('slide').children).toHaveLength(3);
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
    expect(screen.getByTestId('slide').children).toHaveLength(2);
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
    expect(screen.getByTestId('slide').children).toHaveLength(2);
  });
  it('show Not found page when query number was more than slides', () => {
    window.history.pushState(
      undefined,
      '',
      `${window.location
        .toString()
        .replace(window.location.search, '')}?page=3`,
    );
    render(<Test />);
    expect(screen.getByTestId('slide').children).toHaveLength(1);
    expect(screen.getByTestId('slide').children[0].innerHTML).toBe(
      '404 - Not Found',
    );
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
      expect(screen.getByTestId('slide').children).toHaveLength(elements);
    }),
  );
  it('ArrowUp go to first slide when clicked on last slide', async () => {
    render(<Test />);
    await userEvent.keyboard('{ArrowUp}{ArrowUp}');
    expect(screen.getByTestId('slide').children).toHaveLength(2);
  });
  it('ArrowDown go to last slide when clicked on first slide', async () => {
    render(<Test />);
    await userEvent.keyboard('{ArrowDown}');
    expect(screen.getByTestId('slide').children).toHaveLength(3);
  });
  it('not used key was pressed', async () => {
    render(<Test />);
    await userEvent.keyboard('{Enter}');
    expect(screen.getByTestId('slide').children).toHaveLength(2);
  });
});
