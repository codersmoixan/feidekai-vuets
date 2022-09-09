import { defineComponent, provide, toRefs } from "vue";
import type { PropType } from "vue";
import type { Theme } from "@/utils/theme/types/index.types";

export default defineComponent({
  name: "ThemeProvider",
  props: {
    theme: {
      type: Object as PropType<Theme>,
    },
  },
  setup(props, { slots }) {
    const { theme } = toRefs(props);
    provide("theme", theme.value);

    return () => slots.default && slots.default(theme.value);
  },
});
