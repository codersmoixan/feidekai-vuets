<template>
  <img v-for="item in list" key="id" alt="" :src="item.image" />
</template>

<script setup>
const props = defineProps({
  list: {
    type: Boolean
  }
})
</script>

<style lang="scss" scoped>

</style>
