import useTheme from "@/hooks/useTheme";
import { ref } from "vue";
import generateThemeCSS from "@/utils/theme/utils/generateThemeCSS";

const useGenerateThemeCSS = () => {
  const theme = useTheme();
  const className = ref<string>("");

  const initThemeCSS = (variant: string) => {
    const themeClass = generateThemeCSS(theme, variant);

    if (themeClass) {
      className.value = themeClass;
    }
  };

  return {
    className,
    initThemeCSS,
  };
};

export default useGenerateThemeCSS;
