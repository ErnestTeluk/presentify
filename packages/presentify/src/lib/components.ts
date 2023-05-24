import { ReactElement, ReactNode } from 'react';

import { Code } from '../components/Code';
import { Mermaid } from '../components/Mermaid';

export const components: {
  pre: ({
    children,
    showLineNumbers,
    highlightLines,
  }: {
    children: ReactElement;
    showLineNumbers?: boolean;
    highlightLines?: string;
  }) => JSX.Element;
  Mermaid: ({ children }: { children: ReactNode }) => ReactElement;
} = {
  pre: Code,
  Mermaid,
};
