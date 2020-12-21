import * as types from '../constants/types'

const initState = {
    searchText: '',
    searchResponse : [{}]
};

const general = (state = initState, action) => {
    switch (action.type) {
        case types.UPDATE_SEARCH_REQUEST:
            console.log(action.value)
            return {
                ...state,
                searchText: action.value
            }
        case types.UPDATE_SEARCH_SUCCESS:
            return {
                ...state,
                searchResponse: action.value,
            }
        default:
            return state;
    }
}

export default general;