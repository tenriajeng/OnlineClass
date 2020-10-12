import React from "react";
import { Table, Space, Button, Modal, Input, Row, Col, Card } from "antd";

const { Column } = Table;

class Tes extends React.Component {

  render() {

    const cardStyle ={marginRight:3,marginLeft:3};
    const colStyle = {marginTop:10};
    return (
        <div>
            <Row>
                <Col flex="auto" style={colStyle}>
                    <Card title="Card title" bordered={true} style={cardStyle}>
                        <Input placeholder="Basic usage" />
                    </Card>
                </Col>
                <Col flex="auto" style={colStyle}>
                    <Card title="Card title" bordered={true} style={cardStyle}>
                        <Input placeholder="Basic usage" />
                    </Card>
                </Col>
                <Col flex="auto" style={colStyle}>
                    <Card title="Card title" bordered={true} style={cardStyle}>
                        <Input placeholder="Basic usage" />
                    </Card>
                </Col>
                <Col flex="auto" style={colStyle}>
                    <Card title="Card title" bordered={true} style={cardStyle}>
                        <Input placeholder="Basic usage" />
                    </Card>
                </Col>
            </Row>
        </div>
    );
  }
}

export default Tes;
