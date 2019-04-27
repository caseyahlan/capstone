import React, { Component } from 'react';
import { Route, Link, Switch, NavLink} from 'react-router-dom';
// import MediaQuery from 'react-responsive';
import { Container, Row, Col } from 'reactstrap';
import Nutella from './components/nutella';
import Fish from './components/fish';
import Hamburger from './components/hamburger';

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
        <Route exact path='/' component={BodyContent}/>
        <Route path='/nutella' component={Nutella}/>
        <Route path='/fish' component={Fish}/>
        <Route path='/hamburger' component={Hamburger}/>
      </Switch>
    );
  }
}

class BodyContent extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col><Link to='/nutella'>nutella</Link></Col>
        </Row>
        <Row>
          <Col><Link to='/fish'>fish</Link></Col>
        </Row>
        <Row>
          <Col><Link to='/hamburger'>hamburger</Link></Col>
        </Row>
      </Container>
    )
  }
}


export default App;
