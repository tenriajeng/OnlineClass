import React from "react";
import { Table, Space, Button, Modal, Input, Row, Col, Card } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  EyeTwoTone,
  PlusOutlined,
  EyeInvisibleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import Meta from "antd/lib/card/Meta";

const { Column } = Table;

class Tes extends React.Component {

  render() {

    return (
        <div>
            <Row>
                <Col flex="auto" style={{marginTop:10}}>
                    <Card title="Card title" bordered={true} style={{marginRight:3,marginLeft:3}}>
                        Card content
                    </Card>
                </Col>
                <Col flex="auto" style={{marginTop:10}}>
                    <Card title="Card title" bordered={true} style={{marginRight:3,marginLeft:3}}>
                        Card content
                    </Card>
                </Col>
                <Col flex="auto" style={{marginTop:10}}>
                    <Card title="Card title" bordered={true} style={{marginRight:3,marginLeft:3}}>
                        Card content
                    </Card>
                </Col>
                <Col flex="auto" style={{marginTop:10}}>
                    <Card title="Card title" bordered={true} style={{marginRight:3,marginLeft:3}}>
                        Card content
                    </Card>
                </Col>
            </Row>
        </div>
    );
  }
}

export default Tes;
