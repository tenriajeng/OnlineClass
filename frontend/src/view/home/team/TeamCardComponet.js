import { Card, Col, PageHeader, Row } from "antd";
import React from "react";

function TeamCardComponet(props) {
	const { Meta } = Card;

	return (
		<div>
			<PageHeader className="site-page-header" title="Title" subTitle="This is a subtitle" />
			<Row style={{ margin: "24px 16px 0" }} gutter={[16, 16]}>
				<Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
					<Card hoverable cover={<img src="https://placekitten.com/g/300/200" />}>
						<Meta title="ito" />
					</Card>
				</Col>
			</Row>
		</div>
	);
}

export default TeamCardComponet;
