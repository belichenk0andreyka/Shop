import {DELETE_PRODUCT_SUCCESS, GET_PRODUCTS_SUCCESS} from "./actionTypes";

const initialState = {
    products: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload,
            };
        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                products: Object.keys(state.products).filter(key =>
                    key !== action.payload).reduce((obj, key) =>
                    {
                        obj[key] = state.products[key];
                        return obj;
                    }, {}
                ),
            };
        default:
            return state;
    }
};
