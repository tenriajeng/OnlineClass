import { Button, PageHeader } from "antd";
import React from "react";

function InteractiveHeaderPageComponent(props) {
    return (
        <div style={{ margin: "10px 10px 0", padding: "0.5rem calc((100vw - 1200px) / 2)" }}>
            <PageHeader
                className="site-page-header"
                title="Title"
                subTitle="This is a subtitle"
                extra={[
                    <Button key="3">Operation</Button>,
                    <Button key="2">Operation</Button>,
                    <Button key="1" type="primary">
                        Primary
                    </Button>,
                ]}
            />
        </div>
    );
}

export default InteractiveHeaderPageComponent;
