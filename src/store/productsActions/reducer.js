import {
    SET_START_PRODUCT_DATA,
    CLEAN_PRODUCTS_ACTIONS,
    CHANGE_PRODUCTS_ACTIONS_FIELD,
} from "./actionTypes";

const initialState = {
    title: '',
    description: '',
    price: '',
    discount: '',
    date: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_PRODUCTS_ACTIONS_FIELD:
            return {
                ...state,
                [action.payload.field]: action.payload.value,
            };
        case SET_START_PRODUCT_DATA:
            return {
                ...state,
                ...action.payload,
            };
        case CLEAN_PRODUCTS_ACTIONS:
            return initialState;
        default:
            return state;
    }
};
