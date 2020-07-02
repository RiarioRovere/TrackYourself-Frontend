const reducer = () => (state, action) => {
    if (action === null) {
        return state;
    }
    const {type} = action;
    switch (type) {
        default:
            return state;
    }
}

export default reducer;