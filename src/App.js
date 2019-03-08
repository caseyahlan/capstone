import React, { Component } from 'react';
import { Layout, Menu, Row, Button } from 'antd';
import "antd/dist/antd.css";
// import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.props = {
      data: []
    };
  }
  
  componentDidMount() {
    fetch('./data/data.json')
      .then((response) => (response.json()))
      .then((data) => {
        this.setState({data: data});
      })
      .catch((e) => {console.log(e)});
  }
  
  render() {
    return (
      <Layout>
        <NavMenu />
        <BodyContent />
        <FooterContent />
      </Layout>
    );
  }
}

class NavMenu extends Component {
  render() {
    const {Header} = Layout;

    return (
      <Header style={{width:'100%'}}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['0']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">Foodfluence</Menu.Item>
        </Menu>
      </Header>
    );
  }
}

class BodyContent extends Component {
  render() {
    const {Content} = Layout;

    return (
      <Content style={{ padding: '20px 20px' }}>
        <div style={{ background: '#fff', padding: '24px', height: '100vh' }}>
          <div style={{textAlign:'center'}}>
            <Row></Row>
            <Row align='middle' justify='center' type='flex' style={{height:'100vh'}}>
              <Row>
                <h1>Foodfluence</h1>
              </Row>
              <Row>
                <Button type='default'>Click me</Button>
              </Row>
            </Row>
            {/* <Row>
            </Row> */}
          </div>
        </div>
      </Content>
    );
  }
}

class FooterContent extends Component {
  render() {
    const {Footer} = Layout;

    return (
      <Footer>
        some footer text
      </Footer>
    )
  }
}


export default App;
