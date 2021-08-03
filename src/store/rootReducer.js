import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'

import registerReducer from './register/reducer';
import authReducer from './auth/reducer';

export const rootReducer = (history) => combineReducers({
    register: registerReducer,
    auth: authReducer,
    router: connectRouter(history),
});
