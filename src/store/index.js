import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'

Vue.use(Vuex)

const store = new Vuex.Store({
    strict: process.env.NODE_ENV === 'development',
    modules: {
        auth
    }
})

export default store
