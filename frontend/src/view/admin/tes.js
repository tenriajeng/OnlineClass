import React from "react";
import { Input, Checkbox, Row, Col, Card, DatePicker } from "antd";
import Meta from "antd/lib/card/Meta";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from "@ant-design/icons";
import moment from "moment";

class Tes extends React.Component {
    render() {
        const style = { background: "#0092ff", padding: "8px 0" };
        const cardStyle = { marginRight: 3, marginLeft: 3 };
        const colStyle = { marginTop: 10 };

        function disabledDate(current) {
            // Can not select days before today and today
            return current && current < moment().endOf("day");
        }

        function onChange(e) {
            console.log(`checked = ${e.target.checked}`);
        }

        return (
            <div>
                <Row justify="right">
                    <Col flex="1 1 240px" style={colStyle}>
                        <Card
                            // className="cardStyle"
                            style={cardStyle}
                            cover={<img alt="example" src="https://placekitten.com/200/200" />}
                            actions={[<SettingOutlined key="setting" />, <EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />]}
                        >
                            <Meta title="Card title" description="This is the description" />
                        </Card>
                    </Col>
                    <Col flex="1 1 240px" style={colStyle}>
                        <Card
                            // className="cardStyle"
                            style={cardStyle}
                            cover={<img alt="example" src="http://placekitten.com/g/200/200" />}
                            actions={[<SettingOutlined key="setting" />, <EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />]}
                        >
                            <Meta title="Card title" description="This is the description" />
                        </Card>
                    </Col>
                    <Col flex="1 1 240px" style={colStyle}>
                        <Card
                            // className="cardStyle"
                            style={cardStyle}
                            cover={<img alt="example" src="http://placekitten.com/200/200" />}
                            actions={[<SettingOutlined key="setting" />, <EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />]}
                        >
                            <Meta title="Card title" description="This is the description" />
                        </Card>
                    </Col>
                    <Col flex="1 1 240px" style={colStyle}>
                        <Card
                            // className="cardStyle"
                            style={cardStyle}
                            cover={<img alt="example" src="http://placekitten.com/g/200/200" />}
                            actions={[<SettingOutlined key="setting" />, <EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />]}
                        >
                            <Meta title="Card title" description="This is the description" />
                        </Card>
                    </Col>
                </Row>

                <Row justify="right" style={{ marginTop: 10 }}>
                    <Col flex="1 1 240px" style={colStyle}>
                        <Checkbox onChange={onChange}>Checkbox</Checkbox>
                        <DatePicker format="YYYY-MM-DD HH:mm:ss" disabledDate={disabledDate} showTime={{ defaultValue: moment("00:00:00", "HH:mm:ss") }} />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Tes;
