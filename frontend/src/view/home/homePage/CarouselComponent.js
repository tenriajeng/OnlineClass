import { Carousel } from "antd";
import React from "react";

function CarouselComponent(props) {
	return (
		<Carousel autoplay>
			<div>
				<img src="https://placekitten.com/1500/500" alt="" />
			</div>
			<div>
				<img src="https://placekitten.com/g/1500/500" alt="" />
			</div>
			<div>
				<img src="https://placekitten.com/1500/500" alt="" />
			</div>
			<div>
				<img src="https://placekitten.com/g/1500/500" alt="" />
			</div>
		</Carousel>
	);
}

export default CarouselComponent;
