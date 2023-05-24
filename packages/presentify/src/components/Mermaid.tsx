import mermaid from 'mermaid';
import React, { ReactNode, useEffect } from 'react';

import { usePresentifyContext } from './PresentifyProvider';
import { StyledWrapper } from '../styles/Mermaid.styles';

export const Mermaid = ({ children }: { children: ReactNode }) => {
  const context = usePresentifyContext();
  const { options } = context || {};
  const { theme, useFiraCode } = options || {};
  const mermaidTheme = theme === 'dark' ? 'dark' : 'default';
  const fontFamily = useFiraCode ? 'Fira Code, monospace' : 'monospace';

  mermaid.initialize({
    startOnLoad: true,
    theme: mermaidTheme,
    fontFamily,
    securityLevel: 'loose',
  });

  useEffect(() => {
    mermaid.contentLoaded();
  }, []);

  return (
    <StyledWrapper
      className="mermaid"
      data-testid="mermaid"
      data-theme={mermaidTheme}
      data-font={fontFamily}
    >
      {children}
    </StyledWrapper>
  );
};
