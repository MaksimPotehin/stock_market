import { START_LOADING, STOP_LOADING } from '@/store/type'

const state = {
  isLoading: false
}
const mutations = {
  [START_LOADING](state) {
    state.isLoading = true
  },
  [STOP_LOADING](state) {
    state.isLoading = false
  }
}
const getters = {
  isLoading(state) {
    return state.isLoading
  }
}

export default {
  state,
  mutations,
  getters
}
