import React, { Component } from 'react'
import "antd/dist/antd.css";
import { InputNumber } from 'antd';

class InputBox extends Component {

    render() {
        return(
            <div><h1>{ this.props.data.title }</h1>
            <InputNumber/></div>
            
        );
    }
      
}

export default InputBox;