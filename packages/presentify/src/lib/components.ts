import { ReactElement } from 'react';

import { Code } from '../components/Code';

export const components: {
  pre: ({ children, showLineNumbers }: any) => JSX.Element;
} = {
  pre: Code,
};
