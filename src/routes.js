import React from "react";
import { Route, Switch } from "react-router-dom";

import Products from "./views/Products";
// import Abastecimento from "./views/Abastecimento";

const Routes = () => {
   return(
       <Switch>
           <Route component={Products}  path="/" exact />
           {/* {/* <Route component = { Sobre }  path="/sobre" /> */}
           {/* <Route component = { Abastecimento }  path="/abastecimento" />  */}
       </Switch>
   )
}

export default Routes;