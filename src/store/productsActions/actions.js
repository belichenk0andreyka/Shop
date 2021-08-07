import {CHANGE_PRODUCTS_ACTIONS_FIELD, HANDLE_ACTION, ADD_NEW_PRODUCT_SUCCESS} from "./actionTypes";

export const changeProductActionsField = (value, field) => ({ type: CHANGE_PRODUCTS_ACTIONS_FIELD, payload: {value, field} });

export const handleAction = (payload) => ({ type: HANDLE_ACTION, payload });
export const addNewProductSuccess = () => ({ type: ADD_NEW_PRODUCT_SUCCESS });
