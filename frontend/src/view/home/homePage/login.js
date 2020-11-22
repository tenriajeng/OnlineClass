import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Row, Col, Space } from "antd";
import Axios from "axios";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    submitHandler = (e) => {
        alert("lol");
        console.log("lol : ", this.state.email);

        const data = {
            email: this.state.email,
            password: this.state.password,
        };
        Axios.post("http://localhost:6600/login/", data)
            .then((response) => {
                console.log("good : ", response);
            })
            .catch((error) => {
                console.log("error : ", error);
            });
    };

    render() {
        const { email, password } = this.state;
        return (
            <Row justify="center" align="bottom">
                <Col xl={5}>
                    <center>
                        <br></br>
                        <h3>SIGN IN</h3>
                    </center>
                    <Form name="normal_login" className="login-form" initialValues={{ remember: true }}>
                        <Form.Item name="email" rules={[{ required: true, message: "Please input your Email!" }]}>
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} type="email" placeholder="Email" name="email" value={email} onChange={this.changeHandler} />
                        </Form.Item>
                        <Form.Item name="password" rules={[{ required: true, message: "Please input your Password!" }]}>
                            <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" name="password" value={password} onChange={this.changeHandler} />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <a className="login-form-forgot" href="">
                                Forgot password
                            </a>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button" onClick={() => this.submitHandler()}>
                                Sig in
                            </Button>
                            Or <a href="">register now!</a>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        );
    }
}
export default Login;
