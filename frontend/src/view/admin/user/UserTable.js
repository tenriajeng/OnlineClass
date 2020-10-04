import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
import Axios from "axios";
import { Table, Space, Button, Modal } from "antd";
import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined, } from "@ant-design/icons";

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
    Axios.get(`http://localhost:6600`).then((res) => {
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
        <Table dataSource={this.state.users}>
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
                  Modal
                </Button>
                <Button type="primary">
                  <EditOutlined />
                </Button>
                {/* <a>Edit {record.name}</a> */}
              </Space>
            )}
          />
        </Table>
        <Modal title="Modal"
          visible={this.state.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          okText="YES"
          cancelText="NO" >
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
        </Modal>
      </div>
    );
  }
}
export default UserTable;
