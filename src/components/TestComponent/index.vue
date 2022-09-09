<template>
  <div>
    <button @click="handleClick('a')">切换A</button>
    <button @click="handleClick('b')">切换B</button>
  </div>
  <div>
    <component :is="components[active]" />
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import TestOne from "./components/TestOne.vue";
import TestTwo from "./components/TestTwo.vue";

const components = reactive({
  a: TestOne,
  b: TestTwo,
});
const active = ref<string>("a");

const handleClick = (type: string) => {
  active.value = type;
};
</script>
