import { BUY_STOCK, SELL_STOCK, SET_FUNDS, SET_MY_STOCKS } from '@/store/type'

const state = {
  funds: 10000,
  myStocks: []
}
const mutations = {
  [SET_MY_STOCKS](state, newMyStocks) {
    state.myStocks = newMyStocks
  },
  [SET_FUNDS](state, payload) {
    state.funds = payload
  }
}

const actions = {
  [SET_FUNDS]({ commit }, payload) {
    commit(SET_FUNDS, payload)
  },
  [BUY_STOCK]({ commit, state }, order) {
    // UPDATE MY STOCKS
    const newMyStocks = JSON.parse(JSON.stringify(state.myStocks))
    const newStock = {
      id: order.id,
      name: order.name,
      quantity: order.quantity
    }
    const currentStock = newMyStocks.find(item => item.id === order.id)
    if (!currentStock) {
      newMyStocks.push(newStock)
    } else {
      currentStock.quantity += order.quantity
    }
    // UPDATE FUNDS
    const newFunds = state.funds - (order.quantity * order.price)

    commit(SET_MY_STOCKS, newMyStocks)
    commit(SET_FUNDS, newFunds)
  },
  [SELL_STOCK]({ commit, state }, order) {
    // UPDATE MY STOCKS
    const newMyStocks = JSON.parse(JSON.stringify(state.myStocks))
    const currentStock = newMyStocks.find(item => item.id === order.id)
    if (currentStock.quantity !== order.quantity) {
      currentStock.quantity -= order.quantity
    } else {
      newMyStocks.splice(newMyStocks.indexOf(currentStock), 1)
    }
    // UPDATE FUNDS
    const newFunds = state.funds + (order.quantity * order.price)

    commit(SET_MY_STOCKS, newMyStocks)
    commit(SET_FUNDS, newFunds)
  }
}

const getters = {
  funds(state) {
    return state.funds
  },
  myStocks(state, getters) {
    return state.myStocks.map(stock => {
      const or = getters.stocks.find(item => item.id === stock.id)
      return { ...stock, ...or }
    })
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
