<template>
    <div v-show="item.canShow" :style="item.complate? 'background-color: #ddd;' : ''">
        <span :style="item.complate? 'text-decoration:line-through;' : ''">{{item.name}}</span>
        <el-button v-if="!item.complate" class="btn" type="success" size="mini" @click="onComplate" round>完成</el-button>
        <el-button v-if="item.complate" class="btn" type="info" size="mini" @click="onRevoke" round>重做</el-button>
        <el-button class="btn" type="danger" size="mini" @click="onDelete" round>删除</el-button>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { readonly } from 'vue'
    export default {
        props:['itemData'],
        setup(props){
            const store = useStore()
            const item = readonly(props.itemData)


            function onDelete(){
                store.commit("deleteItem", item.id)
            }
            function onRevoke(){
                store.commit("revokeItem", item.id)
            }
            function onComplate(){
                store.commit("complateItem", item.id)
            }


            return {
                item,
                onDelete,
                onRevoke,
                onComplate
            }
        }
    }
</script>

<style scoped>
    div{
        width: 90%;
        height: 40px;
        padding: 0px 10px 0 10px;
        margin: 0px auto 5px auto;
        background-color:blanchedalmond;
        display: flex;
        border-radius: 20px;
    }
    div * {
        align-self: center;
    }
    span{
        float: left;
        flex-grow: 40;
        text-align: left;
    }
    .btn{
        float: right;
        margin-left: 10px;
        flex-grow:1;
    }
</style>