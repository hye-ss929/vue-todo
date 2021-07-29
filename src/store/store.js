import Vue from 'vue';
import Vuex from 'vuex';
import todoApp from './modules/todoapp'
// import * as getters from './getters';
// import * as mutations from './mutations';

Vue.use(Vuex)


export const store = new Vuex.Store({
  modules:{
    todoApp,
  },
  /* key : value 동일하므로 축약 가능 */
  // getters,
  // mutations,
})