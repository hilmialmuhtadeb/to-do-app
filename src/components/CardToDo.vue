<template>
  <div class="card">
    <div class="card__header">
      <div
        class="indicator"
        :class="{complete: todo.isCompleted}"
      />
      <div class="hamburger">
        <span></span>
        <span></span>
        <span></span>
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
export default {
  props: {
    todo: Object
  },
  methods: {
    statusBuilder(isCompleted) {
      return isCompleted ? 'Complete' : 'Incomplete'
    }
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

      .indicator {
        width: 24px;
        height: 24px;
        background-color: $red;
        border-radius: 50%;
      }

      .indicator.complete {
        background-color: $green;
      }

      .hamburger {
        height: 32px;
        width: 32px;
        padding: 8px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
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