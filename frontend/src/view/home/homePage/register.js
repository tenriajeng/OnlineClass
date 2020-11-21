import React from "react";
import { Form, Input, Button, Row, Col } from "antd";
import Axios from "axios";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
        };
        // this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
        // alert("handle : ", e.target.name);
    };

    submitHandler = (e) => {
        alert("lol");
        // e.preventDefault();
        console.log("lol : ", this.state.name);

        const data = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
        };
        Axios.post("http://127.0.0.1:6600/register", data)
            .then((response) => {
                console.log("good : ", response);
            })
            .catch((error) => {
                console.log("error : ", error);
            });
    };

    render() {
        const { name, email, password } = this.state;

        return (
            <Row justify="center" style={{ marginLeft: 10, marginRight: 10 }} align="bottom">
                <Col xl={5}>
                    <center>
                        <br></br>
                        <h3>REGISTER</h3>
                    </center>
                    <Form name="register">
                        <Form.Item>
                            <Input
                                name="name"
                                label="Name"
                                value={name}
                                onChange={this.changeHandler}
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your Name!",
                                    },
                                ]}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                name="email"
                                label="E-mail"
                                value={email}
                                onChange={this.changeHandler}
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
                            />
                        </Form.Item>

                        <Form.Item>
                            <Input.Password
                                name="password"
                                label="Password"
                                value={password}
                                onChange={this.changeHandler}
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your password!",
                                    },
                                ]}
                                hasFeedback
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="register-form-button"
                                onClick={() => this.submitHandler()}
                                // onSubmit={this.submitHandler}
                            >
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
