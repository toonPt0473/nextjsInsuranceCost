import { combineReducers , createStore , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import database from './database.js';
import information from './information';
import loading from './loading';

export const reducers = combineReducers({
    information ,
    loading,
    database
})


export const initialState = {
    information : {},
    loading: false,
    database: []
}



export const makeStore = () => {
    return createStore(reducers, applyMiddleware(thunk))
};
