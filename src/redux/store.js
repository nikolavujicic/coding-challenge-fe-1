import { createStore, combineReducers } from 'redux'
import { todoReducer } from './reducer.js'

const reducer = combineReducers({
    todoReducer
})

const store = createStore(
    reducer
)

export default store;