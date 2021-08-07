import { call, takeEvery, select } from "redux-saga/effects";
import {NotificationManager} from 'react-notifications';

import {AUTH_USER} from "./actionTypes";
import {authData} from "./selectors";
import {auth} from "../../../firebase";
import {history} from "../createStore";

export function* authUser() {
    try {
        const {email, password} = yield select(authData);
        const data = yield call([auth, auth.signInWithEmailAndPassword], email, password);
        yield call([NotificationManager, NotificationManager.success], 'Success auth');
        yield call([history, history.push], '/products');
    } catch (e) {
        yield call([NotificationManager, NotificationManager.error], e.message);
    }
}

export default function* watcherSaga() {
    yield takeEvery(AUTH_USER, authUser);
}
