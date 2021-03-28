import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBarC from "./components/NavBarC";
import ItemListContainer from "./components/ItemsListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

import CartState from "./context/CartState";

export default function App() {
  return (
    <>
      <Router>
        <CartState>
          <NavBarC />;
          <Switch>
            <Route exact path="/">
              <ItemListContainer geeating={"Hola soy ItemlistContainer"} />
            </Route>
            <Route exact component={ItemDetailContainer} path="/product/:id" />
            <Route
              exact
              component={ItemListContainer}
              path="/category/:categoryId"
            />
          </Switch>
        </CartState>
      </Router>
    </>
  );
}

