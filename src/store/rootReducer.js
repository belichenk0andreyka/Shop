import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'

import registerReducer from './register/reducer';
import authReducer from './auth/reducer';
import productsReducer from './products/reducer';
import productsActionsReducer from './productsActions/reducer';

export const rootReducer = (history) => combineReducers({
    register: registerReducer,
    auth: authReducer,
    products: productsReducer,
    productsActions: productsActionsReducer,
    router: connectRouter(history),
});
