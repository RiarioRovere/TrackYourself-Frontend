import {combineReducers} from "redux";
import goal from "./goal";
import signal from "./signal";
import general from "./general";

const rootReducer = combineReducers({
    general,
    goal,
    signal
});

export default rootReducer;