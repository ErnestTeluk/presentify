import React, { createContext, ReactNode, useContext, useState } from 'react';

export interface PlaygroundContextProps {
  hasError: boolean;
  setHasError: (error: boolean) => void;
  resetError: () => void;
}

export const PlaygroundContext = createContext<PlaygroundContextProps>(null);

export const PlaygroundProvider = ({ children }: { children: ReactNode }) => {
  const [hasError, setHasError] = useState(false);

  const resetError = () => setHasError(false);

  const contextValue = {
    hasError,
    setHasError,
    resetError,
  };

  return (
    <PlaygroundContext.Provider value={contextValue}>
      {children}
    </PlaygroundContext.Provider>
  );
};

export const usePlaygroundContext = () => useContext(PlaygroundContext);
