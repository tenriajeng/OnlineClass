<<<<<<< Updated upstream
import { Breadcrumb, Layout, Menu } from 'antd'
import React from 'react'
import {
    UserOutlined,
    UploadOutlined,
    VideoCameraOutlined
} from "@ant-design/icons";
import { Link, Route } from 'react-router-dom';
import KelasTable from '../kelas/KelasTable';
import UserTable from '../user/UserTable';
import SubMenu from 'antd/lib/menu/SubMenu';
=======
import { Breadcrumb, Layout, Menu } from "antd";
import React from "react";
import { UserOutlined, VideoCameraOutlined, CopyOutlined  } from "@ant-design/icons";
import { Link, Route } from "react-router-dom";
import KelasTable from "../kelas/KelasTable";
import UserTable from "../user/UserTable";
import MaterisTable from "../materi/MaterisTable";
import SubMenu from "antd/lib/menu/SubMenu";
>>>>>>> Stashed changes

const { Header, Content, Footer, Sider } = Layout;

class Base extends React.Component {

    state = {
        collapsed: false,
    };

<<<<<<< Updated upstream
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {

        return (
            <div>
                <Layout>
                    <Sider
                        breakpoint="lg"
                        collapsedWidth="0"
                        onBreakpoint={broken => {
                            console.log(broken);
                        }}
                        onCollapse={(collapsed, type) => {
                            console.log(collapsed, type);
                        }}
                    >
                        <div style={{ margin: '24px 16px 13px' }} className="logo">
                            <h1 style={{ color: 'white' }}>Admin Panel</h1>
                        </div>
                        <Menu theme="dark" mode="inline">
                            <Menu.Item key="1" icon={<UserOutlined />}>
                                <Link to="/admin/users">Users</Link>
                            </Menu.Item>
                            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                                <Link to="/admin/kelas">Kelas</Link>
                            </Menu.Item>
                            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                                <Menu.Item key="5">Tom</Menu.Item>
                                <Menu.Item key="6">Bill</Menu.Item>
                                <Menu.Item key="7">Alex</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
                        <Content style={{ margin: '24px 16px 0' }}>
                            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                                <Route exact path="/admin/kelas" >
                                    <KelasTable />
                                </Route>
                                <Route path="/admin/users" >
                                    <UserTable />
                                </Route>
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>
                </Layout>
            </div >
        )
    }
=======
  render() {
    return (
      <div>
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <div style={{ margin: "24px 16px 13px" }} className="logo">
              <h1 style={{ color: "white" }}>Admin Panel</h1>
            </div>
            <Menu theme="dark" mode="inline">
              <Menu.Item key="1" icon={<UserOutlined />}>
                <Link to="/admin/users">Users</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                <Link to="/admin/kelas">Kelas</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<CopyOutlined />}>
                <Link to="/admin/materi">Materi</Link>
              </Menu.Item>
              <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                <Menu.Item key="5">Tom</Menu.Item>
                <Menu.Item key="6">Bill</Menu.Item>
                <Menu.Item key="7">Alex</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Header
              className="site-layout-sub-header-background"
              style={{ padding: 0 }}
            />
            <Content style={{ margin: "24px 16px 0" }}>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
              >
                <Route exact path="/admin/kelas">
                  <KelasTable />
                </Route>
                <Route path="/admin/users">
                  <UserTable />
                </Route>
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
>>>>>>> Stashed changes
}

export default Base
