import { createAction, createSlice } from "@reduxjs/toolkit";
import { REQUEST_POSTS } from "./actionTypes";
// import { hideLoader, showAlert, showLoader } from "./appReducer";

export const postSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        fetchedPosts: []
    },
    reducers: {
        createPost: (state, action) => {
            state.posts.push(action.payload)},
        fetchPost: (state, action) => {
            state.fetchedPosts.splice(state.fetchedPosts.length - 1, 0, ...action.payload)
        }
    }
})


export const fetchPosts = createAction(REQUEST_POSTS)
        
// const initialState = {
//     posts: [],
//     fetchedPosts: []
// }

// export const postReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case CREATE_POST: 
//             return {...state, posts: [...state.posts, action.payload]}
//         case FETCH_POSTS: 
//             return {...state, fetchedPosts: action.payload}
//         default: return state
//     }
// }

// export const createPost = (post) => {
//     return {
//         type: CREATE_POST,
//         payload: post
//     }
// }

// export const fetchPosts = () => {
//     return {
//         type: REQUEST_POSTS
//     }

    // return async dispatch => {
    //     try {
    //         dispatch(showLoader())
    //         const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    //         const json = await response.json()
    //         await setTimeout (() => {
    //             dispatch(hideLoader())
    //         }, 2000)
    //         dispatch({type: FETCH_POSTS, payload: json})
    //     }
    //     catch (error) {
    //         dispatch(showAlert("Ошибка загрузки постов!"))
    //         dispatch(hideLoader())
    //     }
    // }
// }