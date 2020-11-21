import { Card, Col, Row } from "antd";
import React from "react";
import CardComponent from "./CardComponent";
import CarouselComponent from "./CarouselComponent";

function HomePage(props) {
    return (
        <div>
            <CarouselComponent />
            <CardComponent />
        </div>
    );
}

export default HomePage;
