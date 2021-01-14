import { END_DAY, SET_STOCKS } from '@/store/type'
import { rundomizeNumber } from '@/core/rundomizeNumber'

const state = {
  stocks: [
    { id: 1, name: 'Bmw', price: 100 },
    { id: 2, name: 'Google', price: 800 },
    { id: 3, name: 'Apple', price: 140 },
    { id: 4, name: 'Twitter', price: 40 }
  ]
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
  [END_DAY]({ commit, state }) {
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
