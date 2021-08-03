import { call, takeEvery } from "redux-saga/effects";
import { SAY_HELLO } from "./actionTypes";

export function* helloSaga() {
    console.log("hello world");
    yield call([window, window.alert], "hello from saga");
}

export default function* watcherSaga() {
    yield takeEvery(SAY_HELLO, helloSaga);
}
