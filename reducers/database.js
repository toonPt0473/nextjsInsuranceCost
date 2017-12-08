export default (state , action) => {
    switch(action.type){
        case "FETCH_DB":
            return action.payload;
        default :
            return state || []
    }
}