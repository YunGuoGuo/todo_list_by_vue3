<template>
    <div v-if="todoListLength">
        <el-button class="btn" type="primary" size="small" @click="showAll" round>all</el-button>
        <el-button class="btn" type="primary" size="small" @click="showActive" round>active</el-button>
        <el-button class="btn" type="primary" size="small" @click="clearAll" round>clear</el-button>
    </div>
</template>

<script>
import { useStore } from "vuex"
import { computed } from "vue"
    export default {
        setup(){
            const store = useStore()
            const todoListLength = computed(()=>{
                return store.state.todoList.length
            })


            function showAll(){
                store.commit("showAllItem")
            }
            function showActive(){
                store.commit("showActiveItem")
            }
            function clearAll(){
                store.commit("clearAllItem")
            }


            return {
                todoListLength,
                showActive,
                showAll,
                clearAll
            }
        }
    }
</script>

<style scoped>
    .btn{
        width: 100px;
    }
</style>