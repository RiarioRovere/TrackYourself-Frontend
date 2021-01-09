import * as types from '../constants/types'

const initState = {
    signals: [],
    signalNames: [],
    isLoggedIn: false,
    insight: '',
    summary: '',
    inspectingDate: ''
};

const signal = (state = initState, action) => {
    switch (action.type) {
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
        case types.SET_INSPECTING_DATE:
            return {
                ...state,
                inspectingDate: action.value
            }
        case types.LOGIN_STATE_FETCHED:
            return {
                ...state,
                isLoggedIn: action.value
            }
        default:
            return state;
    }
}

export default signal;