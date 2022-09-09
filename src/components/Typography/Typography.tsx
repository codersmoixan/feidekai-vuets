import { defineComponent, onMounted, watch, ref, toRefs } from "vue";
import { Typography } from "@arco-design/web-vue";
import useGenerateTypographyCSS from "@/utils/theme/hooks/useGenerateTypographyCSS";
import type { PropType } from "vue";
import makeStyles from "vue3-makestyles";
import clsx from "clsx";
import type {
  TypographyType,
  TypographyVariant,
} from "@/components/Typography/types";

const useStyles = makeStyles((theme, props) => ({
  root: {
    color: theme.palette?.text?.[props?.color],
    "&.bold": {
      fontWeight: props?.bold,
    },
  },
}));

export default defineComponent({
  name: "Typography",
  props: {
    color: {
      type: String as PropType<TypographyType>,
      default: "primary",
    },
    variant: {
      type: String as PropType<TypographyVariant>,
      default: "h3",
    },
    bold: Number,
  },
  setup(props, { slots, attrs }) {
    const { variant, bold } = toRefs(props);
    const { className, initThemeCSS } = useGenerateTypographyCSS();
    const classes = useStyles(props);

    onMounted(() => {
      initThemeCSS(variant.value);
    });

    watch(variant, (newVal) => {
      const node = ref(newVal);
      initThemeCSS(node.value);
    });

    return () => (
      <Typography
        class={clsx(className.value, classes.root, {
          bold: bold.value,
        })}
        {...attrs}
      >
        {slots.default && slots.default()}
      </Typography>
    );
  },
});
