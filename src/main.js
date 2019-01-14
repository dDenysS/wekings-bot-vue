import Vue from 'vue'
import App from './App'

import router from './router'
import store from './store'

import http from './untils/http'
import bus from './untils/bus'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

Vue.prototype.$http = http
Vue.prototype.$bus = bus

const vm = new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')

window.vm = vm
