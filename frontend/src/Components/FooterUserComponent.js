import { Layout } from "antd";
import React from "react";
const { Footer } = Layout;

function FooterUserComponent(props) {
	return (
		<div>
			<Footer style={{ textAlign: "center", marginTop: 20 }}>Online Course ©2018 Created by Dipanegara Computer CLub</Footer>
		</div>
	);
}

export default FooterUserComponent;
