import type { ThemeOptions } from "@/utils/theme/types/index.types";
import createBreakpoints from "@/utils/theme/createBreakpoints";
import isEmpty from "lodash/isEmpty";
import isUndefined from "lodash/isUndefined";

function initTheme(options: ThemeOptions = {}): ThemeOptions {
  const {
    spacing = {
      step: 8,
      unit: "px",
    },
    palette,
    typography = {},
    mixins = {},
    shape = {},
    breakpoints: propsBreakpoints = {},
    ...other
  } = options;

  const breakpoints = createBreakpoints(propsBreakpoints);

  const createSpacing = (...arg: number[]): string | null => {
    if (isUndefined(spacing) || isEmpty(spacing)) return null;

    const complete = arg.map(
      (i) => `${(spacing.step ?? 8) * i}${spacing.unit}`
    );

    return complete.join(" ");
  };

  return {
    spacing: createSpacing as any,
    spacingOptions: spacing,
    breakpoints,
    palette,
    typography,
    mixins,
    shape,
    ...other,
  };
}

export default initTheme;
