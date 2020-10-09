import React from "react";
import Axios from "axios";
import { Table, Space, Button, Modal, Input, Row, Col } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  EyeTwoTone,
  PlusOutlined,
  EyeInvisibleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

const { Column } = Table;

class UserTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      visible: false,
      name: '',
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }


  showModal = (title) => {
    this.setState({
      visible: true,
      name: '',
      email: '',
      password: '',
    });
  };

  hideModal = (kondisi) => {

    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    }

    if (kondisi == "simpan") {
      Axios.post('http://localhost:6600/admin/user/create', data).then((res) => {
      });
    }

    this.setState({
      visible: false,
    });

  };

  handleChange(changeObject) {
    this.setState(changeObject)
    // alert(this.state.email);
  }

  componentDidMount() {
    Axios.get('http://localhost:6600/admin/user').then((res) => {
      const users = res.data.response;
      this.setState({ users });
    });
  }

  render() {

    function confirm() {
      Modal.confirm({
        title: "Confirm",
        icon: <ExclamationCircleOutlined />,
        content: "Bla bla ...",
        okText: "YES",
        cancelText: "NO",
      });
    }

    return (
      <div>
        <Row justify="space-between" gutter={[8, 8]}>
          <Col span={12}>
            <Button onClick={this.showModal} type="primary" style={{ marginBottom: 10 }}>
              <PlusOutlined />
            </Button>
            {/* <Button onClick={this.showModal} type="primary" style={{ marginBottom: 10, marginLeft: 10 }}>
              <PlusOutlined />
            </Button> */}
          </Col>
          <Col span={8}>
            <Input style={{ marginBottom: 10 }} placeholder="Name" />
          </Col>
        </Row>
        <Row justify="space-between">
          <Col span={8}>
          </Col>
          <Col span={1}>

          </Col>
          <Table dataSource={this.state.users} pagination={{ pageSize: 10 }} scroll={{ y: 300 }}>
            <Column title="Name" dataIndex="name" key="name" />
            <Column title="Email" dataIndex="email" key="email" />
            <Column
              title="Action"
              key="action"
              render={(text, record) => (
                <Space size="middle">
                  <Button type="danger" onClick={confirm}>
                    <DeleteOutlined />
                  </Button>
                  <Button type="primary" onClick={this.showModal}>
                    <EditOutlined />
                  </Button>
                  <Button type="primary">
                    {/* <EditOutlined /> */}
                  </Button>
                  {/* <a>Edit {record.name}</a> */}
                </Space>
              )}
            />
          </Table>
        </Row>

        <Modal title="Tambah User"
          visible={this.state.visible}
          onOk={() => this.hideModal('simpan')}
          onCancel={() => this.hideModal('batal')}
          okText="Simpan"
          cancelText="Batal" >
          <Input style={{ marginBottom: 10 }} onChange={(e) => this.handleChange({ name: e.target.value })} value={this.state.name} placeholder="Name" />
          <Input style={{ marginBottom: 10 }} onChange={(e) => this.handleChange({ email: e.target.value })} value={this.state.email} placeholder="Email" />
          <Input.Password
            placeholder="Password"
            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            onChange={(e) => this.handleChange({ password: e.target.value })}
            value={this.state.password}
          />
        </Modal>
      </div >
    );
  }
}

export default UserTable;
