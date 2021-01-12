import {BUY_STOCK, SELL_STOCK, SET_PORTFOLIO} from "@/store/type";

const state = {
    funds: 10000,
    myStocks: [],
}
const mutations = {
    [SET_PORTFOLIO](state, newData) {
        state.myStocks = newData.myStocks ? newData.myStocks: []
        state.funds = newData.funds
    },
    [BUY_STOCK](state, order) {
        const newStock = {
            id: order.id,
            name: order.name,
            quantity: order.quantity
        }
        const currentStock = state.myStocks.find(item => item.id === order.id)
        if (!currentStock) {
            state.myStocks.push(newStock)
        } else {
            currentStock.quantity += order.quantity
        }
        state.funds -= order.quantity * order.price
    },
    [SELL_STOCK](state, order) {
        const currentStock = state.myStocks.find(item => item.id === order.id)
        if (currentStock.quantity !== order.quantity) {
            currentStock.quantity -= order.quantity
        } else {
            state.myStocks.splice(state.myStocks.indexOf(currentStock), 1)
        }
        state.funds += order.quantity * order.price
    }
}

const actions = {
    [BUY_STOCK]({commit}, order) {
        commit(BUY_STOCK, order)
    },
    [SELL_STOCK]({commit}, order) {
        commit(SELL_STOCK, order)
    }
}

const getters = {
    funds(state) {
        return state.funds
    },
    myStocks(state, getters) {
        return state.myStocks.map(stock => {
            const or = getters.stocks.find(item => item.id === stock.id)
            return {...stock, ...or}
        })
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}