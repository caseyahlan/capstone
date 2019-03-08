import React, { Component } from 'react'
import "antd/dist/antd.css";
import InputBox from './InputBox.js'




class FoodForm extends Component {


    render() {
        let x = this.props.data.map(object => (
            <InputBox data = {object}/>
        ))

        return(
            <div>
                {x}
            </div>
            
        );
    }
      
}

export default FoodForm;