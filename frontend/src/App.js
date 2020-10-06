import React from "react";
import {
  Layout, Menu, Breadcrumb
} from "antd";
import Axios from "axios";
import "./App.css";
import {
  UserOutlined, HomeOutlined
} from "@ant-design/icons";
import UserTable from "./view/admin/user/UserTable";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import KelasTable from "./view/admin/kelas/KelasTable";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class App extends React.Component {
  state = {
    collapsed: false,
    users: [],
  };

  componentDidMount() {
    Axios.get(`http://localhost:6600`).then((res) => {
      const users = res.data.response;
      this.setState({ users });
    });
  }

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Router>

        <Layout style={{ minHeight: "100vh" }}>
          {/* Sidebar */}
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} >
            <div className="logo">
              <h1 style={{ color: "white", marginLeft: 10, marginTop: 20 }}>
                Admin Panel
            </h1>
            </div>
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item style={{ marginTop: 7 }} key="1" icon={<UserOutlined />} >
                <Link to="/admin/users">Users</Link>
              </Menu.Item>
              <SubMenu key="sub1" title="Manajemen Kelas">
                <Menu.Item key="3">
                  <Link to="/admin/kelas">Kelas</Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          {/* EndSidebar */}
          <Layout className="site-layout">
            {/* Header */}
            <Header className="site-layout-background" style={{ padding: 0 }} />
            {/* EndHeader */}
            {/* Content */}
            <Content style={{ margin: "0 16px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Table</Breadcrumb.Item>
              </Breadcrumb>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }} >
                <Route exact path="/admin/kelas" >
                  <KelasTable />
                </Route>
                <Route path="/admin/users" >
                  <UserTable />
                </Route>
              </div>
            </Content>
            {/* EndContent */}
            {/* Footer */}
            <Footer style={{ textAlign: "center" }}>
              Class ©2020 Created by DCC
            </Footer>
            {/* EndFooter */}
          </Layout>
        </Layout>
      </Router >
    );
  }
}

export default App;
