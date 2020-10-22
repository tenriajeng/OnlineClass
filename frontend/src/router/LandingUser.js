import React from "react";
import { Switch, Route } from "react-router-dom";
import KelasTable from "../view/admin/kelas/KelasTable";
import KelasUsersTable from "../view/admin/kelasUsers/KelasUsersTable";
import Pemateri from "../view/admin/pemateri/PemateriTable";
import Pembayaran from "../view/admin/pembayaran/PembayaranTable";
import Tes from "../view/tes/tes";
import UserTable from "../view/admin/user/UserTable";

function LandingUser(props) {
    return (
        <>
            <Route path="/user/testing">
                <Tes />
            </Route>
        </>
    );
}

export default LandingUser;
