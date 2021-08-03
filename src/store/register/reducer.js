import {CHANGE_REG_INPUT} from "./actionTypes";

const initialState = {
    email: '',
    password: '',
    passwordAgain: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_REG_INPUT:
            return {
                ...state,
                [action.payload.field]: action.payload.value,
            };
        default:
            return state;
    }
};
