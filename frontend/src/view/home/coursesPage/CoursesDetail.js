import { Avatar, Card, Col, Image, Row, Skeleton, Space } from "antd";
import { List } from "antd/lib/form/Form";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function CoursesDetail() {
	const [courses, setCourses] = useState([]);
	const [dataclass, setDataClass] = useState([]);
	let { indetifier } = useParams();
	const { Meta } = Card;

	const getCourses = async () => {
		try {
			let res = await Axios.get(`http://localhost:6600/readmore/detail/${indetifier}`);
			setCourses(res.data.response);
		} catch (error) {
			console.log(error.message);
		}
	};

	const getDataClass = async () => {
		try {
			let res = await Axios.get(`http://localhost:6600/admin/kelas/detail/${indetifier}`);
			setDataClass(res.data.response);
		} catch (error) {
			console.log(error.message);
		}
	};

	useEffect(() => {
		getCourses();
		getDataClass();
	}, [indetifier]);

	console.log("data materi : ", courses);
	console.log("data kelas : ", dataclass);

	return (
		<div className="site-layout-background" style={{ padding: 24, minHeight: 480 }}>
			<Row style={{ margin: "10px 10px 0" }} gutter={[16, 16]}>
				<Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
					<h1>judul</h1>
				</Col>
				<Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
					{/* <Card hoverable cover={<img src="https://placekitten.com/g/300/200" />}></Card> */}
					<Image width={200} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
				</Col>
			</Row>
		</div>
	);
}

export default CoursesDetail;
