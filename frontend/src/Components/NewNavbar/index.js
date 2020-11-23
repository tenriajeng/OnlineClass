import { Drawer, Menu, Grid } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LeftMenu from "../Navbar/LeftMenu";
import RightMenu from "../Navbar/RightMenu";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./NavbarElements";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { useBreakpoint } = Grid;

const NewNavbar = () => {
    const current = "mail";
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const { md } = useBreakpoint();
    const menuColor = { color: "000" };

    return (
        <>
            <Nav>
                <NavLink to="/">
                    {/* Logo */}
                    <img src={require("../../images/logo.svg")} alt="logo" />
                </NavLink>
                <Bars onClick={showDrawer} />
                <NavMenu>
                    <NavLink to="/home" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/courses" activeStyle>
                        Courses
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
                    <NavBtnLink to="/login">Sign In</NavBtnLink>
                    <NavBtnLink to="/register">Sign Up</NavBtnLink>
                </NavBtn>
                <Drawer drawerStyle={{ color: "#342ead" }} title="Basic Drawer" placement="right" closable={false} onClose={onClose} visible={visible}>
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
                        <SubMenu title={<span style={menuColor}>Username</span>}>
                            <MenuItemGroup title="Account">
                                <Menu.Item key="1">Profile</Menu.Item>
                                <Menu.Item key="2">Courses</Menu.Item>
                                <Menu.Item key="3">Logout</Menu.Item>
                            </MenuItemGroup>
                        </SubMenu>
                    </Menu>
                    {/* <LeftMenu />
                    <RightMenu /> */}
                </Drawer>
            </Nav>
        </>
    );
};

export default NewNavbar;
