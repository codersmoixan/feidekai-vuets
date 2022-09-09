import initTheme from "@/utils/theme/initTheme";
import type { Theme, ThemeOptions } from "@/utils/theme/types/index.types";

export default function createTheme(options: ThemeOptions): Theme {
  return initTheme(options) as Theme;
}
