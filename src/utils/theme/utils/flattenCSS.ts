import { isEmptyObject, toLine } from "@/utils/helper";
import isObject from "lodash/isObject";
import type { ObjectType } from "@/utils/theme/utils/types";

function flattenCSS(CSSOptions: ObjectType): string[] {
  const CSSChunk: string[] = [];

  for (const key in CSSOptions) {
    // if (isEmptyObject(CSSOptions[key])) {
    //   continue;
    // }

    if (isObject(CSSOptions[key])) {
      // if (item.includes("@media")) {
      //   CSSChunk = [...CSSChunk, `${item} {`, ...flattenCSS(CSSOptions[item]), "}";
      // } else {
      //   CSSChunk = [...CSSChunk, ...flattenCSS(variant[item])];
      // }
      CSSChunk.push(`${key} {`, ...flattenCSS(CSSOptions[key]), "}");
    } else {
      CSSChunk.push(`${toLine(key)}: ${CSSOptions[key]};`);
    }
  }

  // console.log(CSSChunk);

  return CSSChunk;
}

export default flattenCSS;
