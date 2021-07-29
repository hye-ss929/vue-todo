<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" v-on:click="clearAll">
      Clear All
    </span>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: "TodoDelete",
  methods:{
    ...mapMutations({
      clearAll:'removeAll'
    })
  }

}
</script>

<style scoped>
.clearAllContainer{
  width: 7.5rem;
  height: 50px;
  line-height:50px;
  background-color: #e20303;
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn{
  color:#fff;
  display: block;
  font-size:1rem;
}
</style>