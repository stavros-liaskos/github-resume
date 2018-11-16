import Vuex from 'vuex'

const storeResume = () => {
  return new Vuex.Store({
    state: {
      resume: {},
      isNotFound: false
    },
    mutations: {
      saveResume(state, resume) {
        state.resume = resume
      },
      saveIsNotFound(state, isNotFound) {
        state.isNotFound = isNotFound
      }
    }
  })
}

export default storeResume
