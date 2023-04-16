const BASE_VALUE = 0.5;
const REDUCE_30_PERCENT = 0.7;
const NEW_LINE = /\r\n|\r|\n/;

export const getLineNumberWidth = (code: string) =>
  BASE_VALUE +
  code.split(NEW_LINE).length.toString().length * REDUCE_30_PERCENT;
