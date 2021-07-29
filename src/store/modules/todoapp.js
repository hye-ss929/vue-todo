const storage = {
  fetch(){
    const arr = []
    if(localStorage.length > 0) {
      for(let i=0; i < localStorage.length; i++){
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
        }
      }
    }
    return arr;
  }
}

const state = {
  todoItems:storage.fetch()
};

const getters = {
  storedTodoItems(state) {
    return state.todoItems
  }
}

const mutations = {
  addOneItem(state,todoItem){
    const obj = {completed:false, item:todoItem}
    localStorage.setItem(todoItem,JSON.stringify(obj))
    state.todoItems.push(obj)
  },
  removeOneItem (state,payload){
    localStorage.removeItem(payload.todoItem.item)
    state.todoItems.splice(payload.idx,1)
  },
  toggleOneItem (state,payload){
    payload.todoItem.completed = !payload.todoItem.completed
    localStorage.removeItem(payload.todoItem.item)
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem))
  },
  removeAll(state){
    state.todoItems = [];
    localStorage.clear()
  },
}

export default {
  state,
  getters,
  mutations
}