import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "../view/layouts/main";

function Router(props) {
  return (
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
    </Switch>
  );
}

export default Router;
