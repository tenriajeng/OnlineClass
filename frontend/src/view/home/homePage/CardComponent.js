import { Card, Col, Row } from "antd";
import Axios from "axios";
import React, { useEffect, useState } from "react";

function CardComponent(props) {
	const { Meta } = Card;
	const [data, setData] = useState([]);

	const getData = async () => {
		try {
			let res = await Axios.get("http://localhost:6600/admin/kelas");
			setData(res.data.response);
			console.log("ini mi datanya : ", res);
		} catch (error) {
			console.log(error.message);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	// const response = data;
	// console.log("ini mi datanya kah ? : ", response);

	return (
		<div>
			<Row style={{ margin: "24px 16px 0" }} gutter={[16, 16]}>
				{data.map((val) => {
					return (
						<Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
							<Card hoverable cover={<img alt="Modern Design" src="https://placekitten.com/300/200" />}>
								<Meta title={val.nama} />
							</Card>
						</Col>
					);
				})}
			</Row>
		</div>
	);
}

export default CardComponent;
