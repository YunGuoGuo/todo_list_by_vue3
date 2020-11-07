<template>
    <todo></todo>
</template>

<script>
import Todo from '@/components/Todo.vue';
import { useStore } from 'vuex'
export default {
  name: "App",
  components: {
    Todo
  },
  setup(){
    const store = useStore()
    console.log(store)
    let localStorageTodoList = localStorage.getItem('todoList')
    if (localStorageTodoList){
      store.state.todoList = JSON.parse(localStorageTodoList)
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto auto auto;
  width: 80%;
  max-width: 1200px;
  min-width: 600px;
}
</style>
