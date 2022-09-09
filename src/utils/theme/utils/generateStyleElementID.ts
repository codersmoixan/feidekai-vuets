import generateClassName from "@/utils/theme/utils/generateClassName";

function generateStyleElementID(stringifyCSS: string): string {
  const styleElementIDName = generateClassName(stringifyCSS);

  return `makeStyleElement__${styleElementIDName}`;
}

export default generateStyleElementID;
