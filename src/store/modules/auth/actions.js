import * as types from '../../actions.types'
import http from '../../../untils/http'
import router from '../../../router/'

function redirect (state) {
    if (state.isAuth) {
        const uri = window.location.search.substring(1)
        const params = new URLSearchParams(uri)
        router.push(params.get('redirect') || '/')
    }
}

export default {
    [types.AUTH_STATUS]: ({commit}) => {
        return new Promise((resolve, reject) => {
            http('public/auth/status')
                .then(({data}) => {
                    commit(types.AUTH_SUCCESS, data)
                    redirect(data)
                    resolve()
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
    [types.AUTH_SING_IN]: ({commit}, form) => {
        return new Promise((resolve, reject) => {
            http.post('public/auth/login', form)
                .then(({data}) => {
                    commit(types.AUTH_SUCCESS, {...data, isAuth: true})
                    redirect({...data, isAuth: true})
                    resolve()
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
    [types.AUTH_LOGOUT]: ({commit}) => {
        return new Promise((resolve, reject) => {
            http('public/auth/logout')
                .then(() => {
                    commit(types.AUTH_LOGOUT)
                    router.push({name: 'login'})
                    resolve()
                })
                .catch(err => {
                    reject(err)
                })
        })
    }
}
