const initState = {
    signals: [],
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
        default:
            return state;
    }
}

export default reducer;