import Vue from 'vue'

import Router from 'vue-router'
import routes from './routes'

// import store from '../store'

Vue.use(Router)

const router = new Router({
    routes,
    mode: 'history'
})

/* router.beforeEach((to, from, next) => {
    const authState = store.state.auth
    if (authState.isAuth) {
        if (to.name === 'login' || to.name === 'register') {
            console.log(1)
            return next({name: 'home'})
        } else {
            console.log(2)
            return next()
        }
    } else {
        if (to.name === 'login' || to.name === 'register') {
            console.log(3)
            return next()
        } else {
            console.log(4)
            return next({name: 'login', query: {redirect: to.path}})
        }
    }
}) */

export default router
