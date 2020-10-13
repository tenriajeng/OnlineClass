import React from "react";
import { Checkbox, Row, Col, DatePicker, Select, Upload } from "antd";
import moment from "moment";
import { Option } from "antd/lib/mentions";
import Axios from "axios";
import CardComponet from "./cardComponent";
import imgCropComponent from "./imgCropComponent";

class Tes extends React.Component {
    state = {
        users: [],
        fileList: [],
    };

    componentDidMount() {
        this.getdata();
    }

    getdata() {
        Axios.get("http://localhost:6600/admin/user").then((res) => {
            const users = res.data.response;
            this.setState({ users });
        });
    }

    render() {
        const colStyle = { marginTop: 10 };

        function disabledDate(current) {
            // Can not select days before today and today
            return current && current < moment().endOf("day");
        }

        function onChangeCheckbox(e) {
            console.log(`checked = ${e.target.checked}`);
        }

        function onChange(value) {
            console.log(`selected ${value}`);
        }

        function onBlur() {
            console.log("blur");
        }

        function onFocus() {
            console.log("focus");
        }

        function onSearch(val) {
            console.log("search:", val);
        }

        return (
            <div>
                <CardComponet />
                <Row justify="right" style={{ marginTop: 10 }}>
                    <Col flex="1 1 240px" style={colStyle}>
                        <Checkbox onChange={onChangeCheckbox}>Checkbox</Checkbox>
                        <DatePicker format="YYYY-MM-DD HH:mm:ss" disabledDate={disabledDate} showTime={{ defaultValue: moment("00:00:00", "HH:mm:ss") }} />

                        <Select showSearch style={{ width: 200 }} placeholder="Select a person" optionFilterProp="children" onChange={onChange} onFocus={onFocus} onBlur={onBlur} onSearch={onSearch}>
                            {this.state.users.map((d) => (
                                <Option key={d.id}>{d.name}</Option>
                            ))}
                        </Select>
                    </Col>
                    <imgCropComponent />
                </Row>
            </div>
        );
    }
}

export default Tes;
