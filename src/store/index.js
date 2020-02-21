import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    episodes: null,
    locations: null,
    myCharacters: [],
    chosenEp: null,
    chosenLoc: null,
    id: null,
    imageSource: null,
    myInfo: null
  },

  mutations: {
    setCharacters (state, value) {
      state.myCharacters = value
    },
    setEpisode (state, value) {
      state.chosenEp = value
    },
    setLocation (state, value) {
      state.chosenLoc = value
    }
  }
})
