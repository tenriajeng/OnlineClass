import { Button, PageHeader } from "antd";
import React from "react";

function HeaderPageComponent(props) {
	return (
		<div>
			<PageHeader
				className="site-page-header"
				title="Title"
				subTitle="This is a subtitle"
				extra={[
					<Button key="3">Operation</Button>,
					<Button key="2">Operation</Button>,
					<Button key="1" type="primary">
						Primary
					</Button>,
				]}
			/>
		</div>
	);
}

export default HeaderPageComponent;
