import createBreakpoints from "@/utils/theme/createBreakpoints";
import { inject } from "vue";
import isEmpty from "lodash/isEmpty";
import type { Theme } from "@/utils/theme/types/index.types";

const useTheme = (): Theme => {
  const theme = inject<Theme>("theme");

  return isEmpty(theme)
    ? {
        breakpoints: createBreakpoints(),
      }
    : (theme as any);
};

export default useTheme;
