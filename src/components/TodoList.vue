<template>
  <div class="listContainer">
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem,idx) in this.storedTodoItems" v-bind:key="todoItem.item" class="shadow">
        <i class="checkBtn fas fa-check"
           v-bind:class="{checkBtnCompleted:todoItem.completed}"
           v-on:click="toggleCompleted({todoItem})"></i>
        <span v-bind:class="{textCompleted:todoItem.completed}" v-bind:key="idx">{{ todoItem.item }}</span>
        <span class="removeBtn" v-on:click="removeTodo({todoItem,idx})">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "TodoList",
  methods:{
    ...mapMutations({
      removeTodo:'removeOneItem',
      toggleCompleted:'toggleOneItem'
    }),
  },
  computed:{
    ...mapGetters(['storedTodoItems'])
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
    color:#2f3b52;
  }
  .checkBtnCompleted{
    color:#62acde;
  }
  .textCompleted{
    text-decoration: line-through;
    color:gray;
  }


.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>