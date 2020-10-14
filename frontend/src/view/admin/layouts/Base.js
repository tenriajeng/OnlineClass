import { Breadcrumb, Layout, Menu } from "antd";
import React from "react";
import { UserOutlined, BgColorsOutlined, DatabaseOutlined, ContactsOutlined, TeamOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import SubMenu from "antd/lib/menu/SubMenu";
import Router from "../../../router";

const { Header, Content, Footer, Sider } = Layout;

class Base extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <div>
                <Layout>
                    <Header theme="dark" style={{ padding: 0 }}>
                        <div style={{ marginLeft: 10 }} className="logo">
                            <h1 style={{ color: "white" }}>Admin Panel</h1>
                        </div>
                    </Header>

                    <Layout>
                        <Sider
                            className="site-layout-background"
                            breakpoint="lg"
                            collapsedWidth="0"
                            onBreakpoint={(broken) => {
                                console.log(broken);
                            }}
                            onCollapse={(collapsed, type) => {
                                console.log(collapsed, type);
                            }}
                        >
                            <Menu theme="light" mode="inline">
                                <Menu.Item key="1" icon={<UserOutlined />}>
                                    <Link to="/admin/users">Users</Link>
                                </Menu.Item>
                                <Menu.Item key="2" icon={<DatabaseOutlined />}>
                                    <Link to="/admin/kelas">Kelas</Link>
                                </Menu.Item>
                                <Menu.Item key="3" icon={<ContactsOutlined />}>
                                    <Link to="/admin/kelas-user">Kelas Users</Link>
                                </Menu.Item>
                                <Menu.Item key="8" icon={<TeamOutlined />}>
                                    <Link to="/admin/pemateri">Pemateri</Link>
                                </Menu.Item>
                                <Menu.Item key="4" icon={<BgColorsOutlined />}>
                                    <Link to="/admin/tes">Tes</Link>
                                </Menu.Item>
                                <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                                    <Menu.Item key="5">Tom</Menu.Item>
                                    <Menu.Item key="6">Bill</Menu.Item>
                                    <Menu.Item key="7">Alex</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Content style={{ margin: "24px 16px 0" }}>
                            <Breadcrumb style={{ marginBottom: 15 }}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                                <Router />
                            </div>
                            <Footer style={{ textAlign: "center" }}>Ant Design ©2018 Created by Ant UED</Footer>
                        </Content>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default Base;
