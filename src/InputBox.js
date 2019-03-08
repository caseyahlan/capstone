import React, { Component } from 'react'
import "antd/dist/antd.css";
import { InputNumber, Col, Row } from 'antd';

class InputBox extends Component {

    render() {
        return(
            <div>
                <Row>
                    <Col><h1>{ this.props.data.Product }</h1></Col>
                    <Col><InputNumber min = {0} defaultValue={0}/></Col>
                </Row>
            </div>
            
        );
    }
      
}

export default InputBox;