import { HIDE_LOADER, SHOW_LOADER, SHOW_ALERT, HIDE_ALERT } from "./actionTypes"

const initialState = {
  isLoading: false,
  alert: null
}

export const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case SHOW_LOADER: 
            return {...state, isLoading: true}
        case HIDE_LOADER: 
            return {...state, isLoading: false}
        case SHOW_ALERT: 
            return {...state, alert: action.payload}
        case HIDE_ALERT: 
            return {...state, alert: null}
        default: return state
    }
}

export const showLoader = () => {
    return {
        type: SHOW_LOADER
    }
}

export const hideLoader = () => {
    return {
        type: HIDE_LOADER
    }
}

export const showAlert = (text) => {
    return dispatch => {
        dispatch({
            type: SHOW_ALERT,
            payload: text
        })  

        setTimeout(() => {
            dispatch(hideAlert())
        }, 5000)
    }
}

export const hideAlert = () => {
    return {
        type: HIDE_ALERT
    }
}