export default (state , action) => {
    switch(action.type){
        case "ADD_FORM":
            return action.payload;
        default :
            return state || {}
    }
}