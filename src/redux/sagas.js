import { call, put, takeEvery } from 'redux-saga/effects'
import { REQUEST_POSTS } from './actionTypes'
import { appSlice, showAlert } from './appReducer'
import { postSlice } from './postReducer'

//нужна функция-генератор
export function* sagaWatcher() {
    yield takeEvery(REQUEST_POSTS, sagaWorker)
}

function* sagaWorker() {
    try {
        yield put(appSlice.actions.showLoader())
        const payload = yield call(fetchPosts)
        yield put(postSlice.actions.fetchPost(payload))
        yield put(appSlice.actions.hideLoader())
    }
    catch (error) {
        yield put(showAlert("Ошибка загрузки!"))
        yield put(appSlice.actions.hideLoader())
    }
}

async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    return await response.json()
} 
