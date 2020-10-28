import { Carousel } from "antd";
import React from "react";

function CarouselComponent(props) {
	return (
		<div>
			<Carousel autoplay>
				<div>
					<img src="https://placekitten.com/1500/500" />
				</div>
				<div>
					<img src="https://placekitten.com/g/1500/500" />
				</div>
				<div>
					<img src="https://placekitten.com/1500/500" />
				</div>
				<div>
					<img src="https://placekitten.com/g/1500/500" />
				</div>
			</Carousel>
		</div>
	);
}

export default CarouselComponent;
