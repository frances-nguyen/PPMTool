import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const initialState = {}
const middleware = [thunk]

let store

// configure browser compatibility
if (window.navigator.userAgent.includes('Chrome')) {
  store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    ) // doesn't exist in other browser beside Chrome), // so that we can add more items to the array in the future
  )
} else {
  store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware)) // so that we can add more items to the array in the future
  )
}

export default store
