const initState = {
    signals: []
};

const reducer = (state = initState, action) => {
    switch (action.type) {
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