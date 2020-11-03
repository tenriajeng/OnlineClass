import { Avatar, Card, Col, Image, List, Row, Skeleton, Space } from "antd";
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
				<Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }}>
					<Image preview={false} width="100%" src="https://placekitten.com/g/300/200" />
				</Col>
				<Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }}>
					<List
						itemLayout="horizontal"
						bordered
						dataSource={courses}
						renderItem={(item) => (
							<List.Item
								actions={[
									<Link to={`/courses/${item.nama_kelas}/${item.materi_id}`} key="list-loadmore-more">
										Read
									</Link>,
								]}
							>
								<List.Item.Meta title={<Link to={`/courses/${item.nama_kelas}/${item.materi_id}`}>{item.nama_materi}</Link>} />
							</List.Item>
						)}
					/>
				</Col>
			</Row>
		</div>
	);
}

export default CoursesDetail;
