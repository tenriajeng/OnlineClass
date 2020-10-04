import React from "react";
import {
  Layout, Table, Menu, Breadcrumb
} from "antd";
import Axios from "axios";
import "antd/dist/antd.css";
import "./App.css";
import {
  PieChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import UserTable from "./view/admin/user/UserTable";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Column, ColumnGroup } = Table;

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
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo">
            <h1 style={{ color: "white", marginLeft: 10, marginTop: 20 }}>
              Class Admin
            </h1>
          </div>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item
              style={{ marginTop: 7 }}
              key="1"
              icon={<PieChartOutlined />}
            >
              Option 1
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Table</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <UserTable />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Class ©2020 Created by DCC
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
export default App;
