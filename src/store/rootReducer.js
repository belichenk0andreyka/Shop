import { combineReducers } from "redux";

import registerReducer from './register/reducer';

export const rootReducer = combineReducers({
    register: registerReducer
});
