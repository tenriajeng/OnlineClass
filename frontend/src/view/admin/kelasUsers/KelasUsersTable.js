import React, {useState} from "react";
import Axios from "axios";
import swal from "sweetalert";
import { Table, Space, Button, Modal, Input, Upload, message, Image, Select } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  EyeTwoTone,
  PlusOutlined,
  EyeInvisibleOutlined,
  ExclamationCircleOutlined,
  UploadOutlined,
} from "@ant-design/icons";

const { Column } = Table;

const { Option } = Select;

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}


class KelasTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        kelasUser: [],
        dataUser: [],
        dataKelas: [],
        visible: false,
        visibleHapus: false,
        user_id: "",
        kelas_id: "",
        id: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

    onChangeUser = (value) => {
        this.setState({
            user_id : value,
        });
    }
  
    onChangeKelas = (value) => {
      this.setState({
          kelas_id : value,
      });
    }

  showModal = () => {
    this.setState({
      visible: true,
      user_id: "",
      kelas_id: "",
      id: "",
    });
  };

  showModalUpdate = (id) => {
    this.setState({
      id: id,
      visible: true,
    });
    this.getOnedata(id);
  };

  showModalHapus = (id) => {
    this.setState({
      visibleHapus: true,
      user_id: id,

    });
  };

    hapusKelas = () => {
        Axios.put(`http://localhost:6600/admin/kelas-user/delete/${this.state.id}`).then((res) => {
            this.successMessage("dihapus!");
            this.getDataKelasUser();
        });
        this.setState({
            visibleHapus: false,
        });
    };

successMessage(message) {
    swal({
        title: "Selamat",
        text: "Berhasil " + message,
        icon: "success",
        button: "Tutup",
    });
}
  
    hideModal = (kondisi) => {
    const data = {
      user_id: this.state.user_id,
      kelas_id: this.state.kelas_id,

    };

    if (kondisi === "simpan") {
      Axios.post("http://localhost:6600/admin/kelas-user/create", data).then(
        (res) => {
        this.successMessage("ditambahkan!");
        this.getDataKelasUser();
        }
      );
    }

    this.setState({
      visible: false,
      visibleHapus: false,
    });
  };

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  getDataKelasUser(){
    Axios.get("http://localhost:6600/admin/kelas-user").then((res) => {
      const kelasUser = res.data.response;
      this.setState({ kelasUser });
    });
  }

  getDataUser(){
    Axios.get("http://localhost:6600/admin/user").then((res) => {
      const dataUser = res.data.response;
      this.setState({ dataUser });
    });
  }

  getDataKelas(){
    Axios.get("http://localhost:6600/admin/kelas").then((res) => {
      const dataKelas = res.data.response;
      this.setState({ dataKelas });
    });
  }

  getOnedata(id) {
    console.log("apa di", this.state.id);

    Axios.get(`http://localhost:6600/admin/kelas-user/detail/${id}`).then((res) => {
      this.setState({
        user_id: res.data.response.user_id,
        kelas_id: res.data.response.kelas_id,
      });
      console.log(res.data.response);
    });
  }

  componentDidMount() {
    this.getDataUser();
    this.getDataKelas();
    this.getDataKelasUser();
  }

  render() {
    return (
      <div>
        <Button
          onClick={this.showModal}
          type="primary"
          style={{ marginBottom: 16 }}
        >
          <PlusOutlined />
        </Button>
        <Table
          dataSource={this.state.kelasUser}
          pagination={{ pageSize: 10 }}
          scroll={{ y: 300 }}
        >
          <Column title="User_Id" dataIndex="user_id" key="user_id" />
          <Column title="Kelas_Id" dataIndex="kelas_id" key="kelas_id" />
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
        <Modal
          title="Tambah User-Kelas"
          visible={this.state.visible}
          onOk={() => this.hideModal("simpan")}
          onCancel={() => this.hideModal("batal")}
          okText="Simpan"
          cancelText="Batal"
        >
            <Select
                showSearch
                style={{ width: 300 }}
                placeholder="Select User"
                optionFilterProp="children"
                onChange={this.onChangeUser}
                onFocus={onFocus}
                onSearch={onSearch}
                filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
            >
            {
                this.state.dataUser.map((user) => (
                        <Option key={user.id}>{user.name}</Option>
                    
                ))
            }
            </Select>

            <Select
                showSearch
                style={{ width: 300 }}
                placeholder="Select Kelas"
                optionFilterProp="children"
                onChange={this.onChangeKelas}
                onFocus={onFocus}
                onSearch={onSearch}
                filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
            >
            {
                this.state.dataKelas.map((kelas) => (
                        <Option key={kelas.id}>{kelas.nama}</Option>
                    
                ))
            }
            </Select>

        </Modal>

        <Modal
          title="Hapus Kelas"
          visible={this.state.visibleHapus}
          onOk={this.hapusKelas}
          onCancel={() => this.hideModal("batal")}
          okText="Hapus"
          cancelText="Batal"
        >
          <h3>Data tidak dapat dikembalikan lagi</h3>
        </Modal>

      </div>
    );
  }
}

export default KelasTable