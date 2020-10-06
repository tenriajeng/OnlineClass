import React from "react";
import Axios from "axios";
import { Table, Space, Button, Modal, Input } from "antd";
import { DeleteOutlined, EditOutlined, EyeTwoTone, PlusOutlined, EyeInvisibleOutlined, ExclamationCircleOutlined, } from "@ant-design/icons";

const { Column } = Table;

class UserTable extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

  state = {
    users: [],
  };

  componentDidMount() {
    Axios.get('http://localhost:6600').then((res) => {
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
        <Button onClick={this.showModal} type="primary" style={{ marginBottom: 16 }}>
          <PlusOutlined />
        </Button>
        <Table dataSource={this.state.users} pagination={{ pageSize: 50 }} scroll={{ y: 240 }}>
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
        <Modal title="Tambah User"
          visible={this.state.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          okText="Simpan"
          cancelText="Batal" >
          <Input style={{ marginBottom: 10 }} placeholder="Name" />
          <Input style={{ marginBottom: 10 }} placeholder="Email" />
          <Input.Password
            placeholder="Password"
            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
        </Modal>
      </div>
    );
  }
}

export default UserTable;
