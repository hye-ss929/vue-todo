<template>
  <div>
    <TodoHeader />
    <TodoInput />
    <TodoList />
    <TodoDelete />
  </div>

</template>

<script>
  import TodoHeader from "@/components/TodoHeader";
  import TodoInput from "@/components/TodoInput";
  import TodoList from "@/components/TodoList";
  import TodoDelete from "@/components/TodoDelete";

  export default {
  name: 'App',
  components:{
    TodoHeader,
    TodoInput,
    TodoList,
    TodoDelete,
  }
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
