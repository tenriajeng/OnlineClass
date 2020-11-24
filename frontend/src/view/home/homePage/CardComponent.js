import { ShoppingCartOutlined } from "@ant-design/icons";
import { Card, Col, Row, Image } from "antd";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CardComponent() {
    const { Meta } = Card;
    const [data, setData] = useState([]);
    const routeCourses = "/courses/";

    const getData = async () => {
        try {
            let res = await Axios.get("http://localhost:6600/admin/kelas");
            setData(res.data.response);
            console.log("ini mi datanya : ", res);
        } catch (error) {
            console.log(error.message);
        }
    };

    const clickCard = (e) => {
        // alert(e);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div style={{ marginTop: 40, padding: "0.5rem calc((100vw - 1200px) / 2)" }}>
            <div style={{ textAlign: "center" }}>
                <h1>New Courses</h1>
            </div>
            <Row style={{ margin: "24px 16px 0" }} gutter={[16, 16]}>
                {data.map((val) => {
                    return (
                        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                            <Link to={routeCourses + val.id}>
                                <Card
                                    onClick={() => clickCard(val.nama)}
                                    hoverable
                                    cover={<img alt="example" src={val.foto} />}
                                    actions={[
                                        <Link to={`/courses/beli`}>
                                            <ShoppingCartOutlined style={{ fontSize: "26px", color: "#08c" }} />
                                        </Link>,
                                    ]}
                                >
                                    <Meta title={val.nama} description="This is the description" />
                                </Card>
                            </Link>
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
}

export default CardComponent;
