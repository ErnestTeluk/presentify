import { useColorMode } from '@docusaurus/theme-common';
import Editor from '@monaco-editor/react';
import React, { useEffect } from 'react';

import { StyledWrapper } from './EditorComponent.styled';
import { usePlaygroundContext } from '../../providers/PlaygroundProvider';

export const EditorComponent = ({
  editorValue,
  setEditorValue,
}: {
  editorValue: string;
  setEditorValue: (value: string) => void;
}) => {
  const { resetError } = usePlaygroundContext();
  const [width, setWidth] = React.useState(window.innerWidth);
  const { colorMode } = useColorMode();

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  });
  return (
    <StyledWrapper>
      <Editor
        height={width < 1250 ? '50vh' : '90vh'}
        width="100%"
        defaultLanguage="Markdown"
        value={editorValue}
        theme={colorMode === 'dark' ? 'vs-dark' : 'light'}
        onChange={value => {
          setEditorValue(value);
          resetError();
        }}
      />
    </StyledWrapper>
  );
};
