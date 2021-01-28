import { call, put, takeEvery } from 'redux-saga/effects'
import { FETCH_POSTS, REQUEST_POSTS } from './actionTypes'
import { hideLoader, showAlert, showLoader } from './appReducer'

//нужна функция-генератор
export function* sagaWatcher() {
    yield takeEvery(REQUEST_POSTS, sagaWorker)
}

function* sagaWorker() {
    try {
        yield put(showLoader())
        const payload = yield call(fetchPosts)
        yield put({type: FETCH_POSTS, payload})
        yield put(hideLoader())
    }
    catch (error) {
        yield put(showAlert("Ошибка загрузки постов!"))
        yield put(hideLoader())
    }
}

async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    return await response.json()
} 
