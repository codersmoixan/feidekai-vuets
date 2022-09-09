import { defineComponent, onMounted, ref, toRefs, watch } from "vue";
import clsx from "clsx";
import { Button } from "@arco-design/web-vue";
import useGenerateTypographyCSS from "@/utils/theme/hooks/useGenerateTypographyCSS";
import makeStyles from "vue3-makestyles";
import type { PropType } from "vue";
import type { Size, Status } from "@arco-design/web-vue";
import type {
  ButtonsClasses,
  ButtonsType,
  ButtonsVariant,
} from "@/components/Buttons/types";

const useStyles = makeStyles((theme, props) => ({
  root: {
    padding: theme.spacing(0.75, 3),
    boxSizing: "border-box",
    "&.bold": {
      fontWeight: props?.bold ? `${props.bold}` : "inherit",
    },
    "&.arco-btn-size-medium": {
      height: "48px",
    },
    "&.arco-btn-primary": {
      borderRadius: "24px",
      color: theme.palette?.primary?.white,
      backgroundColor: theme.palette?.background?.main,

      "&:hover": {
        backgroundColor: theme.palette?.secondary?.main,
      },
    },
    "&.arco-btn-text": {
      color: theme.palette?.primary?.main,
      "&:hover": {
        backgroundColor: theme.palette?.primary?.transparent,
        color: theme.palette?.secondary?.main,
      },
    },
    "&.arco-btn-outline": {
      borderRadius: "24px",
      borderColor: theme.palette?.primary?.main,
      color: theme.palette?.primary?.main,
      "&:hover": {
        backgroundColor: theme.palette?.primary?.peach,
        borderColor: theme.palette?.secondary?.main,
        color: theme.palette?.secondary?.main,
      },
    },
  },
  fullWidth: {
    display: "block",
    width: "100%",
  },
}));

export default defineComponent({
  props: {
    type: String as PropType<ButtonsType>,
    size: String as PropType<Size>,
    status: String as PropType<Status>,
    fullWidth: Boolean,
    class: String,
    variant: {
      type: String as PropType<ButtonsVariant>,
      default: "button",
    },
    bold: [String, Number],
    classes: Object as PropType<ButtonsClasses>,
  },
  setup(props, { attrs, slots }) {
    const { type, fullWidth, class: className, variant, bold } = toRefs(props);
    const classes = useStyles(props);
    const { className: themeButtonClassName, initThemeCSS } =
      useGenerateTypographyCSS();

    onMounted(() => {
      initThemeCSS(variant.value);
    });

    watch(variant, (newVal) => {
      const node = ref(newVal);
      initThemeCSS(node.value);
    });

    return () => (
      <Button
        type={type.value}
        class={clsx(
          classes.root,
          {
            [classes.fullWidth]: fullWidth.value,
            bold: bold.value,
          },
          className.value,
          themeButtonClassName.value
        )}
        {...attrs}
      >
        {slots.default && slots.default()}
      </Button>
    );
  },
});
