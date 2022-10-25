import { defineComponent, toRefs } from "vue";
import clsx from "clsx";
import { Button } from "@arco-design/web-vue";
import makeStyles from "vue3-makestyles";
import type { PropType } from "vue";
import type { Size, Status } from "@arco-design/web-vue";
import type {
  ButtonsClasses,
  ButtonsType,
  ButtonsVariant,
} from "@/components/Buttons/types";
import type { TypographyColor } from "@/components/Typography/types";
import Typography from "@/components/Typography/Typography";
import { useRouter } from "vue-router";

const useStyles = makeStyles(
  (theme, props) => ({
    root: {
      "&.arco-btn": {
        padding: theme.spacing(0.75, 3),
        boxSizing: "border-box",
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
        padding: 0,
        height: "auto",
        width: "auto",
        color: theme.palette?.primary?.main,
        lineHeight: 1,
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
    bold: {
      "& .arco-typography": {
        fontWeight: props?.bold ? `${props.bold}` : "inherit",
      },
    },
    textBottomBorder: {
      "&.arco-btn-text": {
        borderBottom: `2px solid currentColor`,
      },
    },
    fullWidth: {
      display: "block",
      width: "100%",
    },
  }),
  {
    name: "Buttons",
  }
);

export default defineComponent({
  props: {
    type: {
      type: String as PropType<ButtonsType>,
      default: "primary",
    },
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
    color: {
      type: String as PropType<TypographyColor>,
      default: "white",
    },
    to: {
      type: String,
      default: "",
    },
    border: Boolean,
  },
  emits: {
    click: (event: Event) => true,
  },
  setup(props, { attrs, slots, emit }) {
    const {
      type,
      fullWidth,
      class: className,
      bold,
      color,
      variant,
      to,
      border,
    } = toRefs(props);
    const classes = useStyles(props);
    const history = useRouter();

    const handleClick = (event: Event) => {
      return to.value ? history.push(to.value) : emit("click", event);
    };

    return () => (
      <Button
        type={type.value}
        class={clsx(
          classes.root,
          {
            [classes.fullWidth]: fullWidth.value,
            [classes.bold]: bold.value,
            [classes.textBottomBorder]: type.value === "text" && border.value,
          },
          className.value
        )}
        onClick={handleClick}
        {...attrs}
      >
        <Typography color={color.value} variant={variant.value}>
          {slots.default && slots.default()}
        </Typography>
      </Button>
    );
  },
});
