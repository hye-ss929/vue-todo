<template>
  <div class="addContainer">
    <input type="text" v-model="todoText" v-on:keyup.enter="addTodo" >
    <div class="addBox">
      <i class="fas fa-plus" v-on:click="addTodo"></i>
    </div>
    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        경고
        <i class="closeModalBtn fas fa-times" v-on:click="showModal=false"></i></h3>
      <h4 slot="body">무언가를 입력하세요</h4>
      <h5 slot="footer">copy right</h5>
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/common/Modal";

export default {
  name: "TodoInput",
  data:function (){
    return {
      todoText:"",
      showModal:false
    }
  },
  methods:{
    addTodo() {
      if(this.todoText !== ""){
        this.$store.commit('addOneItem', this.todoText)
        this.clearInput();
      }else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.todoText = '';
    },
  },
  components:{
    Modal,
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
  .closeModalBtn{
    color:#42b983;
  }
</style>