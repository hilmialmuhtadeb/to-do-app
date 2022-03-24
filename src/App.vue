<template>
  <div id="app">
    <custom-header />
    <div class="todos">
      <template v-if="isTodos">
        <new-to-do />
        <card-to-do
          v-for="todo in todos"
          :key="todo.id"
          :todo="todo"
        />
      </template>
      <template v-else>
        <card-skeleton v-for="i in 7" :key="i"/>
      </template>
    </div>
  </div>
</template>

<script>
import CustomHeader from './components/Header.vue'
import NewToDo from './components/NewToDo.vue'
import CardSkeleton from './components/CardSkeleton.vue'
import CardToDo from './components/CardToDo.vue'
import todos from './data/todos'

export default {
  name: 'App',
  components: {
    CustomHeader,
    CardSkeleton,
    CardToDo,
    NewToDo
  },
  data() {
    return {
      isTodos: true,
      todos
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/_shared.scss";
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Rubik', sans-serif;
  color: $black;
  padding: 0 4em;

  .todos {
    padding: 2em 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2em;
  }
}
</style>
