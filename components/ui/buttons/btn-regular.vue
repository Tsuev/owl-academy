<template>
   <button class="btn btn-reg">
      <slot></slot>
   </button>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.btn-reg {
   @apply bg-rarly-0 px-28px h-48px transition-all duration-500 text-base hover: (bg-base-0 text-base-1);
}
</style>