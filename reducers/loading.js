export default (state , action) => {
    switch(action.type){
        case "LOADING":
            return true;
        case "LOAD_SUCCESS":
            return false
        default :
            return state || false
    }
}