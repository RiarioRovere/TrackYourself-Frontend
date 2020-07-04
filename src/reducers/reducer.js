const initState =
    {
        name: 'sleep',
        value: 3.
    }
;

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'INC':
            return {
                ...state,
                value: state.value + 1
            }
        case 'DEC':
            return {
                ...state,
                value: state.value - 1
            }
        default:
            return state;
    }
}

export default reducer;