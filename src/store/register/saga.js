import { call, takeEvery } from "redux-saga/effects";
import { REGISTER_USER } from "./actionTypes";

export function* registerUser() {
    console.log("hello world");
    yield call([window, window.alert], "hello from saga");
}

export default function* watcherSaga() {
    yield takeEvery(REGISTER_USER, registerUser);
}
