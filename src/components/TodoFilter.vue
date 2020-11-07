<template>
    <div v-if="todoListLength">
        <el-button class="btn" type="primary" size="small" @click="showAll" round>all</el-button>
        <el-button class="btn" type="primary" size="small" @click="showActive" round>active</el-button>
        <el-button class="btn" type="primary" size="small" @click="showDone" round>done</el-button>
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
            function showDone(){
                store.commit("showDoneItem")
            }


            return {
                todoListLength,
                showActive,
                showAll,
                showDone,
                clearAll
            }
        }
    }
</script>

<style scoped>
    div{
        width: 90%;
        padding: 0px 10px 0 10px;
        margin: 5px auto;
        display: flex;
        justify-content: center;
    }
    .btn{
        width: 20%;
    }
</style>