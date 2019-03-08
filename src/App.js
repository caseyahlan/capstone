import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import "antd/dist/antd.css";
// import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      <Layout style={{height:'100vh'}}>
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
      <Content>
        {/* <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <div>Content</div>
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
