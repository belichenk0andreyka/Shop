import {DELETE_PRODUCT, GET_PRODUCTS, GET_PRODUCTS_SUCCESS, DELETE_PRODUCT_SUCCESS} from "./actionTypes";

export const getProducts = () => ({ type: GET_PRODUCTS });
export const getProductsSuccess = payload => ({ type: GET_PRODUCTS_SUCCESS, payload });
export const deleteProduct = payload => ({ type: DELETE_PRODUCT, payload });
export const deleteProductSuccess = payload => ({ type: DELETE_PRODUCT_SUCCESS, payload });
