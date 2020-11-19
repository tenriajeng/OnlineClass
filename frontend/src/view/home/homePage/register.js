import React from "react";
import { Form, Input, Button, Row, Col } from "antd";
import Axios from "axios";

const onFinish = (values) => {
    console.log("Received values of form: ", values);
};

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            visible: false,
            name: "",
            email: "",
            password: "",
        };
    }

    onOk = () => {
        this.setState({
            visibleUpdate: true,
            name: data.name,
            email: data.email,
            password: data.password,
        });

        const data = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
        };

        Axios.post("http://localhost:6600/register", data).then((res) => {
            const data = res.data.response[0];
            console.log("response", data);

            console.log("response", data);
        });
    };

    render() {
        return (
            <Row justify="center" style={{ marginLeft: 10, marginRight: 10 }} align="bottom">
                <Col xl={5}>
                    <center>
                        <br></br>
                        <h3>REGISTER</h3>
                    </center>
                    <Form name="register">
                        <Form.Item
                            name="name"
                            label="Name"
                            value={this.state.name}
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your Name!",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            label="E-mail"
                            value={this.state.email}
                            rules={[
                                {
                                    type: "email",
                                    message: "The input is not valid E-mail!",
                                },
                                {
                                    required: true,
                                    message: "Please input your E-mail!",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            label="Password"
                            value={this.state.password}
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your password!",
                                },
                            ]}
                            hasFeedback
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            name="confirm"
                            label="Confirm Password"
                            value={this.state.password}
                            dependencies={["password"]}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: "Please confirm your password!",
                                },
                                ({ getFieldValue }) => ({
                                    validator(rule, value) {
                                        if (!value || getFieldValue("password") === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject("The two passwords that you entered do not match!");
                                    },
                                }),
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="register-form-button" onClick={() => this.onOk()}>
                                Register
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        );
    }
}
export default Register;
