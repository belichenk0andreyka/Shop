import { call, takeEvery, select } from "redux-saga/effects";
import {NotificationManager} from 'react-notifications';

import { REGISTER_USER } from "./actionTypes";
import {regData} from "./selectors";
import {auth} from "../../../firebase";

export function* registerUser() {
    try {
        const {email, password} = yield select(regData);
        const data = yield call([auth, auth.createUserWithEmailAndPassword], email, password);
        yield call([NotificationManager, NotificationManager.success], 'Success registration');
    } catch (e) {
        yield call([NotificationManager, NotificationManager.error], e.message);
    }
}

export default function* watcherSaga() {
    yield takeEvery(REGISTER_USER, registerUser);
}
