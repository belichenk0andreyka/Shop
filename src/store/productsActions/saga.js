import {call, takeEvery, put, select} from "redux-saga/effects";
import {NotificationManager} from 'react-notifications';

import { HANDLE_ACTION } from "./actionTypes";
import {productsActionsSelector} from "./selectors";
import {database} from "../../../firebase";
import {history} from "../createStore";

function* handleAction({ payload: { action, productId } }) {
    console.log('action', action, productId)
    action === 'add'
        ? yield call(addNewProduct)
        : yield call(editProduct)
}

function* editProduct(productId) {
    console.log(productId);
}

export function* addNewProduct() {
    try {
        const newProduct = yield select(productsActionsSelector);
        const ref = yield call([database, database.ref], 'products');
        const newProductsRef = yield call([ref, ref.push]);
        yield call([newProductsRef, newProductsRef.set], newProduct);
        yield call([history, history.push], '/products');
    } catch (e) {
        yield call([NotificationManager, NotificationManager.error], e.message);
    }
}



export default function* watcherSaga() {
    yield takeEvery(HANDLE_ACTION, handleAction);
}
