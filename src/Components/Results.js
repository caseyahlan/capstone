import React, { Component } from "react";
import "antd/dist/antd.css";
import { Layout, Card, Col, Row } from 'antd';

class Results extends Component {
    render() {
        const { Content } = Layout;
        
        return (
            <Content style={{ padding: '20px 20px' }}>
                <div style={{ background: '#fff', padding: '24px', height: '100%' }}>
                    <div style={{ height:'100%' }}>
                        <h1>Scorecard</h1>
                        <ResultCard />
                    </div>
                </div>
            </Content>
        );
    }
}

class ResultCard extends Component {
    render() {
        return (
            <Row gutter={16}>
                <Col span={8}>
                    <Card title="Total emissions" bordered={false}>Total emissions</Card>
                </Col>
                <Col span={8}>
                    <Card title="Total water use" bordered={false}>Total water use</Card>
                </Col>
                <Col span={8}>
                    <Card title="Total land use" bordered={false}>Total land use</Card>
                </Col>
            </Row>
        );
    }
}

export default Results;