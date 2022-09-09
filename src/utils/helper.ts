import isUndefined from "lodash/isUndefined";
import isEmpty from "lodash/isEmpty";

export const toLine = (name: string): string =>
  name.replace(/([A-Z])/g, "-$1").toLowerCase();

export const isNull = (value: any) => value === null;

export const isEmptyObject = (value: any) =>
  isNull(value) || isUndefined(value) || isEmpty(value);
