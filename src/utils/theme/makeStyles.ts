import {
  onMounted,
  onUnmounted,
  reactive,
  watch,
  ref,
  watchEffect,
  isProxy,
  toRefs,
} from "vue";
import useTheme from "@/hooks/useTheme";
import isEmpty from "lodash/isEmpty";
import combineCSSAndCreateStyleElement from "@/utils/theme/utils/combineCSSAndCreateStyleElement";
import combinePropsClassNames from "@/utils/theme/utils/combinePropsClassNames";
import type { ObjectType } from "@/utils/theme/utils/types";
import type { ExtractPropTypes } from "vue";
import type { Theme } from "@/utils/theme/types/index.types";
import deleteCSSAndStyleElement from "@/utils/theme/utils/deleteCSSAndStyleElement";

function makeStyles(
  createStyle: (theme: Theme, props?: ExtractPropTypes<ObjectType>) => any
) {
  return (props?: object) => {
    const theme = useTheme();
    const styleEleName = ref<string | null>("");
    const classNames = reactive<ObjectType>({});

    const effectClasses = (propOptions: any) => {
      const styles = createStyle(theme, propOptions);

      if (isEmpty(styles)) {
        return;
      }

      const combineCSS = combineCSSAndCreateStyleElement(styles);
      const combineClasses = combinePropsClassNames(
        combineCSS.classes,
        propOptions?.classes
      );

      styleEleName.value = combineCSS.styleEleName;

      for (const key in combineClasses) {
        classNames[key] = combineClasses[key];
      }
    };

    watchEffect(() => {
      effectClasses(props);
    });

    onUnmounted(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const combineClassNamesValue = Object.values(classNames);
      deleteCSSAndStyleElement(
        `.${combineClassNamesValue?.[0]}`,
        styleEleName.value
      );
    });

    return classNames;
  };
}

export default makeStyles;
