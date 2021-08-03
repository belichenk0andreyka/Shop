import createSagaMiddleware from "redux-saga";
import {createBrowserHistory} from "history";
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {routerMiddleware} from "connected-react-router";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware()
export const history = createBrowserHistory()
const store = createStore(
    rootReducer(history),
    composeWithDevTools(
        applyMiddleware(
            sagaMiddleware,
            routerMiddleware(history)
        )
    )
);
sagaMiddleware.run(rootSaga);

export default store;
