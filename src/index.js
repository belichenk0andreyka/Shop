import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {NotificationContainer} from "react-notifications";
import { BrowserRouter, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'

import Login from "./components/Login";
import Register from "./components/Register";
import ProductsPage from "./components/ProductsPage";
import ProductsActions from "./components/ProductsActions";

import store from "./store/createStore";
import { history } from "./store/createStore";

import 'react-notifications/lib/notifications.css';
import './index.less';

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <ConnectedRouter history={history}>
                    <Route path="/auth" component={Login} />
                    <Route exact path="/" component={Register} />
                    <Route path="/products" component={ProductsPage} />
                    <Route path="/products-edit/:id" component={() => <ProductsActions action='edit' />} />
                    <Route path="/products-add" component={() => <ProductsActions action='add' />} />
                </ConnectedRouter>
            </BrowserRouter>
            <NotificationContainer/>
        </Provider>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
