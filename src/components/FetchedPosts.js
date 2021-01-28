import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/postReducer";
import Post from "./Post";

const FetchedPosts = () => {
    const dispatch = useDispatch()
    const asyncPosts = useSelector((state) => {
        return state.posts.fetchedPosts})
    const isLoading =  useSelector((state) => state.app.isLoading)

    console.log(asyncPosts)

    if (!asyncPosts.length) {
        return <button 
        className="btn btn-primary"
        onClick={() => dispatch(fetchPosts())}
        >Загрузить посты</button>
    }

    if (isLoading) {
        return <div>...Loading</div>
    }

    return asyncPosts.map( post => {
        return <Post key={post.id} post={post.title}/>
    })
}

export default FetchedPosts