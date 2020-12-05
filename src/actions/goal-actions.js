import axios from "../utils/api";
import * as types from '../constants/types'


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

export const addGoal = (goal) => {
    return async (dispatch) => {
        await axios.post('/goal', JSON.stringify(goal))
        dispatch({
            type: types.GOAL_ADDED,
            value: goal.title + goal.description // TODO: move to id
        })
    }
}

export const deleteGoal = (id) => {
    return async (dispatch) => {
        const {status} = await axios.delete(`/goal/${id}`)
        if (status === 200) {
            dispatch({
                type: types.GOAL_DELETE_SUCCESS,
                value: id
            })
        }
    }
}

export const fetchReports = (goalId) => {
    return async (dispatch) => {
        const {data} = await axios.get(`/goal/${goalId}/reports`)
        console.log(`reports fetched ${JSON.stringify(data)}`)
        dispatch({
            type: types.REPORTS_FETCHED,
            value: data
        })
    }
}

export const saveReport = (report, goalId) => {
    return async (dispatch) => {
        const {data, status} = await axios.post(`/goal/${goalId}/report`, report)
        if (status === 200) {
            dispatch({
                type: types.REPORT_SAVE_SUCCESS,
                value: data
            })
            await fetchReports(goalId)(dispatch)
        }
    }
}

export const deleteReport = (id) => {
    return async (dispatch) => {
        const {status} = await axios.delete(`/goal/report/${id}`)
        if (status === 200) {
            dispatch({
                type: types.REPORT_DELETE_SUCCESS,
            })
        }
    }
}
