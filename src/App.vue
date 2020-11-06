<template>
    <todo></todo>
</template>

<script>
import Todo from '@/components/Todo.vue';
export default {
  name: "App",
  components: {
    Todo
  },
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
  max-width: 400px;
}
</style>
