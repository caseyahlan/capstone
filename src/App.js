import React, { Component } from 'react';
import { Layout, Menu, Row, Button, Col } from 'antd';
import { Route, Link, Redirect, NavLink} from 'react-router-dom';
import InputBox from './Components/InputBox';
import Results from './Components/Results';
import "antd/dist/antd.css";
import FoodForm from './FoodForm.js';
import './App.css';

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
        {/* <Switch> */}
          <Route exact path='/' component={BodyContent}/>
          <Route path='/input' render={(routerProps) => (
            <InputBox {...routerProps} data={this.state.data}/>
          )}/>
          <Route path='/results' component={Results}/>
        {/* </Switch> */}
        {/* <FooterContent /> */}
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
          <Menu.Item key="1"><Link to='/'>Foodfluence</Link></Menu.Item>
        </Menu>
      </Header>
    );
  }
}

class BodyContent extends Component {
  render() {
    const {Content} = Layout;

    return (
      <Content style={{ padding: '20px 20px'}}>
        <div style={{ background: '#fff', padding: '24px', height: '100%' }}>
          <div style={{height:'100%'}}>
            <Row align='middle' justify='center' type='flex' style={{height: '100%'}}>
              <Col>
                <Row type='flex' align='middle' justify='center'>
                  <h1>foodfluence.</h1>
                </Row>
                <Row type='flex' align='middle' justify='center'>
                  <Link to='/input'>
                    <Button type='primary'>Enter</Button>
                  </Link>
                </Row>
              </Col>
            </Row>
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
