import { HIDE_LOADER, SHOW_LOADER } from "./actionTypes"

const initialState = {
  isLoading: false
}

export const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case SHOW_LOADER: 
            return {...state, isLoading: true}
        case HIDE_LOADER: 
            return {...state, isLoading: false}
        default: return state
    }
}