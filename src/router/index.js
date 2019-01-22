import Vue from 'vue'

import Router from 'vue-router'
import routes from './routes'

// import store from '../store'

Vue.use(Router)

const router = new Router({
    routes,
    mode: 'history'
})

// router.beforeEach((to, from, next) => {
//     const authState = store.state.auth
//     if (authState.isAuth) {
//         if (to.name === 'login' || to.name === 'register') {
//             return next({name: 'home'})
//         } else {
//             return next()
//         }
//     } else {
//         if (to.name === 'login' || to.name === 'register') {
//             return next()
//         } else {
//             return next({name: 'login', query: {redirect: to.path}})
//         }
//     }
// })

export default router
