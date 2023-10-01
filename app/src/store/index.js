import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logged_in_user:{}
  },
  mutations: {
    setLoggedInUserInformation(state, user) {
      state.logged_in_user = user;
    }
  }
})