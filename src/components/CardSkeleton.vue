<template>
  <div class="card-wrapper">

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @import "@/assets/_shared.scss";

  .card-wrapper {
    height: 300px;
    border-radius: $border-radius;
    animation: card-wrapper-skeleton-loading 1s linear infinite alternate;
  }

  @keyframes card-wrapper-skeleton-loading {
    0% {
      background-color: hsl(200, 20%, 80%);
    }

    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }
</style>