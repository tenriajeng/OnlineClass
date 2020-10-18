import React from "react";
import { Layout } from "antd";

const { Header, Content, Footer, Sider } = Layout;

function FooterComponent() {
    return (
        <div>
            <Footer style={{ textAlign: "center" }}>Ant Design ©2018 Created by Ant UED</Footer>
        </div>
    );
}

export default FooterComponent;
