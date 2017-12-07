import axios from "axios";
import keys from '../config/keys';


console.log(require('../config/prod').serverURL)
export const addForm = (data) => {
    return { type : "ADD_FORM" , payload : data} 
}

export const  sendFormToServer = (data) => {    
    return async dispatch => {
        const url = `${keys.serverURL}/api/sendform`
        const res = await axios.post(url , data)
        dispatch({type: "SEND_DATA" , payload : res.data})
    }
}

export const onLoad = () => {
    return { type :  "LOADING" }
}

export const loadSuccess = () => {
    return { type : "LOAD_SUCCESS"}
} 