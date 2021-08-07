import {CHANGE_PRODUCTS_ACTIONS_FIELD} from "./actionTypes";

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
        default:
            return state;
    }
};
