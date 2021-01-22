import { AUTH_USER, SET_NEW_USER, START_LOADING, STOP_LOADING } from '@/store/type'
import { authApi } from '@/core/api/authApi'

// const state = {
//   token: null,
//   isAuthenticated: false
// }
//
// const mutations = {
//   [AUTH_SUCCESS](state, token) {
//     state.token = token
//   },
//   [LOGOUT](state) {
//     state.token = null
//   }
// }

const actions = {
  [SET_NEW_USER]: async({ commit }, signUpData) => {
    try {
      commit(START_LOADING)
      const res = await authApi.signUpUser(signUpData)
      console.log('res', res)
    } catch (e) {
      console.log(e)
    } finally {
      commit(STOP_LOADING)
    }
  },
  [AUTH_USER]: async({ commit }, signInData) => {
    try {
      commit(START_LOADING)
      const data = await authApi.signIn(signInData)
      console.log('data', data)
    } catch (e) {
      console.log(e)
    } finally {
      commit(STOP_LOADING)
    }
  }
}
export default { actions }
