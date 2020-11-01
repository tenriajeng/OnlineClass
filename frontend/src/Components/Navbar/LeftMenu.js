import React from "react";
import { Menu, Grid } from "antd";
import { Link } from "react-router-dom";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const { useBreakpoint } = Grid;

const LeftMenu = () => {
	const { md } = useBreakpoint();
	const menuColor = { color: "white" };
	return (
		<Menu mode={md ? "horizontal" : "inline"} style={{ background: "#7952b3" }}>
			<Menu.Item key="mail">
				<Link style={menuColor} to="/">
					Home
				</Link>
			</Menu.Item>
			<Menu.Item key="alipay">
				<Link style={menuColor} to="/courses">
					Courses
				</Link>
			</Menu.Item>
		</Menu>
	);
};

export default LeftMenu;
