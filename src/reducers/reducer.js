import * as types from '../constants/types'

const initState = {
    signals: [],
    goals: [],
    goal: {},
    reports: [],
    signalNames: [],
    isLoggedIn: false,
    insight: "",
    summary: ''
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case types.LOGIN_STATE_FETCHED:
            return {
                ...state,
                isLoggedIn: action.value
            }
        case types.SIGNALS_FETCHED:
            return {
                ...state,
                signals: action.value
            }
        case types.SIGNAL_NAMES_FETCHED:
            return {
                ...state,
                signalNames: action.value
            }
        case types.INSIGHT_FETCHED:
            return {
                ...state,
                insight: action.value
            }
        case types.SUMMARY_FETCHED:
            return {
                ...state,
                summary: action.value
            }
        case 'GOALS_FETCHED':
            return {
                ...state,
                goals: action.value
            }
        case 'GOAL_FETCHED':
            return {
                ...state,
                goal: action.value
            }
        case 'REPORTS_FETCHED':
            console.log(action.value);
            return {
                ...state,
                reports: action.value
            }
        default:
            return state;
    }
}

export default reducer;