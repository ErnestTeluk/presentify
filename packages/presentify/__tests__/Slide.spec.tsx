import matchers from '@testing-library/jest-dom/matchers';
import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import { expect, describe, it, afterEach } from 'vitest';

expect.extend(matchers);

import { PresentifyProvider } from '../src/components/PresentifyProvider';
import { Slide } from '../src/components/Slide';

afterEach(() => {
  cleanup();
});

describe('Slide', () => {
  it('No Options', () => {
    render(
      <Slide>
        <div />
        <div />
      </Slide>,
    );
    expect(screen.getByTestId('slide')).toHaveStyle('display: flex');
  });
  it('Layout option', () => {
    render(
      <Slide>
        <p>+++layout:normal+++</p>
        <div />
        <div />
      </Slide>,
    );
    expect(screen.getByTestId('slide')).not.toHaveStyle('display: flex');
  });
  it('BackgroundImg option', () => {
    render(
      <Slide>
        <p>+++backgroundImg: linkToImg +++</p>
        <div />
        <div />
      </Slide>,
    );
    expect(screen.getByTestId('slide')).toHaveStyle(
      'background-image: url("linkToImg")',
    );
    expect(screen.getByTestId('slide')).toHaveStyle('display: flex');
  });
  it('BackgroundColor option', () => {
    render(
      <Slide>
        <p>+++backgroundColor: red+++</p>
        <div />
        <div />
      </Slide>,
    );
    expect(screen.getByTestId('slide')).toHaveStyle('background-color: red');
    expect(screen.getByTestId('slide')).toHaveStyle('display: flex');
  });
  it('Multiple options', () => {
    render(
      <Slide>
        <p>+++layout: normal, backgroundColor: red+++</p>
        <div />
        <div />
      </Slide>,
    );
    expect(screen.getByTestId('slide')).toHaveStyle('background-color: red');
    expect(screen.getByTestId('slide')).not.toHaveStyle('display: flex');
  });
  it('ClassName option', () => {
    render(
      <Slide>
        <p>+++className: test+++</p>
        <div />
        <div />
      </Slide>,
    );
    expect(screen.getByTestId('slide')).toHaveClass('test');
  });
  it('Correctly use globalOptions', () => {
    render(
      <PresentifyProvider options={{ backgroundColor: 'red' }}>
        <div />
        <div />
      </PresentifyProvider>,
    );

    expect(screen.getByTestId('slide')).toHaveStyle('background-color: red');
  });
  it('Correctly use globalOptions and slideOptions', () => {
    const option = '+++\nbackgroundColor: blue\n+++';
    render(
      <PresentifyProvider options={{ backgroundColor: 'red' }}>
        <p>{option}</p>
        <div />
        <div />
      </PresentifyProvider>,
    );

    expect(screen.getByTestId('slide')).toHaveStyle('background-color: blue');
  });
});
