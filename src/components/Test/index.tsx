import { defineComponent, ref } from "vue";
import useIncrement from "@/hooks/useIncrement";
import type { SetupContext, Ref } from "vue";
import Hidden from "@/components/Hidden";
import useMediaQuery from "@/hooks/useMediaQuery";
import Test03 from "@/components/Test03";
import TestComponent from "@/components/TestComponent/index";

const Test = defineComponent({
  setup(props, context: SetupContext) {
    const { count, increment } = useIncrement();
    const mdDown = useMediaQuery((theme) =>
      theme.breakpoints.between("md", "lg")
    );
    const customerCount = ref<number>(0);

    console.log(mdDown.value, "这个是什么");

    const onHandleClick = (num: Ref) => {
      console.log(num.value, "就是这个呢");
      customerCount.value = num.value;
    };

    return () => (
      <div>
        {mdDown.value ? "这是测试的tsx5566" : null}
        <div onClick={increment}>{count.value}</div>
        {count.value ? <div>这个就是出来了的</div> : null}
        <Hidden mdUp>
          <div
            style={{ width: "200px", height: "200px", backgroundColor: "red" }}
          >
            <Test03
              onHandleClick={onHandleClick}
              customerCount={customerCount.value}
            />
          </div>
        </Hidden>
        <TestComponent />
        {context.slots.default?.()}
      </div>
    );
  },
});

export default Test;
