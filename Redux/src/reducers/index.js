import { combineReducers } from "redux";
import cards from "./cards";
import detail from "./detail";

export default combineReducers({
    cards,
    detail
});