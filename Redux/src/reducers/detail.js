export default function detailReducer(state={},action){
    if(action.type === "SET_DETAIL"){
        return action.payload
    } else {
        return state
    }
}