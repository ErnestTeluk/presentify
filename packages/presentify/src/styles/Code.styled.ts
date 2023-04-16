import styled from '@emotion/styled';

export const LineNumber = styled.span<{ lineWidth: number }>`
  display: inline-block;
  width: ${({ lineWidth }) => `${lineWidth}em`};
  user-select: none;
`;

export const Line = styled.div<{ isHighlight: boolean }>`
  ${({ isHighlight }) => (isHighlight ? '' : 'opacity: 0.3')};
  font-size: 2em;
`;
