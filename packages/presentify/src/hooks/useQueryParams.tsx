import React from 'react';

export const useQueryParams = () => {
  const searchParams = new URLSearchParams(window.location.search);

  const getParams = (name: string) => searchParams.get(name);

  const setParams = (name: string, value: string) => {
    searchParams.set(name, value);
    window.history.pushState(
      undefined,
      '',
      `${window.location.pathname}?${searchParams.toString()}`,
    );
  };

  return { getParams, setParams };
};
