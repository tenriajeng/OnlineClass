import { Card, Col, Row } from "antd";
import React from "react";
import CardComponent from "./CardComponent";
import CarouselComponent from "./CarouselComponent";
import EventComponent from "./EventComponent";

function HomePage(props) {
    return (
        <div style={{ background: "#fafafa" }}>
            <CarouselComponent />
            <CardComponent />
            <EventComponent />
        </div>
    );
}

export default HomePage;
