import { createStore } from "vuex";

export default createStore({
    state: {
        todoList: [],
        saveTodoListToLocalStorage() {
            console.log(this)
            let localStorageTodoList = JSON.stringify(this.todoList)
            localStorage.setItem('todoList', localStorageTodoList)
        }
    },
    mutations: {
        addTodoItem(state, name) {
            state.todoList.push({
                id: new Date().getTime(),
                name,
                complate: false,
                canShow: true
            })
            state.saveTodoListToLocalStorage()
        },
        deleteItem(state, id) {
            state.todoList = state.todoList.filter((item) => {
                return item.id != id
            })
            state.saveTodoListToLocalStorage()
        },
        revokeItem(state, id) {
            state.todoList.map((item) => {
                if (item.id === id) {
                    item.complate = false
                }
            })
            state.saveTodoListToLocalStorage()
        },
        complateItem(state, id) {
            state.todoList.map((item) => {
                if (item.id === id) {
                    item.complate = true
                }
            })
            state.saveTodoListToLocalStorage()
        },
        showAllItem(state) {
            state.todoList.map((item) => {
                item.canShow = true
            })
            state.saveTodoListToLocalStorage()
        },
        showActiveItem(state) {
            state.todoList.map((item) => {
                if (item.complate) {
                    item.canShow = false
                } else {
                    item.canShow = true
                }
            })
            state.saveTodoListToLocalStorage()
        },
        showDoneItem(state) {
            state.todoList.map((item) => {
                if (item.complate) {
                    item.canShow = true
                } else {
                    item.canShow = false
                }
            })
            state.saveTodoListToLocalStorage()
        },
        clearAllItem(state) {
            state.todoList = []
            state.saveTodoListToLocalStorage()
        },
    },
    actions: {},
    modules: {}
});