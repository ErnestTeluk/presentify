import styled from '@emotion/styled';

export const LineNumber = styled.span<{ lineWidth: number }>`
  display: inline-block;
  width: ${({ lineWidth }) => `${lineWidth}em`};
  user-select: none;
`;

export const Line = styled.div<{
  isHighlight: boolean;
  useFiraCode?: boolean;
  elementWidth: number;
}>`
  ${({ isHighlight }) => (isHighlight ? '' : 'opacity: 0.3')};
  font-size: ${({ elementWidth }) => `calc((${elementWidth}px - 40px) / 50);`}
    ${({ useFiraCode }) =>
      useFiraCode ? 'font-family: Fira Code, monospace;' : ''};
`;

export const StyledPre = styled.pre`
  width: 100%;
  padding: 20px;
`;
