import { dataApi } from '@/core/api'
import {
  START_LOADING,
  STOP_LOADING
} from '@/store/type'

const actions = {
  saveData: async({ commit, getters, rootState }) => {
    try {
      const data = {
        funds: rootState.portfolio.funds,
        portfolio: rootState.portfolio.myStocks,
        stocks: getters['stocks/stocks']
      }
      commit(START_LOADING)
      await dataApi.saveData(data)
    } catch (e) {
      console.log(e)
    } finally {
      commit(STOP_LOADING)
    }
  },
  loadData: async({ commit }) => {
    try {
      commit(START_LOADING)
      const data = await dataApi.getData()
      commit('portfolio/SET_MY_STOCKS', data.portfolio)
      commit('portfolio/SET_FUNDS', data.funds)
      commit('stocks/SET_STOCKS', data.stocks)
    } catch (e) {
      console.log(e)
    } finally {
      commit(STOP_LOADING)
    }
  }
}
export default { actions }
