import flattenCSS from "@/utils/theme/utils/flattenCSS";
import stringifyCSS from "@/utils/theme/utils/stringifyCSS";
import stylis from "stylis";
import generateClassName from "@/utils/theme/utils/generateClassName";
import isUndefined from "lodash/isUndefined";
import type { ObjectType } from "@/utils/theme/utils/types";
import type { GeneratedCSS } from "@/utils/theme/types/generateCSS.type";

function generateCSS<T = ObjectType>(
  options: T,
  className?: string
): GeneratedCSS {
  const flatCSS = flattenCSS(options);

  const stringCSS = stringifyCSS(flatCSS);
  const selector = generateClassName(stringCSS);

  const selectorName = isUndefined(className)
    ? `makeStyles-${selector}`
    : `makeStyles-${className}__${selector}`;

  const css = stylis(`.${selectorName}`, stringCSS);

  return {
    css,
    selector: selectorName,
  };
}
export default generateCSS;
