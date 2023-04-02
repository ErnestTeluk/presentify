import matchers from '@testing-library/jest-dom/matchers';
import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import { expect, describe, it, afterEach } from 'vitest';

expect.extend(matchers);

import { Slide } from '../src/components/Slide';

afterEach(() => {
  cleanup();
});

describe('Slide', () => {
  it('No Options', () => {
    render(
      <Slide options={undefined}>
        <div />
        <div />
      </Slide>,
    );
    expect(screen.getByTestId('slide')).toHaveStyle('display: flex');
  });
  it('Layout option', () => {
    render(
      <Slide
        options={{
          slideNumber: 0,
          options: 'test',
          parsedOptions: {
            layout: 'normal',
            backgroundImg: undefined,
            backgroundColor: undefined,
            className: undefined,
          },
        }}
      >
        <div />
        <div />
      </Slide>,
    );
    expect(screen.getByTestId('slide')).not.toHaveStyle('display: flex');
  });
  it('BackgroundImg option', () => {
    render(
      <Slide
        options={{
          slideNumber: 0,
          options: 'test',
          parsedOptions: {
            layout: undefined,
            backgroundImg: 'linkToImg',
            backgroundColor: undefined,
            className: undefined,
          },
        }}
      >
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
      <Slide
        options={{
          slideNumber: 0,
          options: 'test',
          parsedOptions: {
            layout: undefined,
            backgroundImg: undefined,
            backgroundColor: 'red',
            className: undefined,
          },
        }}
      >
        <div />
        <div />
      </Slide>,
    );
    expect(screen.getByTestId('slide')).toHaveStyle('background-color: red');
    expect(screen.getByTestId('slide')).toHaveStyle('display: flex');
  });
  it('Multiple options', () => {
    render(
      <Slide
        options={{
          slideNumber: 0,
          options: 'test',
          parsedOptions: {
            layout: 'normal',
            backgroundImg: undefined,
            backgroundColor: 'red',
            className: undefined,
          },
        }}
      >
        <div />
        <div />
      </Slide>,
    );
    expect(screen.getByTestId('slide')).toHaveStyle('background-color: red');
    expect(screen.getByTestId('slide')).not.toHaveStyle('display: flex');
  });
  it('ClassName option', () => {
    render(
      <Slide
        options={{
          slideNumber: 0,
          options: 'test',
          parsedOptions: {
            layout: undefined,
            backgroundImg: undefined,
            backgroundColor: undefined,
            className: 'test',
          },
        }}
      >
        <div />
        <div />
      </Slide>,
    );
    expect(screen.getByTestId('slide')).toHaveClass('test');
  });
});
