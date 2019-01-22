import * as types from '../../actions.types'

export default {
    [types.AUTH_SUCCESS]: (state, data) => {
        state.isAuth = data.isAuth
        state.isAdmin = data.isAdmin
    },
    [types.AUTH_LOGOUT]: (state) => {
        state.isAuth = false
        state.isAdmin = false
    }
}
