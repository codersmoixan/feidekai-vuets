import { defineComponent, reactive, ref } from "vue";
import TestOne from "./components/TestOne.vue";
import TestTwo from "./components/TestTwo.vue";
import type { RendererNode } from "vue";

type TestActive = "a" | "b";

interface Components {
  a: RendererNode;
  b: RendererNode;
}

export default defineComponent({
  name: "TestComponent",
  setup() {
    const components = reactive<Components>({
      a: <TestOne />,
      b: <TestTwo />,
    });
    const active = ref<TestActive>("a");

    const handleClick = (type: TestActive) => {
      active.value = type;
    };

    return () => (
      <>
        <div>
          <button onClick={() => handleClick("a")}>切换A</button>
          <button onClick={() => handleClick("b")}>切换B</button>
        </div>
        <div>{components[active.value]}</div>
      </>
    );
  },
});
