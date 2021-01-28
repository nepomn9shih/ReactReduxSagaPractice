import { createSlice } from "@reduxjs/toolkit"
// import { HIDE_LOADER, SHOW_LOADER, SHOW_ALERT, HIDE_ALERT } from "./actionTypes"

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        isLoading: false,
        alert: null
    },
    reducers: {
        showLoader: (state) => {state.isLoading = true},
        hideLoader: (state) => {state.isLoading = false},
        hideAlert: (state) => {state.alert = null},
        showAlert: (state, action) => {state.alert = action.payload}
    }
})

// const initialState = {
//   isLoading: false,
//   alert: null
// }

// export const appReducer = (state = initialState, action) => {
//     switch(action.type) {
//         case SHOW_LOADER: 
//             return {...state, isLoading: true}
//         case HIDE_LOADER: 
//             return {...state, isLoading: false}
//         case SHOW_ALERT: 
//             return {...state, alert: action.payload}
//         case HIDE_ALERT: 
//             return {...state, alert: null}
//         default: return state
//     }
// }

// export const showLoader = createAction(SHOW_LOADER)     

// export const hideLoader = createAction(HIDE_LOADER)

export const showAlert = (text) => {
    return dispatch => {
        dispatch(appSlice.actions.showAlert(text))  

        setTimeout(() => {
            dispatch(appSlice.actions.hideAlert())
        }, 5000)
    }
}

// export const hideAlert = createAction(HIDE_ALERT)