import React from "react";
import { Input, Row, Col, Card } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import Meta from "antd/lib/card/Meta";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from "@ant-design/icons";

class Tes extends React.Component {
    render() {
        const cardStyle = { marginRight: 3, marginLeft: 3 };
        const colStyle = { marginTop: 10 };
        return (
            <div>
                <Row>
                    <Col flex="auto" style={colStyle}>
                        <Card
                            style={{ width: 320 }}
                            cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                            actions={[<SettingOutlined key="setting" />, <EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />]}
                        >
                            <Meta title="Card title" description="This is the description" />
                        </Card>
                    </Col>
                    <Col flex="auto" style={colStyle}>
                        <Card
                            style={{ width: 320 }}
                            cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                            actions={[<SettingOutlined key="setting" />, <EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />]}
                        >
                            <Meta title="Card title" description="This is the description" />
                        </Card>
                    </Col>
                    <Col flex="auto" style={colStyle}>
                        <Card
                            style={{ width: 320 }}
                            cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                            actions={[<SettingOutlined key="setting" />, <EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />]}
                        >
                            <Meta title="Card title" description="This is the description" />
                        </Card>
                    </Col>
                    <Col flex="auto" style={colStyle}>
                        <Card
                            style={{ width: 320 }}
                            cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                            actions={[<SettingOutlined key="setting" />, <EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />]}
                        >
                            <Meta title="Card title" description="This is the description" />
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Tes;
