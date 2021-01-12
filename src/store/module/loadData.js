import {dataApi} from "@/api/api";
import {
    LOAD_DATA,
    SAVE_DATA,
    SET_LOADING,
    SET_PORTFOLIO,
    SET_STOCKS
} from "@/store/type";


const actions = {
    [SAVE_DATA]: async ({commit, getters}) => {
        try {
            const data = {
                funds: getters.funds,
                portfolio: getters.myStocks,
                stocks: getters.stocks
            }
            commit(SET_LOADING)
            await dataApi.saveData(data)
        } catch (e) {
            console.log(e)
        } finally {
            commit(SET_LOADING)
        }
    },
    [LOAD_DATA]: async ({commit}) => {
        try {
            commit(SET_LOADING)
            const data = await dataApi.getData()
            commit(SET_PORTFOLIO, {myStocks: data.portfolio, funds: data.funds})
            commit(SET_STOCKS, data.stocks)
        } catch (e) {
            console.log(e)
        } finally {
            commit(SET_LOADING)
        }
    }
}
export default {actions}