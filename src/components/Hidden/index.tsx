import { defineComponent } from "vue";
import useVisible from "./hooks/useVisible";

export default defineComponent({
  props: {
    xlUp: {
      type: Boolean,
    },
    xlDown: {
      type: Boolean,
    },
    lgUp: {
      type: Boolean,
    },
    lgDown: {
      type: Boolean,
    },
    mdUp: {
      type: Boolean,
    },
    mdDown: {
      type: Boolean,
    },
    smUp: {
      type: Boolean,
    },
    smDown: {
      type: Boolean,
    },
    xsUp: {
      type: Boolean,
    },
    xsDown: {
      type: Boolean,
    },
  },
  setup(props, { slots }) {
    const visible = useVisible(props);

    return () => !visible.value && slots.default && slots.default();
  },
});
