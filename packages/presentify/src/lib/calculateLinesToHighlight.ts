import rangeParser from 'parse-numeric-range';
export const calculateLinesToHighlight = (
  highlightLines: string | undefined,
) => {
  const regExp = /([\d,-]+)/;
  if (highlightLines && regExp.test(highlightLines)) {
    const strlineNumbers = regExp.exec(highlightLines)![1];
    const lineNumbers = rangeParser(strlineNumbers);
    return (index: number) => lineNumbers.includes(index + 1);
  }
  if (!highlightLines) {
    return () => true;
  }
  return () => false;
};
