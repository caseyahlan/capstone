import React, { Component } from "react";
import "antd/dist/antd.css";
import { Layout } from 'antd';

class Results extends Component {
    render() {
        const { Content } = Layout;
        
        return (
            <Content style={{ padding: '20px 20px' }}>
                <div style={{ background: '#fff', padding: '24px', height: '100%' }}>
                    <div style={{ height:'100%' }}>
                        <h1>Content</h1>
                    </div>
                </div>
            </Content>
        )
    }
}

export default Results;