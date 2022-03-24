<template>
  <div class="card-wrapper">
    <div class="card-wrapper__header">
      <div class="indicator" />
      <div class="hamburger" />
    </div>
    <div class="card-wrapper__body">
      <div class="due" />
      <div class="content" />
    </div>
    <div class="card-wrapper__footer">
      <div class="status" />
    </div>
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
    padding: 1em;
    border-radius: $border-radius;
    animation: card-wrapper-skeleton-loading 1s linear infinite alternate;

    &__header {
      display: flex;
      justify-content: space-between;

      .indicator {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        animation: card-content-skeleton-loading 1s linear infinite alternate;
      }

      .hamburger {
        width: 30px;
        height: 30px;
        border-radius: $border-radius;
        animation: card-content-skeleton-loading 1s linear infinite alternate;
      }
    }

    &__body {
      .due {
        width: 60%;
        height: 30px;
        margin: 1em 0;
        animation: card-content-skeleton-loading 1s linear infinite alternate;
        border-radius: $border-radius;
      }

      .content {
        margin: 2em 0;
        height: 70px;
        animation: card-content-skeleton-loading 1s linear infinite alternate;
        border-radius: $border-radius;
      }
    }

    &__footer {
      .status {
        width: 60%;
        height: 30px;
        margin-left: auto;
        animation: card-content-skeleton-loading 1s linear infinite alternate;
        border-radius: $border-radius;
      }
    }

  }

  @keyframes card-wrapper-skeleton-loading {
    0% {
      background-color: hsl(200, 20%, 70%);
    }

    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }

  @keyframes card-content-skeleton-loading {
    0% {
      background-color: hsl(200, 20%, 95%);
    }

    100% {
      background-color: hsl(200, 20%, 70%);
    }
  }
</style>