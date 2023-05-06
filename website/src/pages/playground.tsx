import styled from '@emotion/styled';
import { Presentation } from '@site/src/components/Presentation';
import Layout from '@theme/Layout';
import React from 'react';

import { EditorComponent } from '../components/EditorComponent';

export const StyledMain = styled.main`
  display: flex;

  @media screen and (max-width: 1250px) {
    flex-direction: column;
  }
`;

export default function Playground(): JSX.Element {
  const [editorValue, setEditorValue] = React.useState(
    '# Welcome to presentify\n' +
      '\n' +
      'click arrows to move between slides\n' +
      '\n' +
      '---\n' +
      '\n' +
      '# useState Example\n' +
      '```jsx showLineNumbers highlightLines="1,2,5-6"\n' +
      'function Counter({initialCount}) {\n' +
      '  const [count, setCount] = useState(initialCount);\n' +
      '  return (\n' +
      '    <>\n' +
      '      counter: {count}\n' +
      '      <button onClick={() => setCount(initialCount)}>reset</button>\n' +
      '      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>\n' +
      '      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>\n' +
      '    </>\n' +
      '  );\n' +
      '}\n' +
      '```',
  );

  return (
    <Layout title="Check how it works">
      <StyledMain>
        <EditorComponent
          editorValue={editorValue}
          setEditorValue={setEditorValue}
        />
        <Presentation editorValue={editorValue} />
      </StyledMain>
    </Layout>
  );
}
