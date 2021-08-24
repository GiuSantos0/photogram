import React from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./layout";

import Products from "./views/Products";
// import Abastecimento from "./views/Abastecimento";

const Routes = () => {
   return(
       <Switch>
           <Layout>
            <Route component={Products}  path="/" exact />
            {/* {/* <Route component = { Sobre }  path="/sobre" /> */}
            {/* <Route component = { Abastecimento }  path="/abastecimento" />  */}
           </Layout>
       </Switch>
   )
}

export default Routes;