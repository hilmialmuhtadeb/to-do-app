import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    modalVisible: false
  },
  mutations: {
    setModalVisible (state) {
      state.modalVisible = !state.modalVisible
    }
  },
  actions: {
  },
  getters: {
    modalVisible: (state) => state.modalVisible
  }
})
