import * as types from "../constants/types";

const initState = {
    goals: [],
    goal: {},
    reports: [],
    addedGoal: '',
    deletedGoal: ''
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
        case types.GOAL_ADDED:
            return {
                ...state,
                addedGoal: action.value
            }
        case types.GOAL_DELETE_SUCCESS:
            return {
                ...state,
                deletedGoal: action.value
            }
        default:
            return state;
    }
}

export default goal;