<template>
  <div>
    <TodoHeader />
    <TodoInput v-on:addTodoItem="addOneItem"/>
    <TodoList v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"/>
    <TodoDelete v-on:removeAllItems="removeAll"/>
  </div>

</template>

<script>
  import TodoHeader from "@/components/TodoHeader";
  import TodoInput from "@/components/TodoInput";
  import TodoList from "@/components/TodoList";
  import TodoDelete from "@/components/TodoDelete";

  export default {
  name: 'App',
  data() {
    return {
      todoItems:[]
    }
  },
  methods:{
    addOneItem(todoItem) {
      const obj = {completed:false, item:todoItem}
      localStorage.setItem(todoItem,JSON.stringify(obj))
      this.todoItems.push(obj)
    },
    removeOneItem(todoItem,idx) {
      this.todoItems.splice(idx,1)
      localStorage.removeItem(todoItem.item)
    },
    toggleOneItem(todoItem) {
      todoItem.completed = !todoItem.completed
      localStorage.removeItem(todoItem.item)
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
    },
    removeAll() {
      this.todoItems = [];
      localStorage.clear()
    }
  },

  components:{
    TodoHeader,
    TodoInput,
    TodoList,
    TodoDelete,
  },
}
</script>

<style>
  body{
    text-align: center;
    box-sizing: border-box;
    background-color: #F7F3EF;
  }
  input{
    width: 270px;
  }
  .shadow{
    box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
  }
</style>
