<template>
  <div class="listContainer">
    <ul>
      <li v-for="(todoItem,idx) in todoItems" v-bind:key="todoItem.item" class="shadow">
        <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted:todoItem.completed}" v-on:click="toggleCompleted(todoItem)"></i>
        <span v-bind:class="{textCompleted:todoItem.completed}">{{ todoItem.item }}</span>
        <span class="removeBtn" v-on:click="removeTodo(todoItem,idx)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  data:function (){
    return{
      todoItems:[]
    }
  },
  methods:{
    removeTodo:function (todoItem,idx) {
      localStorage.removeItem(todoItem)
      this.todoItems.splice(idx,1)
    },
    toggleCompleted:function (todoItem) {
      todoItem.completed = !todoItem.completed
      localStorage.removeItem(todoItem.item)
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
    }
  },
  created:function () {
    if(localStorage.length > 0) {
      for(let i=0; i < localStorage.length; i++){
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
          // console.log(JSON.parse(localStorage.getItem(localStorage.key(i))))
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
        }
      }
    }
  }
}
</script>

<style scoped>
.listContainer{
  display: flex;
  justify-content: center;
}
  ul{
    list-style: none;
    padding-left: 0;
    margin-top: 0;
    text-align: left;

  }
  li{
    width: 300px;
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    border-radius: 5px;
    background-color: #fff;
  }
  .removeBtn{
    margin-left: auto;
    color:red;
  }
  .checkBtn{
    margin-right: 5px;
    padding-top:15px;
    /*border:1px solid red;*/
    color:#2f3b52;
  }
  .checkBtnCompleted{
    color:#62acde;
  }
  .textCompleted{
    text-decoration: line-through;
    color:gray;
  }
</style>