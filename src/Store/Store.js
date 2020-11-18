import {
    compose,
    applyMiddleware,
    createStore, 
    combineReducers } from 'redux'
import thunk from 'redux-thunk'
import MovieReducer from './Reducers/Movie'


const reducers = combineReducers({
    movie: MovieReducer
})

export default createStore(
    reducers, 
    compose(applyMiddleware(thunk))
)