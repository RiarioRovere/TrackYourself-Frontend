import axios from "../utils/api";
import * as types from "../constants/types";

export const updateSearch = (text) => {
    return async (dispatch) => {
        dispatch({
            type: types.UPDATE_SEARCH_REQUEST,
            value: text
        })
        const {data} = await axios.get(`/user/search?text=${text}`)
        if (text) {
            dispatch({
                type: types.UPDATE_SEARCH_SUCCESS,
                value: data
            })
        }
    }
}