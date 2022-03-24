<template>
  <div id="app">
    <custom-header />
    <div class="todos">
      <template v-if="isTodos">
        <new-to-do @clicked="setModalVisible" />
        <card-to-do v-for="todo in todos" :key="todo.id" :todo="todo" />
      </template>
      <template v-else>
        <card-skeleton v-for="i in 7" :key="i" />
      </template>
    </div>
    <form-modal />
  </div>
</template>

<script>
  import CustomHeader from './components/Header.vue'
  import NewToDo from './components/NewToDo.vue'
  import CardSkeleton from './components/CardSkeleton.vue'
  import CardToDo from './components/CardToDo.vue'
  import FormModal from './components/FormModal.vue'
  import todos from './data/todos'
  import {
    mapMutations
  } from 'vuex'

  export default {
    name: 'App',
    components: {
      CustomHeader,
      CardSkeleton,
      CardToDo,
      NewToDo,
      FormModal
    },
    data() {
      return {
        isTodos: false,
        todos,
      }
    },
    methods: {
      ...mapMutations(['setModalVisible'])
    },
    mounted() {
      setTimeout(() => {
        this.isTodos = true
      }, 2000)
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

  @media screen and (max-width: 1080px) {
    #app {
      padding: 0 2em;

      .todos {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }

  @media screen and (max-width: 768px) {
    #app {
      .todos {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }

  @media screen and (max-width: 600px) {
    #app {
      .todos {
        grid-template-columns: 1fr;
      }
    }
  }
</style>