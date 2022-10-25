import { defineComponent } from "vue";

export default defineComponent({
  name: "ItemInfo",
  props: {
    isShow: Boolean,
  },
  setup() {
    return () => <div>里斯</div>;
  },
});
