import React from "react";
import { Menu, Grid } from "antd";
import { Link } from "react-router-dom";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const { useBreakpoint } = Grid;

const RightMenu = () => {
	const { md } = useBreakpoint();
	const menuColor = { color: "white" };

	return (
		<Menu mode={md ? "horizontal" : "inline"} style={{ background: "#7952b3" }}>
			<Menu.Item key="mail">
				<Link style={menuColor} to="/">
					Signin
				</Link>
			</Menu.Item>
			<Menu.Item key="app">
				<Link style={menuColor} to="/">
					Signup
				</Link>
			</Menu.Item>
			<SubMenu key="sub1" title={<span style={menuColor}>Username</span>}>
				<MenuItemGroup title="Item 1">
					<Menu.Item key="setting:1">Option 1</Menu.Item>
					<Menu.Item key="setting:2">Option 2</Menu.Item>
				</MenuItemGroup>
				<MenuItemGroup title="Item 2">
					<Menu.Item key="setting:3">Option 3</Menu.Item>
					<Menu.Item key="setting:4">Option 4</Menu.Item>
				</MenuItemGroup>
			</SubMenu>
		</Menu>
	);
};

export default RightMenu;
