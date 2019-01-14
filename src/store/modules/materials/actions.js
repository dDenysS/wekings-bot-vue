import * as types from '../../actions.types'
import http from '../../../untils/http'

export default {
    [types.GET_TESTS]: ({commit, state}) => {
        return new Promise((resolve, reject) => {
            if (state.tests.loaded) return resolve()
            http('/tests')
                .then(({data}) => {
                    commit(types.SET_TESTS, data)
                    resolve()
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
    [types.GET_COURSES]: ({commit, state}) => {
        return new Promise((resolve, reject) => {
            if (state.courses.loaded) return resolve()
            http('/courses')
                .then(({data}) => {
                    commit(types.SET_COURSES, data)
                    resolve()
                })
                .catch(err => {
                    reject(err)
                })
        })
    }
}
