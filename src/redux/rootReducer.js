import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { postReducer } from "./postReducer";

export const rootReducer = combineReducers({
    posts: postReducer,
    app: appReducer
})