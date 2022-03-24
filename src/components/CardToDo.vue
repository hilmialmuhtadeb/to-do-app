<template>
  <div class="card">
    <div class="card__header">
      <div class="indicator" :class="{complete: todo.isCompleted}" />
      <div class="hamburger" @click="dropdownVisible = !dropdownVisible">
        <span></span>
        <span></span>
        <span></span>
        <ul :class="{active: dropdownVisible}">
          <li @click="setModalVisible">Edit</li>
          <li>Selesai</li>
          <li>Hapus</li>
        </ul>
      </div>
    </div>
    <div class="card__body">
      <p class="due">{{ todo.due }}</p>
      <p class="content">{{ todo.content }}</p>
    </div>
    <div class="card__footer">
      <p v-if="todo.isCompleted" class="status completed">Complete</p>
      <p v-else class="status">Incomplete</p>
      <div class="create">
        {{ todo.create }}
      </div>
    </div>
  </div>
</template>

<script>
  import {
    mapMutations
  } from 'vuex'
  export default {
    props: {
      todo: Object,
    },
    data() {
      return {
        dropdownVisible: false
      }
    },
    methods: {
      ...mapMutations(['setModalVisible'])
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/_shared.scss";

  .card {
    padding: 2em 1em 3em;
    box-shadow: $box-shadow;
    border-radius: $border-radius;
    position: relative;

    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;

      .indicator {
        width: 24px;
        height: 24px;
        background-color: $red;
        border-radius: 50%;
        box-shadow: $box-shadow;
      }

      .indicator.complete {
        background-color: $green;
      }

      .hamburger {
        height: 18px;
        width: 24px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        cursor: pointer;

        ul {
          display: none;
          position: absolute;
          top: 2em;
          right: 0;
          list-style: none;
          box-shadow: $box-shadow;

          li {
            background-color: white;
            color: $secondary;
            border: 1px solid $secondary;
            padding: 0.4em 1.8em 0.4em 0.4em;
          }
        }

        ul.active {
          display: block;
        }

        span {
          display: block;
          height: 3px;
          width: 100%;
          background-color: $secondary;
        }
      }
    }

    &__body {
      padding: 1em 0;

      p.due {
        background-color: $orange;
        display: inline-block;
        border-radius: $border-radius;
        color: white;
        padding: 0.4em .8em;
        margin-bottom: 2.4em;
        box-shadow: $box-shadow;
      }

      p.content {
        line-height: 1.6em;
        font-weight: 600;
      }
    }

    &__footer {
      display: flex;
      justify-content: space-between;
      font-size: .8em;
      position: absolute;
      bottom: 2em;
      width: 90%;

      .status {
        font-weight: 600;
        color: $red;
      }

      .status.completed {
        color: $green;
      }
    }
  }
</style>