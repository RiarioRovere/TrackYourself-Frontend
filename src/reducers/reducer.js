const initState = {
    signals: [],
    isLoggedIn: false
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
        default:
            return state;
    }
}

export default reducer;