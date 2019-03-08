import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import "antd/dist/antd.css";
import FoodForm from './FoodForm.js';
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
      <Header>
        <div className="logo" />
        <Menu mode='horizontal' defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
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
        <FoodForm data = {this.state.data}/>
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
