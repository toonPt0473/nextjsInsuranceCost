import { combineReducers , createStore , applyMiddleware } from 'redux';
import information from './information';
import thunk from 'redux-thunk';
import loading from './loading'

export const reducers = combineReducers({
    information ,
    loading
})


export const initialState = {
    information : {},
    loading: false
}



export const makeStore = () => {
    return createStore(reducers, applyMiddleware(thunk))
};
