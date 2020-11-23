import {combineReducers} from "redux";
import goal from "./goal";
import signal from "./signal";

const rootReducer = combineReducers({
    goal,
    signal
});

export default rootReducer;