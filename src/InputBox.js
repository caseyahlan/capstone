import React, { Component } from 'react'
import "antd/dist/antd.css";
import { InputNumber } from 'antd';

class InputBox extends Component {

    render() {
        return(
            <div>
                <row><h1>{ this.props.data.Product }</h1><InputNumber/>
                </row>>
            </div>
            
        );
    }
      
}

export default InputBox;