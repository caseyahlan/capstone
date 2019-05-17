import React, { Component } from 'react';
import { Route, Link, Switch, NavLink} from 'react-router-dom';
// import MediaQuery from 'react-responsive';
import { 
  Container, 
  Row, 
  Col, 
  Navbar, 
  Nav, 
  NavItem, 
  NavbarToggler, 
  NavbarBrand, 
  UncontrolledDropdown, 
  DropdownMenu, 
  DropdownToggle, 
  DropdownItem, 
  Collapse } from 'reactstrap';
import Nutella from './components/nutella';
import Fish from './components/fish';
import Hamburger from './components/hamburger';
import Milk from './components/milk';
import Avocado from './components/avocado';
import Coffee from './components/coffee';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/nutella' component={Nutella}/>
        <Route path='/fish' component={Fish}/>
        <Route path='/hamburger' component={Hamburger}/>
        <Route path='/milk' component={Milk}/>
        <Route path='/avocado' component={Avocado}/>
        <Route path='/coffee' component={Coffee}/>
      </Switch>
    );
  }
}

class HomePage extends Component {
  // constructor(props) {
  //   super(props);

  //   this.toggle = this.bind.toggle(this);
  //   this.state = {
  //     isOpen: false
  //   };
  // }

  // toggle() {
  //   this.setState({
  //     isOpen: !this.state.isOpen
  //   });
  // }
  
  render() {
    return (
      <div>
        {/* <Navbar color='light'>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                Blah blah text
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar> */}
        <Container>
          <Row>
            <Col sm={12} md={4} lg={3}>
              <Link to='/nutella'>nutella</Link>
            </Col>
            <Col sm={12} md={4} lg={3}>
              <Link to='/fish'>fish</Link>
            </Col>
            <Col sm={12} md={4} lg={3}>
              <Link to='/hamburger'>hamburger</Link>
            </Col>
            <Col sm={12} md={4} lg={3}>
              <Link to='/milk'>milk</Link>
            </Col>
            <Col sm={12} md={4} lg={3}>
              <Link to='/avocado'>avocado</Link>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}


export default App;
