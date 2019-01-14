import * as types from '../../actions.types'

export default {
    [types.SET_NETWORKS]: (state, data) => {
        state.networks = data
    }
}
