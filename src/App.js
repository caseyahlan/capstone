import React, { Component } from 'react';
import { Route, Link, Switch, NavLink} from 'react-router-dom';
// import MediaQuery from 'react-responsive';
import {
  Container,
  Row,
  Col,
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
import Banana from './components/banana';
import Rice from './components/rice';
import Bread from './components/bread';
import Oreo from './components/oreo';
import Cocacola from './components/cocacola';
import hazelnutSpreadImg from './imgs/hazelnutSpread-04.svg';
import fishImg from './imgs/cookedfish-02.svg';
import hamburgerImg from './imgs/hamburger.svg';
import milkImg from './imgs/milk-02.svg';
import avocadoImg from './imgs/avocado.svg';
import coffeeImg from './imgs/coffee.svg';
import bananaImg from './imgs/banana.svg';
import riceImg from './imgs/rice-bowl.svg';
import strawberryImg from './imgs/strawberry-02.svg'

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
        <Route path='/banana' component={Banana}/>
        <Route path='/rice' component={Rice}/>
        <Route path='/bread' component={Bread}/>
        <Route path='/oreo' component={Oreo}/>
        <Route path='/cocacola' component={Cocacola}/>
        <Route path='/sources' component={Sources}/>
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
        <NavBar></NavBar>
        <Container>
          <Row>
            <Col sm={12} md={4} lg={3} className='py-3'>
              <Link to='/nutella'>
                <Card className='card-img-top'>
                  <CardImg src={hazelnutSpreadImg} alt='nutella'/>
                </Card>
              </Link>
            </Col>
            <Col sm={12} md={4} lg={3} className='py-3'>
              <Link to='/fish'>
                <Card className='card-img-top'>
                  <CardImg src={fishImg} alt='fish'/>
                </Card>
              </Link>
            </Col>
            <Col sm={12} md={4} lg={3} className='py-3'>
              <Link to='/hamburger'>
                <Card className='card-img-top'>
                  <CardImg src={hamburgerImg} alt='hamburger' />
                </Card>
              </Link>
            </Col>
            <Col sm={12} md={4} lg={3} className='py-3'>
              <Link to='/milk'>
                <Card className='card-img-top'>
                  <CardImg src={milkImg} alt='milk'/>
                </Card>
              </Link>
            </Col>
            <Col sm={12} md={4} lg={3} className='py-3'>
              <Link to='/avocado'>
                <Card className='card-img-top'>
                  <CardImg src={avocadoImg} alt='avocado'/>
                </Card>
              </Link>
            </Col>
            <Col sm={12} md={4} lg={3} className='py-3'>
              <Link to='/coffee'>
                <Card className='card-img-top'>
                  <CardImg src={coffeeImg} alt='coffee'/>
                </Card>
              </Link>
            </Col>
            <Col sm={12} md={4} lg={3} className='py-3'>
              <Link to='/banana'>
                <Card className='card-img-top'>
                  <CardImg src={bananaImg} alt='banana'/>
                </Card>
              </Link>
            </Col>
            <Col sm={12} md={4} lg={3} className='py-3'>
              <Link to='/rice'>
                <Card className='card-img-top'>
                  <CardImg src={riceImg} alt='rice'/>
                </Card>
              </Link>
            </Col>
            <Col sm={12} md={4} lg={3} className='py-3'>
              <Link to='/bread'>
                <Card className='card-img-top'>
                  <CardImg src={avocadoImg} alt='bread'/>
                </Card>
              </Link>
            </Col>
            <Col sm={12} md={4} lg={3} className='py-3'>
              <Link to='/oreo'>
                <Card className='card-img-top'>
                  <CardImg src={coffeeImg} alt='oreo'/>
                </Card>
              </Link>
            </Col>
            <Col sm={12} md={4} lg={3} className='py-3'>
              <Link to='/cocacola'>
                <Card className='card-img-top'>
                  <CardImg src={hamburgerImg} alt='cocacola'/>
                </Card>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

class Sources extends Component {
  render() {
    return (
      <div>
        hi
      </div>
    )
  }
}

class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Container>
        <Link class="navbar-brand" to="/">
          <img src={strawberryImg} width="50" height="50" class="d-inline-block align-center" alt="" />
          foodfluence
        </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarToggler">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <Link class="nav-link" to="/sources">sources</Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://caseyahlan.github.io/landingpage/?fbclid=IwAR3P_NdjgG8vzpLCwXoyCQfjeBrmJyzeX-iQNE55-GK286utfl3VOeufCBg#!">about us</a>
            </li>
          </ul>
        </div>
        </Container>
      </nav>
    )
  }
}

export default App;
