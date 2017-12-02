import { combineReducers , createStore } from 'redux';
import information from './information';


export const reducers = combineReducers({
    information 
})


export const initialState = {
    information : {}
}



export const makeStore = () => {
    return createStore(reducers);
};
