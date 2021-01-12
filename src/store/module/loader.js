import {SET_LOADING} from "@/store/type";

const state = {
    isLoading: false
}
const mutations = {
    [SET_LOADING](state){
        state.isLoading = !state.isLoading
    }
}
const actions = {
    setLoading({commit}){
        commit(SET_LOADING)
    }
}
const getters = {
    isLoading(state){
        return state.isLoading
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}