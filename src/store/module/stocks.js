import { END_DAY, SET_STOCKS } from '@/store/type'
import { rundomizeNumber } from '@/core/rundomizeNumber'

const state = {
  stocks: []
}
const mutations = {
  [SET_STOCKS](state, newData) {
    state.stocks = newData
  },
  [END_DAY](state, newStocks) {
    state.stocks = newStocks
  }
}
const actions = {
  endDay({ commit, state }) {
    const stocks = JSON.parse(JSON.stringify(state.stocks))
    const newStocks = stocks.map(item => {
      return {
        id: item.id,
        name: item.name,
        price: rundomizeNumber(item.price)
      }
    })
    commit(END_DAY, newStocks)
  }
}
const getters = {
  stocks(state) {
    return state.stocks
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
