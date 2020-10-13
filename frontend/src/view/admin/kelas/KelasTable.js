import React, {useState} from "react";
import Axios from "axios";
import swal from "sweetalert";
import { Table, Space, Button, Modal, Input, Upload, message, Image } from "antd";
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

const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

class KelasTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kelas: [],
      visible: false,
      visibleHapus: false,
      nama: "",
      limit: "",
      aktif: "",
      harga: "",
      id: "",
      foto:""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  showModal = () => {
    this.setState({
      visible: true,
      nama: "",
      limit: "",
      aktif: "",
      harga: "",
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
      id: id,
    });
  };

  hapusKelas = () => {
    Axios.put(`http://localhost:6600/admin/kelas/delete/${this.state.id}`).then((res) => {
        this.successMessage("dihapus!");
        this.getAllData();
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
      nama: this.state.nama,
      limit: this.state.limit,
      aktif: this.state.aktif,
      harga: this.state.harga,
      foto: this.state.foto,
    };

    if (kondisi === "simpan") {
      Axios.post("http://localhost:6600/admin/kelas/create", data).then(
        (res) => {
        this.successMessage("ditambahkan!");
        this.getAllData();
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

  getAllData(){
    Axios.get("http://localhost:6600/admin/kelas").then((res) => {
      const kelas = res.data.response;
      this.setState({ kelas });
    });
  }


  getOnedata(id) {
    console.log("apa di", this.state.id);

    Axios.get(`http://localhost:6600/admin/kelas/detail/${id}`).then((res) => {
      this.setState({
        nama: res.data.response.nama,
        limit: res.data.response.limit,
        aktif: res.data.response.aktif,
        harga: res.data.response.harga,
      });
      console.log(res.data.response);
    });
  }

  componentDidMount() {
    this.getAllData();
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
          dataSource={this.state.kelas}
          pagination={{ pageSize: 10 }}
          scroll={{ y: 300 }}
        >
          <Column title="Nama" dataIndex="nama" key="nama" />
          <Column title="Limit" dataIndex="limit" key="limit" />
          <Column title="Aktif" dataIndex="aktif" key="aktif" />
          <Column title="Harga" dataIndex="harga" key="harga" />
          <Column title="Foto" dataIndex="foto" key="foto" render={(text, record) => (
              <Space size="middle">
                <Image
                  width={60}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                 />
              </Space>
          )}/>

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
          title="Tambah Kelas"
          visible={this.state.visible}
          onOk={() => this.hideModal("simpan")}
          onCancel={() => this.hideModal("batal")}
          okText="Simpan"
          cancelText="Batal"
        >
          <Input style={{ marginBottom: 10 }} name="nama" onChange={this.handleChange} value={this.state.nama} placeholder="Name" />
          <Input style={{ marginBottom: 10 }} name="limit" onChange={this.handleChange} value={this.state.limit} placeholder="Limit" />
          <Input style={{ marginBottom: 10 }} name="aktif" onChange={this.handleChange} value={this.state.aktif} placeholder="Aktif" />
          <Input style={{ marginBottom: 10 }} name="harga" onChange={this.handleChange} value={this.state.harga} placeholder="Harga" />
          <Upload {...props}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
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
