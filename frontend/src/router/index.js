import React from "react";
import { Switch, Route } from "react-router-dom";
import KelasTable from "../view/admin/kelas/KelasTable";
import KelasUsersTable from "../view/admin/kelasUsers/KelasUsersTable";
import Pemateri from "../view/admin/pemateri/PemateriTable";
import Tes from "../view/admin/tes";
import UserTable from "../view/admin/user/UserTable";

function Router(props) {
    return (
        <Switch>
            <Route exact path="/admin/kelas">
                <KelasTable />
            </Route>
            <Route path="/admin/users">
                <UserTable />
            </Route>
            <Route path="/admin/kelas-user">
                <KelasUsersTable />
            </Route>
            <Route path="/admin/pemateri">
                <Pemateri />
            </Route>
            <Route path="/admin/tes">
                <Tes />
            </Route>
        </Switch>
    );
}

export default Router;
