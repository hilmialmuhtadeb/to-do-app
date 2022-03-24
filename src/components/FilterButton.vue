<template>
  <button>
    <slot />
  </button>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  @import "@/assets/_shared.scss";

  button {
    padding: .6em 1.2em;
    background-color: $blue;
    color: white;
    border: 0;
    outline: none;
    border-radius: $border-radius;
    box-shadow: $box-shadow;
  }
</style>