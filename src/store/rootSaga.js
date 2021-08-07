import { all } from "redux-saga/effects";

import registerSaga from "./register/saga";
import authSaga from "./auth/saga";
import productsSaga from "./products/saga";
import productsActionsSaga from "./productsActions/saga";

export default function* rootSaga() {
    yield all([
        registerSaga(),
        authSaga(),
        productsSaga(),
        productsActionsSaga(),
    ]);
}
