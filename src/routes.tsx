import React from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./layout";

import Products from "./views/Products";
import Cart from "./views/Cart";

const Routes: React.FC = () => {
    return (
        <Switch>
            <Layout>
                <Route component={Products} path="/" exact />
                <Route component={Cart} path="/cart" />
            </Layout>
        </Switch>
    );
};

export default Routes;
