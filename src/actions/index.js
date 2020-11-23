import axios from "../utils/api";
import {API_HOSTNAME} from "../constants/api";
import * as types from '../constants/types'


export const fetchAccessToken = (username, password) => {
    return function (dispatch) {
        const request = {username, password}
        fetch(`${API_HOSTNAME}/user/authenticate`, {
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

export const registerUser = (username, password) => {
    return async (dispatch) => {
        const request = {username, password};
        await fetch(`${API_HOSTNAME}/user/register`, {
            method: 'POST',
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            }
        }).catch(e => console.error(e))
        window.location.href = '/login';
    }
}

export const fetchSignals = () => {
    return async (dispatch) => {
        const response = await axios.get('/signals')
        const {data} = response
        dispatch({
            type: types.SIGNALS_FETCHED,
            value: data
        })
    }
}

export const fetchSignalNames = () => {
    return async (dispatch) => {
        const response = await axios.get('/signal-name')
        let {data} = response
        data = data.map(({name}) => name)
        dispatch({
            type: types.SIGNAL_NAMES_FETCHED,
            value: data
        })
    }
}

export const fetchGoals = () => {
    return async (dispatch) => {
        const {data} = await axios.get('/goals')
        dispatch({
            type: types.GOALS_FETCHED,
            value: data
        })
    }
}

export const fetchGoal = (id) => {
    return async (dispatch) => {
        const {data} = await axios.get(`/goal/${id}`)
        dispatch({
            type: types.GOAL_FETCHED,
            value: data
        })
    }
}

export const fetchReports = (goalId) => {
    return async (dispatch) => {
        const {data} = await axios.get(`/goal/${goalId}/reports`)
        dispatch({
            type: types.REPORTS_FETCHED,
            value: data
        })
    }
}

export const fetchSummary = (date) => {
    return async (dispatch) => {
        const {data} = await axios.get('/summary', {params: {date}})
        dispatch({
            type: types.SUMMARY_FETCHED,
            value: data?.summary || ''
        })
    }
}

export const saveSummary = (summary, date) => {
    return async (dispatch) => {
        await axios.post('/summary', JSON.stringify({summary, date}))
        dispatch({
            type: types.SUMMARY_SAVED
        })
    }
}

export const addSignalName = (name) => {
    return async (dispatch) => {
        await axios.post('/signal-name', JSON.stringify({name}))
        dispatch({
            type: types.SIGNAL_NAME_ADDED,
            value: name
        })
        await fetchSignalNames()(dispatch);
    }
}

export const deleteSignalName = (name) => {
    return async (dispatch) => {
        await axios.delete('/signal-name', {data: JSON.stringify({name})})
        dispatch({
            type: types.SIGNAL_NAME_DELETED,
            value: name
        })
        await fetchSignalNames()(dispatch);
    }
}

export const fetchLoginState = () => {
    return async (dispatch) => {
        const {status} = await axios.get('/signal-name')
        const isLoggedIn = status !== 401;
        dispatch({
            type: types.LOGIN_STATE_FETCHED,
            value: isLoggedIn
        })
    }
}

export const saveSignals = (signals) => {
    return async (dispatch) => {
        await axios.post('/signals', JSON.stringify(signals))
    }
}

export const fetchInsight = (id) => {
    let insight;
    switch (id) {
        case 'sport':
            insight = 'Do sport'
            break
        case 'sleep':
            insight = 'Sleep well'
            break
        case 'water':
            insight = 'Drink water'
            break
        case 'meditation':
            insight = 'Keep calm'
            break
        case 'nutrition':
            insight = 'Eat well'
            break
        default:
            insight = 'Be happy'
            break
    }
    return {
        type: types.INSIGHT_FETCHED,
        value: insight
    }
}

export const logout = () => {
    localStorage.removeItem("token")
    window.location.href = "/"
    return {
        type: types.LOGOUT,
    }
}
