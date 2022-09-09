import type { Ref } from "vue";
import isUndefined from "lodash/isUndefined";
import type { Theme } from "@/utils/theme/types/index.types";
import generateCSS from "@/utils/theme/utils/generateCSS";
import generateStyleElement from "@/utils/theme/utils/generateStyleElement";
import generateStyleElementID from "@/utils/theme/utils/generateStyleElementID";

function generateThemeTypographyCSS(
  theme: Theme,
  variant: string,
  element?: Ref
): string | null {
  if (isUndefined(variant)) return null;

  const variantThemeOptions = theme.typography?.[variant];

  if (isUndefined(variantThemeOptions)) {
    console.error(
      'A valid "variant" value needs to be passed in, which belongs to the valid values defined in "typography" in "theme.ts/.js"'
    );

    return null;
  }

  const { css, selector } = generateCSS(variantThemeOptions);
  const eleName = generateStyleElementID(css);
  generateStyleElement(css, eleName, selector, element);

  return selector;
}

export default generateThemeTypographyCSS;
