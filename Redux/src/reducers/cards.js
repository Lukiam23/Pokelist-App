export default function cardsReducer(state=[],action){
    if(action.type === "ADD_CARD"){
        return [...state, action.payload]
    } else {
        return state
    }
}