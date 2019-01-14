import * as types from '../../actions.types'

export default {
    [types.START_TESTS]: (state, test) => {
        state.active = true
        state.test = test
    },
    [types.SET_QUESTIONS]: (state, questions) => {
        state.questions = questions
    },
    [types.SET_RESULT]: (state, {result, resultAnswers}) => {
        state.resultAnswers = resultAnswers
        state.active = false
        state.result = result
    },
    [types.SET_TEST]: (state, test) => {
        state.test = test
    }
}
