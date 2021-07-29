const addOneItem = (state,todoItem) =>{
  const obj = {completed:false, item:todoItem}
  localStorage.setItem(todoItem,JSON.stringify(obj))
  state.todoItems.push(obj)
}
const removeOneItem = (state,payload) => {
  localStorage.removeItem(payload.todoItem.item)
  state.todoItems.splice(payload.idx,1)
}
const toggleOneItem = (state,payload) => {
  payload.todoItem.completed = !payload.todoItem.completed
  localStorage.removeItem(payload.todoItem.item)
  localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem))
}
const removeAll = (state) => {
  state.todoItems = [];
  localStorage.clear()
}

export { addOneItem,removeOneItem,toggleOneItem,removeAll }