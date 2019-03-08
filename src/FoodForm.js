import React, { Component } from 'react'
import "antd/dist/antd.css";
import { Row } from 'antd';
import InputBox from './InputBox.js'




class FoodForm extends Component {


    render() {
        let x = this.props.data.map(object => (
            <InputBox data = {object} />
        ))

        return(
            <div><Row type = "flex" justify="space-between">{x}</Row></div>
                
            
        );
    }
      
}

export default FoodForm;