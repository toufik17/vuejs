import Vue from "vue"
import Vuex from "vuex"
import traysModule from "./modules/traysModule"
import getters from "./getters"
import actions from "./actions"
import mutations from "./mutations"

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        // state root
    },
    getters: getters,
    mutations: mutations,
    actions: actions,
    modules: {
        traysModule: traysModule
    }
});

export default store;