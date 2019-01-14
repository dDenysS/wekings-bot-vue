export default {
    getCourses: state => state.courses.data,
    getTests: state => state.tests.data,
    getTestById: state => id => {
        return state.tests.data.find(item => {
            return item.id === id
        })
    },
    getCourseById: state => id => {
        return state.courses.data.find(item => {
            return item.id === id
        })
    }
}
