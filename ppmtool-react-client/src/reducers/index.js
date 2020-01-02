import { combineReducers } from 'redux'
import errorReducer from './errorReducer'
import projectReducer from './projectReducer'

// display the state of the store
export default combineReducers({
    errors: errorReducer,
    project: projectReducer
})
