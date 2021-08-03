import {CHANGE_AUTH_INPUT} from "./actionTypes";

const initialState = {
    email: '',
    password: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_AUTH_INPUT:
            return {
                ...state,
                [action.payload.field]: action.payload.value,
            };
        default:
            return state;
    }
};
