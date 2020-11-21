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
        case "LOGIN_STATE_FETCHED":
            return {
                ...state,
                isLoggedIn: action.value
            }
        case "SIGNALS_FETCHED":
            return {
                ...state,
                signals: action.value
            }
        case "SIGNAL_NAMES_FETCHED":
            console.log('SIGNAL_NAMES_FETCHED', action.value)
            return {
                ...state,
                signalNames: action.value
            }
        case 'INSIGHT_FETCHED':
            return {
                ...state,
                insight: action.value
            }
        case 'SUMMARY_FETCHED':
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