import React from "react";
import { Menu, Grid } from "antd";
import { Link } from "react-router-dom";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const { useBreakpoint } = Grid;

const LeftMenu = () => {
	const { md } = useBreakpoint();
	return (
		<Menu mode={md ? "horizontal" : "inline"}>
			<Menu.Item key="mail">
				<Link to="/">Home</Link>
			</Menu.Item>
			<Menu.Item key="alipay">
				<Link to="/courses">Courses</Link>
			</Menu.Item>
		</Menu>
	);
};

export default LeftMenu;
