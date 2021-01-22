import Vue from 'vue'
import Vuex from 'vuex'
import portfolio from '@/store/module/portfolio'
import stocks from '@/store/module/stocks'
import loadData from '@/store/module/loadData'
import auth from '@/store/module/auth'
import { START_LOADING, STOP_LOADING } from '@/store/type'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false
  },
  mutations: {
    [START_LOADING](state) {
      state.isLoading = true
    },
    [STOP_LOADING](state) {
      state.isLoading = false
    }
  },
  getters: {
    isLoading(state) {
      return state.isLoading
    }
  },
  modules: {
    portfolio,
    stocks,
    auth,
    loadData
  }
})
