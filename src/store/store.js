import Vue from 'vue'
import Vuex from 'vuex'
import portfolio from '@/store/module/portfolio'
import stocks from '@/store/module/stocks'
import loader from '@/store/module/loader'
import loadData from '@/store/module/loadData'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    portfolio,
    stocks,
    loader,
    loadData
  }
})
