<template>
  <Images :list="list" />
</template>

<script setup>
import LogoImage from "@/images/logo.png";
import InvoiceImage from "@/images/invoice.png";
import PlaceholderImage from "@/images/placeholder.png";
import { reactive } from "vue";
import Images from "./components/Images.vue";

const list = reactive([
  {
    image: LogoImage,
    id: 1,
  },
  {
    image: InvoiceImage,
    id: 2,
  },
  {
    image: PlaceholderImage,
    id: 3,
  },
]);
</script>

<style lang="scss" scoped></style>
