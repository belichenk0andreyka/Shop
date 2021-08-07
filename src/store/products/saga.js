import { call, takeEvery, put } from "redux-saga/effects";
import {NotificationManager} from 'react-notifications';

import {DELETE_PRODUCT, GET_PRODUCTS} from "./actionTypes";
import {database} from "../../../firebase";
import {getProductsSuccess, deleteProductSuccess} from "./actions";

export function* getProducts() {
    try {
        const dbRef = yield call([database, database.ref]);
        const data = yield call([dbRef, dbRef.child], "products")
        const dataGet = yield call([data, data.get]);
        if (dataGet.exists()) {
            yield put(getProductsSuccess(dataGet.val()));
        }
    } catch (e) {
        yield call([NotificationManager, NotificationManager.error], e.message);
    }
}

function* deleteProduct({ payload }) {
    try {
        const dbRef = yield call([database, database.ref]);
        const data = yield call([dbRef, dbRef.child], "products")
        const dataChild = yield call([data, data.child], payload);
        yield call([dataChild, dataChild.remove]);
        yield put(deleteProductSuccess(payload));
        yield call([NotificationManager, NotificationManager.success], 'You have successfully uninstalled the product');
    } catch (e) {
        yield call([NotificationManager, NotificationManager.error], e.message);
    }
}

export default function* watcherSaga() {
    yield takeEvery(GET_PRODUCTS, getProducts);
    yield takeEvery(DELETE_PRODUCT, deleteProduct);
}
