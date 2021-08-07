import {call, takeEvery, put, select} from "redux-saga/effects";
import {NotificationManager} from 'react-notifications';

import {GET_ONE_PRODUCT, HANDLE_ACTION} from "./actionTypes";
import {productsActionsSelector} from "./selectors";
import {database} from "../../../firebase";
import {history} from "../createStore";
import {cleanProductsActions, setStartProductData} from "./actions";
import dayjs from "dayjs";

function* handleAction({ payload: { action }, productId}) {
    action === 'add'
        ? yield call(addNewProduct)
        : yield call(editProduct, productId)
}

function* editProduct(productId) {
    try {
        const newProduct = yield select(productsActionsSelector);
        if (newProduct.date) {
            newProduct.date = dayjs(newProduct.date).unix() * 1000
        }
        const ref = yield call([database, database.ref], `products/${productId}`);
        yield call([ref, ref.set], newProduct);
        yield call([history, history.push], '/products');
        yield call([NotificationManager, NotificationManager.success], 'Product was edited successfully');
        yield put(cleanProductsActions());
    } catch (e) {
        yield call([NotificationManager, NotificationManager.error], e.message);
    }
}

export function* addNewProduct() {
    try {
        const newProduct = yield select(productsActionsSelector);
        const ref = yield call([database, database.ref], 'products');
        const newProductsRef = yield call([ref, ref.push]);
        yield call([newProductsRef, newProductsRef.set], newProduct);
        yield call([history, history.push], '/products');
        yield call([NotificationManager, NotificationManager.success], 'Product was added successfully');
        yield put(cleanProductsActions());
    } catch (e) {
        yield call([NotificationManager, NotificationManager.error], e.message);
    }
}

function* getOneProduct ({ payload }) {
    const dbRef = yield call([database, database.ref]);
    const data = yield call([dbRef, dbRef.child], "products")
    const dataChild = yield call([data, data.child], payload);
    const dataChildGet = yield call([dataChild, dataChild.get]);
    if (dataChildGet.exists()) {
        const newState = {...dataChildGet.val()};
        if (newState.date) {
            newState.date = dayjs(newState.date).format('YYYY-MM-DD');
        }
        yield put(setStartProductData(newState));
    }
}



export default function* watcherSaga() {
    yield takeEvery(HANDLE_ACTION, handleAction);
    yield takeEvery(GET_ONE_PRODUCT, getOneProduct);
}
