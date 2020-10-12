import React from "react";
import Axios from "axios";
import swal from "sweetalert";
import { Table, Space, Button, Modal, Input, Row, Col } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  EyeTwoTone,
  PlusOutlined,
  EyeInvisibleOutlined,
} from "@ant-design/icons";

const { Column } = Table;

class UserTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      visible: false,
      visibleHapus: false,
      name: "",
      email: "",
      password: "",
      userId: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  showModal = () => {
    this.setState({
      visible: true,
      name: "",
      email: "",
      password: "",
    });
  };

  showModalUpdate = (id) => {
    this.setState({
      userId: id,
      visible: true,
    });
    this.getOnedata(id);
  };

  showModalHapus = (id) => {
    this.setState({
      visibleHapus: true,
      userId: id,
    });
  };

  hapusUser = () => {
    Axios.put(
      `http://localhost:6600/admin/user/delete/${this.state.userId}`
    ).then((res) => {
      this.successMessage('dihapus!');
      this.getdata();
    });
    this.setState({
      visibleHapus: false,
    });
    
  };

  successMessage(message){
    swal({
      title: "Selamat",
      text: "Berhasil "+message,
      icon: "success",
      button: "Tutup",
    });
  }

  hideModal = (kondisi) => {
    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };

    if (kondisi === "simpan") {
      Axios.post("http://localhost:6600/admin/user/create", data).then(
        (res) => {
          this.successMessage('ditambahkan!');
          this.getdata();
        }
      );
    }

    this.setState({
      visible: false,
      visibleHapus: false,
    });
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  getdata() {
    Axios.get("http://localhost:6600/admin/user").then((res) => {
      const users = res.data.response;
      this.setState({ users });
    });
  }

  getOnedata(id) {
    console.log("apa di", this.state.userId);

    Axios.get(`http://localhost:6600/admin/user/detail/${id}`).then((res) => {
      const users = res.data.response;
      this.setState({
        name: res.data.response.name,
        email: res.data.response.email,
        password: res.data.response.password,
      });
      console.log(res.data.response);
    });
  }

  componentDidMount() {
    this.getdata();
  }

  render() {
    return (
      <div>
        <Row justify="space-between" gutter={[8, 8]}>
          <Col span={12}>
            <Button
              onClick={this.showModal}
              type="primary"
              style={{ marginBottom: 10 }}
            >
              <PlusOutlined />
            </Button>
          </Col>
          <Col span={8}>
            <Input style={{ marginBottom: 10 }} placeholder="Name" />
          </Col>
        </Row>
        <Row justify="space-between">
          <Col span={8}></Col>
          <Col span={1}></Col>
          <Table
            dataSource={this.state.users}
            pagination={{ pageSize: 10 }}
            scroll={{ y: 300 }}
          >
            <Column title="Name" dataIndex="name" key="name" />
            <Column title="Email" dataIndex="email" key="email" />
            <Column
              title="Action"
              key="action"
              render={(text, record) => (
                <Space size="middle">
                  <Button
                    type="danger"
                    onClick={() => this.showModalHapus(record.id)}
                  >
                    <DeleteOutlined />
                  </Button>
                  <Button
                    type="primary"
                    onClick={() => this.showModalUpdate(record.id)}
                  >
                    <EditOutlined />
                  </Button>
                </Space>
              )}
            />
          </Table>
        </Row>

        <Modal
          title="Hapus User"
          visible={this.state.visibleHapus}
          onOk={this.hapusUser}
          onCancel={() => this.hideModal("batal")}
          okText="Hapus"
          cancelText="Batal"
        >
          <h3>Data tidak dapat dikembalikan lagi</h3>
        </Modal>

        <Modal
          title="Tambah User"
          visible={this.state.visible}
          onOk={() => this.hideModal("simpan")}
          onCancel={() => this.hideModal("batal")}
          okText="Simpan"
          cancelText="Batal"
        >
          <Input
            name="name"
            style={{ marginBottom: 10 }}
            onChange={this.handleChange}
            value={this.state.name}
            placeholder="Name"
          />
          <Input
            name="email"
            style={{ marginBottom: 10 }}
            onChange={this.handleChange}
            value={this.state.email}
            placeholder="Email"
          />
          <Input.Password
            name="password"
            placeholder="Password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            onChange={this.handleChange}
            value={this.state.password}
          />
        </Modal>
      </div>
    );
  }
}

export default UserTable;
