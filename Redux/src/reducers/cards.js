export default function cardsReducer(state=[],action){
    if(action.type === "SET_NEW_CARD"){
        return [...state, action.payload]
    } else {
        return state
    }
}