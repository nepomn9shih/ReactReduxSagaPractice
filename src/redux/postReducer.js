import { CREATE_POST, FETCH_POSTS, HIDE_LOADER, SHOW_LOADER } from "./actionTypes";

const initialState = {
    posts: [],
    fetchedPosts: []
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST: 
            return {...state, posts: [...state.posts, action.payload]}
        case FETCH_POSTS: 
            return {...state, fetchedPosts: action.payload}
        default: return state
    }
}

export const createPost = (post) => {
    return {
        type: CREATE_POST,
        payload: post
    }
}

export const fetchPosts = () => {
    return async dispatch => {
        dispatch({type: SHOW_LOADER})
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        const json = await response.json()
        await setTimeout (() => {dispatch({type: HIDE_LOADER})}, 2000)
        dispatch({type: FETCH_POSTS, payload: json})
    }
}