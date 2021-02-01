
const state = {
    selfLocation: true
}
const mutations = {
    SET_LOCATION(state) {
        state.selfLocation = !state.selfLocation;
    }
}
const getters = {}
const actions = {}

export default {
    namespaced: true, //命名空间
    state,
    getters,
    mutations,
    actions
};