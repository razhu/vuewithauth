import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    main: true,
    auth: false,
    menu: {},
    user: {},
    sidenav: false
  },
  getters: {

  },
  mutations: {
    setMain (state, value) {
      state.main = value;
    },
    setDefault (state) {
      state.auth = false;
      state.menu = {};
      state.user = {};
    },
  },
  actions: {

  }
})
export default store; 
