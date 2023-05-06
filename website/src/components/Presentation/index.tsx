import { useColorMode } from '@docusaurus/theme-common';
import * as runtime from '@emotion/react/jsx-runtime';
import styled from '@emotion/styled';
import { compileSync, runSync } from '@mdx-js/mdx';
import { PresentifyProvider, components } from 'presentify';
import React from 'react';
import remarkMdxCodeMeta from 'remark-mdx-code-meta';

import { StyledWrapper } from './Presentation.styled';

export const Presentation = ({ editorValue }: { editorValue: string }) => {
  const { colorMode } = useColorMode();
  const result = compileSync(editorValue, {
    outputFormat: 'function-body',
    remarkPlugins: [remarkMdxCodeMeta],
  });

  const { default: Content } = runSync(String(result), runtime);

  const render = Content({ components });

  return (
    <StyledWrapper>
      <PresentifyProvider
        options={{
          useFiraCode: true,
          theme: colorMode,
        }}
      >
        {render.props.children}
      </PresentifyProvider>
    </StyledWrapper>
  );
};
