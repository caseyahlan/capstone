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
  Collapse,
  Card,
  CardImg } from 'reactstrap';
import Nutella from './components/nutella';
import Fish from './components/fish';
import Hamburger from './components/hamburger';
import Milk from './components/milk';
import Avocado from './components/avocado';
import Coffee from './components/coffee';
import hazelnutSpreadImg from './imgs/hazelnutSpread-04.svg';
import fishImg from './imgs/cookedfish-02.svg';
import hamburgerImg from './imgs/hamburger.svg';
import milkImg from './imgs/milk-02.svg';
import avocadoImg from './imgs/avocado.svg';

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
              <Link to='/nutella'>
                <Card>
                  <CardImg src={hazelnutSpreadImg} alt='nutella'/>  
                </Card>
              </Link>
            </Col>
            <Col sm={12} md={4} lg={3}>
              <Link to='/fish'>
                <Card>
                  <CardImg src={fishImg} alt='fish'/>  
                </Card>
              </Link>
            </Col>
            <Col sm={12} md={4} lg={3}>
              <Link to='/hamburger'>
                <Card>
                  <CardImg src={hamburgerImg} alt='hamburger'/>  
                </Card>
              </Link>
            </Col>
            <Col sm={12} md={4} lg={3}>
              <Link to='/milk'>
                <Card>
                  <CardImg src={milkImg} alt='milk'/>  
                </Card>
              </Link>
            </Col>
            <Col sm={12} md={4} lg={3}>
              <Link to='/avocado'>
                <Card>
                  <CardImg src={avocadoImg} alt='avocado'/>  
                </Card>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}


export default App;
