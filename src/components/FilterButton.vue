<template>
  <button :class="{active: isActive}">
    <slot />
  </button>
</template>

<script>
  export default {
    props: {
      isActive: Boolean
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/_shared.scss";

  button {
    padding: .6em 1.2em;
    border: 0;
    outline: none;
    border-radius: $border-radius;
    box-shadow: $box-shadow;
    background-color: white;
    color: $black;
    cursor: pointer;
  }

  button.active {
    color: white;
    background-color: $blue;
  }
</style>