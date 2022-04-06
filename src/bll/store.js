import {createStore, combineReducers, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk'
import {moviesReducer} from "./moviesReducer";

export const rootReducer = combineReducers({
    movies: moviesReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));