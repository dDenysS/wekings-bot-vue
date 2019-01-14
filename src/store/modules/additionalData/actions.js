import * as types from '../../actions.types'
import http from '../../../untils/http'

export default {
    [types.GET_NETWORKS]: ({state, commit}) => {
        return new Promise((resolve, reject) => {
            if (state.networks.length !== 0) return resolve(state.networks)
            http('/location/networks')
                .then(({data}) => {
                    commit(types.SET_NETWORKS, data)
                    resolve()
                })
                .catch(err => {
                    reject(err)
                })
        })
    }
}
