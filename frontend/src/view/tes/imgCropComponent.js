import React from "react";
import ImgCrop from "antd-img-crop";
import { Col, Upload } from "antd";

class imgCropComponent extends React.Component {
    render() {
        const colStyle = { marginTop: 10 };

        const onChange = ({ fileList: newFileList }) => {
            this.setState({
                fileList: newFileList,
            });
        };

        const onPreview = async (file) => {
            let src = file.url;
            if (!src) {
                src = await new Promise((resolve) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(file.originFileObj);
                    reader.onload = () => resolve(reader.result);
                });
            }
            const image = new Image();
            image.src = src;
            const imgWindow = window.open(src);
            imgWindow.document.write(image.outerHTML);
        };

        return (
            <div>
                <Col flex="1 1 240px" style={colStyle}>
                    <ImgCrop rotate>
                        <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" listType="picture-card" fileList={this.state.fileList} onChange={onChange} onPreview={onPreview}>
                            {this.state.fileList.length < 1 && "+ Upload"}
                        </Upload>
                    </ImgCrop>
                </Col>
            </div>
        );
    }
}

export default imgCropComponent;
