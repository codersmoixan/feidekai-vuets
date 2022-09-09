import generateCSS from "@/utils/theme/utils/generateCSS";
import generateStyleElement from "@/utils/theme/utils/generateStyleElement";
import type { ObjectType } from "@/utils/theme/utils/types";
import generateClassName from "@/utils/theme/utils/generateClassName";
import { isEmptyObject } from "@/utils/helper";

function combineCSSAndCreateStyleElement(styles: ObjectType): {
  classes: ObjectType<string>;
  styleEleName: string | null;
} {
  const classes: ObjectType<string> = {};
  let stringifyCSS = "";

  for (const key in styles) {
    if (isEmptyObject(styles[key])) {
      continue;
    }

    const { selector, css } = generateCSS(styles[key], key);

    classes[key] = selector;
    stringifyCSS += css;
  }

  const styleElementIDName = generateClassName(stringifyCSS);
  const eleName = `makeStyleElement__${styleElementIDName}`;
  const styleEleName = generateStyleElement(stringifyCSS, eleName);

  return {
    classes,
    styleEleName,
  };
}

export default combineCSSAndCreateStyleElement;
