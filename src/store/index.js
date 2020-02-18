import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    episodes: null,
    locations: null,
    myCharacters: [],
    id: null,
    imageSource: null,
    myInfo: null
  },

  mutations: {
    setCharacters (state, value) {
      state.myCharacters = value
    }
  }
})
