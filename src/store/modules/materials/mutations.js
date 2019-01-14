import * as types from '../../actions.types'

export default {
    [types.SET_COURSES]: (state, data) => {
        state.courses = {
            loaded: true,
            data
        }
    },
    [types.SET_TESTS]: (state, data) => {
        state.tests = {
            loaded: true,
            data
        }
    },
    [types.ADD_TEST]: (state, data) => {
        const tests = Object.assign({}, state.tests)
        tests.data.push(data)
        state.tests = tests
    }
}
