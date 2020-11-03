import { BackTop, Layout } from "antd";
import React from "react";
import { UpSquareOutlined } from "@ant-design/icons";

const { Footer } = Layout;

function FooterUserComponent(props) {
	return (
		<div>
			<Footer style={{ textAlign: "center", marginTop: 20, background: "#342ead", paddingTop: 50 }}>
				<p style={{ color: "white" }}>Copyright &copy; 2020 DIPANEGARA COMPUTER CLUB</p>
				<BackTop>
					<div className="goTop">
						<UpSquareOutlined style={{ fontSize: 50, color: "#000839" }} />
					</div>
				</BackTop>
			</Footer>
		</div>
	);
}

export default FooterUserComponent;
