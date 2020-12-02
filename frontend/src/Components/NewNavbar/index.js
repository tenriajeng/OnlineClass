import { Drawer, Menu, Grid, Button } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./NavbarElements";
import Logo from "../../images/logo.svg";
import { AuthAtom } from "../Auth/AuthAtom";
import { useRecoilState } from "recoil";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { useBreakpoint } = Grid;

const NewNavbar = () => {
    const [visible, setVisible] = useState(false);
    const [visibleDrawer, setVisibleDrawer] = useState(false);
    const [authUser, setAuthUser] = useRecoilState(AuthAtom);

    const [store, setStore] = useState(null);

    const storeCollector = () => {
        let store = JSON.parse(localStorage.getItem("login"));
        if (store && store.login) {
            setStore(store);
        }
    };

    useEffect(() => {
        let store = JSON.parse(localStorage.getItem("login"));
        if (store && store.login) {
            setAuthUser(true);
            setStore(store);
        }

        console.log("store : ", store);
    }, []);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const showDrawerUser = () => {
        setVisibleDrawer(true);
    };

    const onCloseDrawer = () => {
        setVisibleDrawer(false);
    };

    const { md } = useBreakpoint();
    const menuColor = { color: "000" };

    console.log("from auth atom : ", authUser);
    return (
        <>
            <Nav>
                <NavLink to="/">
                    {/* Logo */}
                    <img src={Logo} alt="logo" />
                </NavLink>
                <Bars onClick={showDrawer} />
                <NavMenu>
                    <NavLink to="/home" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/courses" activeStyle>
                        Courses
                    </NavLink>
                    <NavLink to="/interactive-courses" activeStyle>
                        Interactive&nbsp;Courses
                    </NavLink>
                    <NavLink to="/blog" activeStyle>
                        Blog
                    </NavLink>
                    <NavLink to="/team" activeStyle>
                        Team
                    </NavLink>
                    {/* <NavLink to="/register" activeStyle>
                        Sign Up
                    </NavLink>
                    <NavLink to="/login" activeStyle>
                        Sign In
                    </NavLink> */}
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                <NavBtn>
                    {authUser ? (
                        <Button size="large" type="primary" onClick={showDrawerUser}>
                            Username
                        </Button>
                    ) : (
                        <div>
                            <NavBtnLink to="/login">Sign In</NavBtnLink>
                            <NavBtnLink to="/register">Sign Up</NavBtnLink>
                        </div>
                    )}
                </NavBtn>

                {/* mobile */}
                <Drawer drawerStyle={{ color: "#342ead" }} title="Navigation" placement="right" closable={false} onClose={onClose} visible={visible}>
                    <Menu mode={md ? "horizontal" : "inline"} style={{ background: "#fff" }}>
                        <Menu.Item>
                            <Link style={menuColor} to="/">
                                Home
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link style={menuColor} to="/courses">
                                Courses
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link style={menuColor} to="/team">
                                Team
                            </Link>
                        </Menu.Item>
                    </Menu>
                    <Menu mode={md ? "horizontal" : "inline"} style={{ background: "#fff" }}>
                        {authUser ? (
                            <SubMenu title={<span style={menuColor}>Username</span>}>
                                <MenuItemGroup title="Account">
                                    <Menu.Item key="1">Profile</Menu.Item>
                                    <Menu.Item key="2">Courses</Menu.Item>
                                    <Menu.Item key="3">Logout</Menu.Item>
                                </MenuItemGroup>
                            </SubMenu>
                        ) : (
                            <div>
                                <Menu.Item key="mail">
                                    <Link style={menuColor} to="/login">
                                        Signin
                                    </Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link style={menuColor} to="/register">
                                        Signup
                                    </Link>
                                </Menu.Item>
                            </div>
                        )}
                    </Menu>
                </Drawer>
                {/* mobile */}

                {/* on login */}
                {authUser ? (
                    <Drawer drawerStyle={{ color: "#342ead" }} title="Account" placement="right" closable={true} onClose={onCloseDrawer} visible={visibleDrawer}>
                        <Menu mode={md ? "vertical" : "inline"} style={{ background: "#fff" }}>
                            <Menu.Item key="mail">
                                <Link style={menuColor} to="/profile">
                                    Profile
                                </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link style={menuColor} to="/courses/">
                                    Courses
                                </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link style={menuColor} to="/logout">
                                    Logout
                                </Link>
                            </Menu.Item>
                        </Menu>
                    </Drawer>
                ) : (
                    <div></div>
                )}

                {/* on login */}
            </Nav>
        </>
    );
};

export default NewNavbar;
