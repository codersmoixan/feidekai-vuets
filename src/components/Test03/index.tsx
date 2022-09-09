import { computed, defineComponent, ref, toRefs } from "vue";
import styles from "./index.module.less";
import clsx from "clsx";

export default defineComponent({
  props: {
    onHandleClick: {
      type: Function,
    },
    customerCount: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const { onHandleClick, customerCount } = toRefs(props);
    const count = ref<number>(0);
    const active = ref<boolean>(false);

    const handleClick = () => {
      count.value++;
      active.value = true;
      onHandleClick.value?.(count);
    };

    const customerComputed = computed(() => customerCount.value + 3);

    return () => (
      <div>
        {customerComputed.value}
        <button onClick={handleClick}>{count.value}</button>
        <div
          class={clsx(styles.container, {
            [styles.active]: active.value,
          })}
        >
          这个是什么啊
        </div>
      </div>
    );
  },
});
