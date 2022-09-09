<template>
  <slot></slot>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";
import type { Theme } from "@/utils/theme/types/index.types";
import { provide } from "vue";

const props = defineProps({
  theme: {
    type: Object as PropType<Theme>,
  },
});

provide("theme", props.theme);
</script>

<style lang="less" scoped></style>
