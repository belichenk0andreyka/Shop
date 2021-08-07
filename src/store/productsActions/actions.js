import {
    HANDLE_ACTION,
    GET_ONE_PRODUCT,
    SET_START_PRODUCT_DATA,
    CLEAN_PRODUCTS_ACTIONS,
    ADD_NEW_PRODUCT_SUCCESS,
    CHANGE_PRODUCTS_ACTIONS_FIELD
} from "./actionTypes";

export const changeProductActionsField = (value, field) => ({ type: CHANGE_PRODUCTS_ACTIONS_FIELD, payload: {value, field} });

export const handleAction = (payload, productId) => ({ type: HANDLE_ACTION, payload, productId });
export const addNewProductSuccess = () => ({ type: ADD_NEW_PRODUCT_SUCCESS });
export const getOneProduct = (payload) => ({ type: GET_ONE_PRODUCT, payload });
export const setStartProductData = (payload) => ({ type: SET_START_PRODUCT_DATA, payload });
export const cleanProductsActions = () => ({ type: CLEAN_PRODUCTS_ACTIONS });
