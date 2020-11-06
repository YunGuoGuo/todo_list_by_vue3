<template>
    <div>
        <todo-input></todo-input>
        <template v-for="(item) in todoList" :key="item.id">
            <todo-item :itemData="item"></todo-item>
        </template>
        <todo-filter></todo-filter>
    </div>
</template>

<script>
import TodoInput from '@/components/TodoInput.vue';
import TodoItem from '@/components/TodoItem.vue';
import TodoFilter from '@/components/TodoFilter.vue';
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
  components: {
      TodoInput, 
      TodoItem,
      TodoFilter
  },
  setup(){
      const store = useStore()
      const todoList = computed(()=>{
          return store.state.todoList
      })


      return {
          todoList
      }
  }
}
</script>

<style></style>
