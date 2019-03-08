import React, { Component } from 'react'
import "antd/dist/antd.css";
import { InputNumber, Row, Col, Layout, Steps, Button, message } from 'antd';
import { Link } from 'react-router-dom';


class InputBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
        };
    }
    
    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }
    
    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }
    
    render() {
        let data = this.props.data || [];
        const {Content} = Layout;
        const {current} = this.state;
        let inputList = data.map((obj) => (
            <InputItem data={obj}/>
        ));
        const Step = Steps.Step;
        const steps = [{
            title: 'First',
            content: (<Row type='flex'>{inputList}</Row>),
        } , {
            title: 'Second',
            content: 'Something',
        } , {
            title: 'Last',
            content: 'Something else',
        }];
        
        return (
            <Content style={{ padding: '20px 20px' }}>
                <div style={{ background: '#fff', padding: '24px', height: '100%' }}>
                    <div style={{ height:'100%' }}>
                        <div className='steps-content' style={{paddingBottom: '20px'}}>{steps[current].content}</div>
                        <Steps current={current} style={{paddingTop: '20px'}}>
                            {steps.map((item) => <Step key={item.title} title={item.title} />)}
                        </Steps>
                        <div className="steps-action" style={{paddingTop: '20px'}}>
                            {
                                current < steps.length - 1
                                && <Button type="primary" onClick={() => this.next()}>Next</Button>
                            }
                            {
                                current === steps.length - 1
                                && <Link to='/results'><Button type="primary" onClick={() => message.success('Finished!')}>Done</Button></Link>
                            }
                            {
                                current > 0
                                && (
                                <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                                Previous
                                </Button>
                                )
                            }
                        </div>
                    </div>
                </div>
            </Content>
        );
    }
}

class InputItem extends Component {

    render() {
        return(
            <Col span={4}>
                <h1>{this.props.data.Product}</h1>
                <InputNumber min={0} max={5}/>
            </Col>
        );
    }
      
}

export default InputBox;