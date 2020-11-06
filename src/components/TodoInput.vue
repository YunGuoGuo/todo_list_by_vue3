<template>
    <input @change="onChange" placeholder="请输入todo" autofocus="autofocus">
</template>

<script>
import { useStore } from 'vuex'
export default {
    setup(){
        const store = useStore()

        function onChange(e){
            store.commit('addTodoItem', e.target.value)
            e.target.value = ''
        }

        return {
            onChange,
        }
    },
    component:{
    }
}
</script>

<style scoped>
    input{
        width: 90%;
        height: 35px;
        padding: 0 10px;
        margin-bottom: 5px;
        border-radius: 20px;
    }
</style>