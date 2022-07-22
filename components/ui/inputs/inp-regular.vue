<template>
   <input type="text" class="form-control inp-regular" :placeholder="placText">
</template>
<script setup>
const props = defineProps({
   placText: {
      type: String,
      default: "",
   },
})
</script >
<style lang="scss" scoped>
.inp-regular {
   @apply border border-solid border-rarly-1 rounded-[5px] bg-base-1 text-lg px-20px h-60px shadow-0 focus: border-base-0;
}
</style>