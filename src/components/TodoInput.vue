<template>
  <div class="addContainer">
    <input type="text" v-model="todoText" v-on:keyup.enter="addTodo" >
    <div class="addBox">
      <i class="fas fa-plus" v-on:click="addTodo"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoInput",
  data:function (){
    return {
      todoText:"",
    }
  },
  methods:{
    addTodo:function () {
      if(this.todoText !== ""){
        let obj = {completed:false, item:this.todoText}
        localStorage.setItem(this.todoText,JSON.stringify(obj))
        this.clearInput();
      }
    },
    clearInput:function () {
      this.todoText = '';
    },
  }
}
</script>

<style scoped>
  input{
    height: 35px;
    border-radius: 5px 0 0  5px;
    list-style: none;
    border:1px solid #fff;
    padding-left: 10px;
  }
  .addContainer{
    display: flex;
    justify-content: center;
  }
  .addBox{
    background: linear-gradient(to right, #6478f8, #8763f8);
    display: block;
    width: 3rem;
    border-radius:  0 5px  5px 0;
  }
  i{
    padding: 10px 0;
    color:#fff;
  }
</style>