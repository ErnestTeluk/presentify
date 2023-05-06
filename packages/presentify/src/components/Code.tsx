import Highlight, { defaultProps } from 'prism-react-renderer';
import React, { Key, ReactElement, useEffect, useRef, useState } from 'react';

import { usePresentifyContext } from './PresentifyProvider';
import { calculateLinesToHighlight } from '../lib/calculateLinesToHighlight';
import { getLineNumberWidth } from '../lib/getLineNumberWidth';
import { getTheme } from '../lib/getTheme';
import { Line, LineNumber, StyledPre } from '../styles/Code.styled';

export const Code = ({
  children,
  showLineNumbers,
  highlightLines,
}: {
  children: ReactElement;
  showLineNumbers?: boolean;
  highlightLines?: string;
}) => {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLPreElement>(null);
  const context = usePresentifyContext();
  const { options } = context || {};
  const className = children.props.className || '';
  const code = children.props.children.trim();
  const language = className.replace(/language-/, '');
  const lineWidth = getLineNumberWidth(code);
  const shouldHighlightLine = calculateLinesToHighlight(highlightLines);

  useEffect(() => {
    const handleResize = () => {
      setWidth(ref.current?.offsetWidth || 0);
    };

    // Initial measurement
    handleResize();

    // Add event listener on component mount
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Highlight
      {...defaultProps}
      code={code}
      language={language}
      theme={getTheme(options?.theme)}
    >
      {({ tokens, getLineProps, getTokenProps }) => (
        <StyledPre data-testid="code" className={className} ref={ref}>
          {tokens.map((line, i: number) => (
            <Line
              elementWidth={width}
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
        </StyledPre>
      )}
    </Highlight>
  );
};
