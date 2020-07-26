import ApiService from '../services/api-service'

const apiService = new ApiService();

const fetchAccessToken = (username, password) => {
    return function (dispatch) {
        const request = {username, password}
        fetch(`${apiService.apiUrl}/user/authenticate`, {
            method: 'POST',
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(data => data.json())
            .then(v => {
                localStorage.setItem('token', v.jwtToken)
                window.location.reload(false);
                dispatch({
                    type: 'ACCESS_TOKEN_FETCHED',
                    value: v.token
                })
            })
            .catch(e => console.warn(e))
    }
}

const registerUser = (username, password) => {
    return function (dispatch) {
        const request = {username, password};
        fetch(`${apiService.apiUrl}/user/register`, {
            method: 'POST',
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            }
        }).catch(e => console.warn(e))
    }
}

const fetchSignals = () => {
    return function (dispatch) {
        apiService.getSignals().then((signals) => {
                dispatch({
                    type: 'SIGNALS_FETCHED',
                    value: signals
                })
            }
        )
    }
}

const fetchSignalNames = () => {
    return (dispatch) => {
        apiService.getSignalNames().then((signalNames) => {
            dispatch({
                type: 'SIGNAL_NAMES_FETCHED',
                value: signalNames
            })
        })
    }
}

const fetchSummary = (date) => {
    return (dispatch) => {
        apiService.getSummary(date).then((summary) => {
            dispatch({
                type: 'SUMMARY_FETCHED',
                value: summary
            })
        })
    }
}

const saveSummary = (summary, date) => {
    return (dispatch) => {
        apiService.saveSummary(summary, date).then(() => {
            dispatch({
                type: 'SUMMARY_SAVED'
            })
        })
    }
}

const addSignalName = (name) => {
    return (dispatch) => {
        apiService.addSignalName(name).then(() => {
            dispatch({
                type: 'SIGNAL_NAME_ADDED',
                value: name
            })
            fetchSignalNames()(dispatch);
        })
    }
}

const deleteSignalName = (name) => {
    return (dispatch) => {
        apiService.deleteSignalName(name).then(() => {
            dispatch({
                type: 'SIGNAL_NAME_DELETED',
                value: name
            })
            fetchSignalNames()(dispatch);
        })
    }
}

const fetchLoginState = () => {
    return function (dispatch) {
        apiService.isLoggedIn().then(isLoggedIn => {
            dispatch({
                type: 'LOGIN_STATE_FETCHED',
                value: isLoggedIn
            })
        })
    }
}

const saveSignals = (toSave) => {
    return function (dispatch) {
        apiService.saveSignals(toSave)
    }
}

const fetchInsight = (id) => {
    return {
        type: 'INSIGHT_FETCHED',
        value: apiService.fetchInsight(id)
    }
}

const logout = () => {
    localStorage.removeItem("token")
    window.location.href = "/"
    return {
        type: 'LOGOUT',
    }
}

export {
    addSignalName,
    deleteSignalName,
    fetchInsight,
    fetchAccessToken,
    fetchSignals,
    fetchSignalNames,
    fetchSummary,
    fetchLoginState,
    logout,
    registerUser,
    saveSignals,
    saveSummary
}