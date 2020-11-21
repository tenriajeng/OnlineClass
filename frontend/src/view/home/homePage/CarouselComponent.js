import { Carousel } from "antd";
import React from "react";

function CarouselComponent(props) {
    const contentStyle = {
        height: "600px",
        color: "#fff",
        lineHeight: "600px",
        textAlign: "center",
        background: "#342ead",
    };
    return (
        <Carousel dotPosition={"left"} autoplay>
            <div>
                <h3 style={contentStyle}>1</h3>
            </div>
        </Carousel>
    );
}

export default CarouselComponent;
