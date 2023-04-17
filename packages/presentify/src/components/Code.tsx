import Highlight, { defaultProps } from 'prism-react-renderer';
import React, { Key, ReactElement } from 'react';

import { usePresentifyContext } from './PresentifyProvider';
import { calculateLinesToHighlight } from '../lib/calculateLinesToHighlight';
import { getLineNumberWidth } from '../lib/getLineNumberWidth';
import { getTheme } from '../lib/getTheme';
import { Line, LineNumber } from '../styles/Code.styled';

export const Code = ({
  children,
  showLineNumbers,
  highlightLines,
}: {
  children: ReactElement;
  showLineNumbers?: boolean;
  highlightLines?: string;
}) => {
  const context = usePresentifyContext();
  const { options } = context || {};
  const className = children.props.className || '';
  const code = children.props.children.trim();
  const language = className.replace(/language-/, '');
  const lineWidth = getLineNumberWidth(code);
  const shouldHighlightLine = calculateLinesToHighlight(highlightLines);

  return (
    <Highlight
      {...defaultProps}
      code={code}
      language={language}
      theme={getTheme(options?.theme)}
    >
      {({ tokens, getLineProps, getTokenProps }) => (
        <pre data-testid="code" className={className}>
          {tokens.map((line, i: number) => (
            <Line
              useFiraCode={options?.useFiraCode}
              key={i}
              {...getLineProps({ line, key: i })}
              isHighlight={shouldHighlightLine(i)}
            >
              {showLineNumbers && (
                <LineNumber lineWidth={lineWidth}>{i + 1}</LineNumber>
              )}
              {line.map((token, key: Key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </Line>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
