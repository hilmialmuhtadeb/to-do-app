<template>
  <div class="new-todos" @click="$emit('clicked')">
    <span class="icon">
      <font-awesome-icon icon="fa-solid fa-circle-plus" />
    </span>
    <p>Tambah Tugas Baru</p>
  </div>
</template>

<script>
  import {
    library
  } from '@fortawesome/fontawesome-svg-core'
  import {
    faCirclePlus
  } from '@fortawesome/free-solid-svg-icons'
  import {
    FontAwesomeIcon
  } from '@fortawesome/vue-fontawesome'

  library.add(faCirclePlus)

  export default {
    components: {
      FontAwesomeIcon,
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/_shared.scss";

  .new-todos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color: $secondary;
    border-radius: $border-radius;
    border: 4px dashed $secondary;
    box-shadow: $box-shadow;
    cursor: pointer;
    transition: .2s;
    padding: 4em 0;

    .icon {
      display: inline-block;
      font-size: 2em;
      margin-bottom: 1em;
    }
  }

  .new-todos:hover {
    background-color: #eaeaea;
  }
</style>