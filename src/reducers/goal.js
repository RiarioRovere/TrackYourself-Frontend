import * as types from "../constants/types";

const initState = {
    goals: [],
    goal: {},
    reports: [],
};

const goal = (state = initState, action) => {
    switch (action.type) {
        case types.GOALS_FETCHED:
            return {
                ...state,
                goals: action.value
            }
        case types.GOAL_FETCHED:
            return {
                ...state,
                goal: action.value
            }
        case types.REPORTS_FETCHED:
            return {
                ...state,
                reports: action.value
            }
        default:
            return state;
    }
}

export default goal;