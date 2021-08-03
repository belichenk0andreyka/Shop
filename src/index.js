import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {NotificationContainer} from "react-notifications";
import {BrowserRouter as Router, Route} from "react-router-dom";

import store from "./store/createStore";
import Login from "./components/Login";
import Register from "./components/Register";
import ProductsPage from "./components/ProductsPage";
import ProductsEdit from "./components/ProductsEdit/ProductsPage";
import ProductsAdd from "./components/ProductsAdd/ProductsPage";

import 'react-notifications/lib/notifications.css';
import './index.less';


const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Route exact path="/auth" component={Login} />
                <Route path="/" component={Register} />
                <Route path="/products" component={ProductsPage} />
                <Route path="/products-edit" component={ProductsEdit} />
                <Route path="/products-add" component={ProductsAdd} />
            </Router>
            <NotificationContainer/>
        </Provider>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
