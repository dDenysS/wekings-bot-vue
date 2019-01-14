import * as types from '../../actions.types'
import http from '../../../untils/http'
import router from '../../../router/'

export default {
    [types.GET_QUESTIONS]: ({commit}, width) => {
        return new Promise((resolve, reject) => {
            http('/tests/questions', {params: {width}})
                .then(({data}) => {
                    commit(types.SET_QUESTIONS, data)
                    resolve()
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
    [types.END_TEST]: ({commit}, answers) => {
        return new Promise((resolve, reject) => {
            http.post('/tests/end', {
                answers
            }).then(({data}) => {
                commit(types.SET_RESULT, data)
                router.push({name: 'testResult'})
                resolve()
            }).catch(err => {
                reject(err)
            })
        })
    },
    [types.GET_TEST]: ({commit}, id) => {
        return new Promise((resolve, reject) => {
            http('/tests', {
                params: {
                    id
                }
            }).then(({data}) => {
                commit(types.SET_TEST, data)
                resolve()
            }).catch(err => {
                reject(err)
            })
        })
    }
}
