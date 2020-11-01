import { Layout } from "antd";
import React from "react";
const { Footer } = Layout;

function FooterUserComponent(props) {
	return (
		<div>
			<Footer style={{ textAlign: "center", marginTop: 20, background: "#7952b3" }}>
				<p style={{ color: "white" }}>Online Course ©2018 Created by Dipanegara Computer CLub</p>
			</Footer>
		</div>
	);
}

export default FooterUserComponent;
