import React from 'react';

export const useQueryParams = () => {
  const searchParams = new URLSearchParams(window.location.search);

  const getParams = (name: string) => searchParams.get(name);

  const setParams = (name: string, value: string) => {
    window.history.pushState(
      undefined,
      '',
      `${window.location
        .toString()
        .replace(window.location.search, '')}?${name}=${value}`,
    );
  };

  return { getParams, setParams };
};
