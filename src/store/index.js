import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    conut:sessionStorage.getItem('aa')
  },
  mutations: {
    show(state,val){
      sessionStorage.setItem("aa",val)
      state.conut = val
    }
  },
  actions: {
  },
  modules: {
  }
})
