import React, { useState } from "react";
import Axios from "axios";
import swal from "sweetalert";
import { Table, Space, Button, Modal, Input, Upload, message, Image, InputNumber, Checkbox } from "antd";
import { DeleteOutlined, EditOutlined, EyeTwoTone, PlusOutlined, EyeInvisibleOutlined, ExclamationCircleOutlined, UploadOutlined } from "@ant-design/icons";

const { Column } = Table;

const props = {
	name: "file",
	action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
	headers: {
		authorization: "authorization-text",
	},
	onChange(info) {
		if (info.file.status !== "uploading") {
			console.log(info.file, info.fileList);
		}
		if (info.file.status === "done") {
			message.success(`${info.file.name} file uploaded successfully`);
		} else if (info.file.status === "error") {
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
			visibleUpdate: false,
			nama: "",
			limit: "",
			aktif: "",
			harga: "",
			foto: "",
			id: 0,
		};
		this.handleChange = this.handleChange.bind(this);
		this.limitChange = this.limitChange.bind(this);
		this.hargaChange = this.hargaChange.bind(this);
	}

	onChangeCheckbox = (e) => {
		this.setState({
			aktif: e.target.checked,
		});
		console.log(`checked = ${e.target.checked}`);
	};

	showModal = () => {
		this.setState({
			visible: true,
			nama: "",
			limit: "",
			aktif: "",
			harga: "",
		});
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

	showModalUpdate = (id) => {
		this.getOnedata(id);
		this.setState({
			visibleUpdate: true,
		});
	};

	updateKelas = () => {
		const data = {
			nama: this.state.nama,
			limit: this.state.limit,
			aktif: this.state.aktif,
			harga: this.state.harga,
			foto: this.state.foto,
		};

		Axios.put(`http://localhost:6600/admin/kelas/${this.state.id}`, data).then((res) => {
			console.log(res.data);
			// this.getAlldata();
		});
		this.successMessage("diubah!");
		this.setState({
			visibleUpdate: false,
		});
		Axios.get("http://localhost:6600/admin/kelas").then((res) => {
			const kelas = res.data.response;
			this.setState({ kelas });
			//   console.log(res.data);
		});
		console.log("update data : ", data);
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
			Axios.post("http://localhost:6600/admin/kelas/create", data).then((res) => {
				this.successMessage("ditambahkan!");
			});
		}
		this.setState({
			visible: false,
			visibleHapus: false,
			visibleUpdate: false,
		});
	};

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}

	limitChange(value) {
		this.setState({
			limit: value,
		});
	}

	hargaChange(value) {
		this.setState({
			harga: value,
		});
	}

	getAllData() {
		Axios.get("http://localhost:6600/admin/kelas").then((res) => {
			const kelas = res.data.response;
			this.setState({ kelas });
			//   console.log(res.data);
		});
	}

	getOnedata(id) {
		console.log("apa di", this.state.id);

		try {
			Axios.get(`http://localhost:6600/admin/kelas/detail/${id}`).then((res) => {
				const data = res.data.response[0];
				this.setState({
					visibleUpdate: true,
					id: id,
					nama: data.nama,
					limit: data.limit,
					aktif: data.aktif,
					harga: data.harga,
				});
				console.log("response", data);
			});
		} catch (error) {
			console.log("error ", error);
		}
	}

	componentDidMount() {
		this.getAllData();
	}

	render() {
		return (
			<div>
				<Button onClick={this.showModal} type="primary" style={{ marginBottom: 16 }}>
					<PlusOutlined />
				</Button>
				<Table dataSource={this.state.kelas} pagination={{ pageSize: 10 }} scroll={{ x: 1000, y: 300 }}>
					<Column title="Nama" width="400" fixed="left" dataIndex="nama" key="nama" />
					<Column title="Limit" dataIndex="limit" key="limit" />
					<Column title="Aktif" dataIndex="aktif" key="aktif" />
					<Column title="Harga" dataIndex="harga" key="harga" />
					<Column title="Updated At" dataIndex="updated_at" key="updated_at" />
					<Column
						title="Foto"
						dataIndex="foto"
						key="foto"
						render={(text, record) => (
							<Space size="middle">
								<Image width={60} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
							</Space>
						)}
					/>

					<Column
						title="Action"
						key="action"
						render={(text, record) => (
							<Space size="middle">
								<Button type="danger" onClick={() => this.showModalHapus(record.id)}>
									<DeleteOutlined />
								</Button>
								<Button type="primary" onClick={() => this.showModalUpdate(record.id)}>
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
					<InputNumber
						type="number"
						min={1}
						max={100}
						name="limit"
						placeholder="Limit"
						style={{ marginBottom: 10, width: 472 }}
						onChange={this.limitChange}
						value={this.state.limit}
					/>
					<InputNumber
						type="number"
						min={1}
						max={1000000000}
						name="harga"
						placeholder="Harga"
						style={{ marginBottom: 10, width: 472 }}
						onChange={this.hargaChange}
						value={this.state.harga}
					/>
					<Checkbox onChange={this.onChangeCheckbox}>Aktif</Checkbox>

					<Upload {...props}>
						<Button icon={<UploadOutlined />}>Click to Upload</Button>
					</Upload>
				</Modal>

				<Modal title="Hapus Kelas" visible={this.state.visibleHapus} onOk={this.hapusKelas} onCancel={() => this.hideModal("batal")} okText="Hapus" cancelText="Batal">
					<h3>Data tidak dapat dikembalikan lagi</h3>
				</Modal>

				<Modal
					title="Update Kelas"
					visible={this.state.visibleUpdate}
					onOk={() => this.updateKelas()}
					onCancel={() => this.hideModal("batal")}
					okText="Simpan"
					cancelText="Batal"
				>
					<Input style={{ marginBottom: 10 }} name="nama" onChange={this.handleChange} defaultValue={this.state.nama} value={this.state.nama} placeholder="Name" />

					<InputNumber
						type="number"
						min={1}
						max={100}
						name="limit"
						placeholder="Limit"
						style={{ marginBottom: 10, width: 472 }}
						onChange={this.limitChange}
						value={this.state.limit}
					/>

					<InputNumber
						type="number"
						min={1}
						max={1000000000}
						name="harga"
						placeholder="Harga"
						style={{ marginBottom: 10, width: 472 }}
						onChange={this.hargaChange}
						value={this.state.harga}
					/>

					<Checkbox onChange={this.onChangeCheckbox} checked={this.state.aktif}>
						Aktif
					</Checkbox>

					<Upload {...props}>
						<Button icon={<UploadOutlined />}>Click to Upload</Button>
					</Upload>
				</Modal>
			</div>
		);
	}
}

export default KelasTable;
