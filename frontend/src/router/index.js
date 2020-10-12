import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "../view/admin/layouts/Main";
import Tes from "../view/admin/tes";
import UserTable from "../view/admin/user/UserTable";

function Router(props) {
  return (
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/admin/users">
        <UserTable />
      </Route> 
    </Switch>
  );
}

export default Router;
