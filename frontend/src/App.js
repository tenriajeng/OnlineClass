import React from "react";
import {
  Layout, Menu, Breadcrumb
} from "antd";
import Axios from "axios";
import "./App.css";

import UserTable from "./view/admin/user/UserTable";
import { BrowserRouter as Router } from "react-router-dom"
import KelasTable from "./view/admin/kelas/KelasTable";
import Base from "./view/admin/layouts/Base";

class App extends React.Component {

  render() {
    return (
      <Router>
        <Base />
      </Router >
    );
  }
}

export default App;
