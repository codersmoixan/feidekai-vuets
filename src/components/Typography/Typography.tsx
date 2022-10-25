import { defineComponent } from "vue";
import { Typography } from "@arco-design/web-vue";
import type { PropType } from "vue";
import makeStyles from "vue3-makestyles";
import clsx from "clsx";
import type {
  TypographyColor,
  TypographyVariant,
} from "@/components/Typography/types";

const useStyles = makeStyles(
  (theme, props) => ({
    root: {
      display: props?.display,
      fontFamily: theme.typography.fontFamily,
      fontWeight: props?.bold,
      color: theme.palette?.text?.[props?.color],
    },
  }),
  {
    name: "Typography",
  }
);

export default defineComponent({
  name: "Typography",
  props: {
    color: {
      type: String as PropType<TypographyColor>,
      default: "primary",
    },
    variant: {
      type: String as PropType<TypographyVariant>,
      default: "h3",
    },
    bold: Number,
    display: String,
  },
  setup(props, { slots, attrs }) {
    const classes = useStyles(props);

    return () => (
      <Typography class={clsx(classes.root, classes[props.variant])} {...attrs}>
        {slots.default && slots.default()}
      </Typography>
    );
  },
});
