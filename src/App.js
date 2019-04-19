import React, { Component } from 'react';
import { Route, Link, Switch, NavLink} from 'react-router-dom';
// import './styles.css'
import { Container, Row, Col } from 'reactstrap';
import Nutella from './components/nutella';

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
      </Container>
    )
  }
}


export default App;