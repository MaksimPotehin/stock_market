import { dataApi } from '@/core/api'
import {
  SET_FUNDS, SET_MY_STOCKS,
  SET_STOCKS,
  START_LOADING,
  STOP_LOADING
} from '@/store/type'

const actions = {
  saveData: async({ commit, getters }) => {
    try {
      const data = {
        funds: getters.funds,
        portfolio: getters.myStocks,
        stocks: getters.stocks
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
      commit(SET_MY_STOCKS, data.portfolio)
      commit(SET_FUNDS, data.funds)
      commit(SET_STOCKS, data.stocks)
    } catch (e) {
      console.log(e)
    } finally {
      commit(STOP_LOADING)
    }
  }
}
export default { actions }
