import React, { useEffect, useState } from "react";
import { Col, Drawer, Row } from "antd";
import { useRecoilState } from "recoil";
import { CartAtom, CartCountAtom } from "./CartAtom";
import Axios from "axios";
import { URLAPI } from "../ApiUrl";

function DrawerCartComponent(props) {
	const [cartAtom, setCartAtom] = useRecoilState(CartAtom);
	const [cartCountAtom, setCartCountAtom] = useRecoilState(CartCountAtom);
	const [data, setData] = useState([]);

	const getData = async () => {
		try {
			let res = await Axios.get(`${URLAPI}/cart/1`);
			const resData = res.data.response;
			setData(resData);
			setCartCountAtom(resData.length);
		} catch (error) {
			console.log(error.message);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div>
			<Drawer title="Cart" width={500} closable={false} onClose={() => setCartAtom({ onClose: false })} visible={cartAtom.visible}>
				<Row style={{ marginLeft: 24 }}>
					<Col span={12}>
						<h4>Courses</h4>
					</Col>
					<Col span={12}>
						<h4>Price</h4>
					</Col>
				</Row>
				{data.map((val) => {
					return (
						<Row style={{ marginLeft: 24 }}>
							<Col span={12}>
								<p>{val.nama}</p>
							</Col>
							<Col span={12}>
								<p>{val.harga}</p>
							</Col>
						</Row>
					);
				})}
			</Drawer>
		</div>
	);
}

export default DrawerCartComponent;
