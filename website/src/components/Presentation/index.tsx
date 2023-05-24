import { useColorMode } from '@docusaurus/theme-common';
import * as runtime from '@emotion/react/jsx-runtime';
import { evaluateSync } from '@mdx-js/mdx';
import { MDXProvider, useMDXComponents } from '@mdx-js/react';
import {
  PresentifyProvider,
  components as componentsFromPresentify,
} from 'presentify';
import React, { Fragment } from 'react';
import remarkMdxCodeMeta from 'remark-mdx-code-meta';

import { StyledWrapper } from './Presentation.styled';
import { Mermaid } from '../Mermaid';

export const Presentation = ({ editorValue }: { editorValue: string }) => {
  const { colorMode } = useColorMode();

  const { default: Content } = evaluateSync(editorValue, {
    ...runtime,
    Fragment,
    remarkPlugins: [remarkMdxCodeMeta],
  });

  const components = {
    ...componentsFromPresentify,
    Mermaid, // FIXME: This is a hack to get Mermaid working on playground, because when it goes from presentify it doesn't work.
  };

  const result = Content({ components });

  return (
    <StyledWrapper>
      <PresentifyProvider
        options={{
          useFiraCode: true,
          theme: colorMode,
        }}
      >
        {result.props.children}
      </PresentifyProvider>
    </StyledWrapper>
  );
};
