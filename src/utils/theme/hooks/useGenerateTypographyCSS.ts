import useTheme from "@/hooks/useTheme";
import generateThemeTypographyCSS from "@/utils/theme/utils/generateThemeTypographyCSS";
import { ref } from "vue";

const useGenerateTypographyCSS = () => {
  const theme = useTheme();
  const className = ref<string>("");

  const initThemeCSS = (variant: string) => {
    const themeClass = generateThemeTypographyCSS(theme, variant);
    if (themeClass) {
      className.value = themeClass;
    }
  };

  return {
    className,
    initThemeCSS,
  };
};

export default useGenerateTypographyCSS;
