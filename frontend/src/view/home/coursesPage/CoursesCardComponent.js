import { Card, Col, Row, Image, Avatar } from "antd";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartOutlined, EditOutlined, EllipsisOutlined } from "@ant-design/icons";

function CoursesCardComponent() {
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
        <div style={{ padding: "0.5rem calc((100vw - 1200px) / 2)" }}>
            <Row style={{ margin: "10px 10px 0" }} gutter={[16, 16]}>
                {data.map((val) => {
                    return (
                        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                            <Link to={`/courses/${val.id}`}>
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

export default CoursesCardComponent;
