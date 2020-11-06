// vuex store文件
// 暗号：天天向上


import { createStore } from "vuex";

export default createStore({
    state: {
        todoList: []
    },
    mutations: {
        addTodoItem(state, name) {
            state.todoList.push({
                id: new Date().getTime(),
                name,
                complate: false,
                canShow: true
            })
        },
        deleteItem(state, id) {
            state.todoList = state.todoList.filter((item) => {
                return item.id != id
            })
        },
        revokeItem(state, id) {
            state.todoList.map((item) => {
                if (item.id === id) {
                    item.complate = false
                }
            })
        },
        complateItem(state, id) {
            state.todoList.map((item) => {
                if (item.id === id) {
                    item.complate = true
                }
            })
            console.log(state.todoList)
        },
        showAllItem(state) {
            state.todoList.map((item) => {
                item.canShow = true
            })
        },
        showActiveItem(state) {
            state.todoList.map((item) => {
                if (item.complate) {
                    item.canShow = false
                } else {
                    item.canShow = true
                }
            })
        },
        clearAllItem(state) {
            state.todoList = []
        }
    },
    actions: {},
    modules: {}
});