import React, { Component } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Container, Row, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import cow from '../imgs/cow-02.svg';
import amazon from '../imgs/amazon.svg';
import hamburger1 from '../imgs/hamburger1-01.svg';
import hamburger2 from '../imgs/hamburger2-01.svg';
import hamburger3 from '../imgs/hamburger3-01.svg';
import hamburger4 from '../imgs/milk4-01.svg';

class Hamburger extends Component {
  render() {
    return (
      <div>
        <MediaQuery query='(min-device-width: 991px)'>
          <HamburgerDesktop />
        </MediaQuery>
      </div>
    )
  }
}

class HamburgerDesktop extends Component {
  render() {
    return (
        <Parallax ref={ref => (this.parallax = ref)} pages={7}>

          {/* Slide One */}
          <ParallaxLayer
            offset={0}
            speed={0.1}
            onClick={() => this.parallax.scrollTo(1)}>
            <Container fluid={true}>
              <Row>
                <Col xs='12' className='split-horizontal light-green-background d-flex justify-content-center align-items-end'>
                  <h1 className='text-white pb-3'>Hamburger</h1>
                </Col>
                <Col xs='12' className='d-flex justify-content-center'>
                  <div className='arrow-down'></div>
                </Col>
                <Col xs='12' className='split-horizontal d-flex justify-content-center'>
                  <h2 className='pt-5'>Know Your Impact</h2>
                </Col>
              </Row>
            </Container>
          </ParallaxLayer>

          {/* Slide Two */}
          <ParallaxLayer offset={1} speed={1} className='grey-background'/>
          <Container>
            <Row>
              <Col sm={8}>
                <ParallaxLayer offset={1.2} speed={0.1}>
                    {/* <div className='media'> */}
                      {/* <div className='media-body'> */}
                        <h1 className='text-center text-md-left pt-2 pt-lg-5'>About the Beef Industry</h1>
                          <p className='text-monospace body-text'>
                            <br></br>
                            Hamburgers are a staple food from barbecues to 3-star restaurants. In the United States, people eat over 50 billion hamburgers every year! What you might not realize is that eating meat has more of an environmental impact than almost any other food we eat.
                            <br></br><br></br>
                            Raising cows requires a lot of food, water, land, and energy.
                          </p>
                      {/* </div> */}
                    {/* </div> */}
                </ParallaxLayer>
              </Col>
              <Col sm={4}>
                <ParallaxLayer offset={1.1} speed={4}>
                  <img src={cow} height="75%" width="75%" style={{ display: 'block', marginLeft: '35%' }} alt='cow'></img>
                </ParallaxLayer>
              </Col>
            </Row>
          </Container>
          <ParallaxLayer offset={1.1} speed={2}>
          </ParallaxLayer>

          {/* Slide Three */}
          <ParallaxLayer offset={2.05} speed={1.5} style={{ pointerEvents: 'none' }}>
            <h1 style={{ width: '70%', marginLeft: '5%' }}>Impacts of Beef</h1>
          </ParallaxLayer>
          <ParallaxLayer offset={2.4} speed={6}>
            <img src={hamburger4} style={{ display: 'block', height: '40%', width: 'auto', marginLeft: '70%' }}></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.3} speed={2.8}>
            <img src={hamburger3} style={{ display: 'block', height: '30%', width: 'auto', marginLeft: '50%' }}></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.5} speed={1}>
            <img src={hamburger2} style={{ display: 'block', height: '30%', width: 'auto', marginLeft: '30%' }}></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.2} speed={-0.2}>
            <img src={hamburger1} style={{ display: 'block', height: '40%', width: 'auto', marginLeft: '10%' }}></img>
          </ParallaxLayer>

          {/* Slide Four */}
          <ParallaxLayer offset={3} speed={1} className='grey-background'/>
          <Container>
            <Row>
              <Col sm={8}>
                <ParallaxLayer offset={3.2} speed={0.1}>
                    {/* <div className='media'> */}
                      {/* <div className='media-body'> */}
                        <h1 className='text-center text-md-left pt-2 pt-lg-5'>How has the Beef Industry Impacted the Amazon Rainforest?</h1>
                          <p className='text-monospace body-text'>
                            <br></br>
                            “Each year, millions of hectares of forest are cleared for beef pasture, releasing carbon into the atmosphere and destroying habitat of endangered species. The deforestation impact of beef is greatest in South America, where beef was responsible for nearly three-quarters of total deforestation between 1990 and 2005.” - www.ucsusa.org
                          </p>
                      {/* </div> */}
                    {/* </div> */}
                </ParallaxLayer>
              </Col>
              <Col sm={4}>
                <ParallaxLayer offset={3.1} speed={4}>
                  <img src={amazon} height="85%" width="85%" style={{ display: 'block', marginLeft: '35%' }} alt='amazon'></img>
                </ParallaxLayer>
              </Col>
            </Row>
          </Container>
          <ParallaxLayer offset={3.1} speed={2}>
          </ParallaxLayer>

          {/* Slide Five */}
          <Row>
            <Col md='6'>
              <ParallaxLayer offset={4} speed={0.5}>
                <div className='split-vertical light-green-background text-white d-flex align-items-center flex-wrap container'>
                  <Row className='px-3'>
                    <h1>What can you do to help?</h1>
                  </Row>
                </div>
              </ParallaxLayer>
            </Col>
            <Col md='6'>
              <ParallaxLayer offset={4} speed={1.5}>
                <div className='split-vertical d-flex align-items-center container'>
                  <ListGroup flush>
                    <ListGroupItem>
                      <ListGroupItemHeading>Reduce consumption of beef</ListGroupItemHeading>
                      <ListGroupItemText>Reduce your portion size or try a blended burger. Blended burgers combine mushroom and beef to create a patty with less fat and fewer calories than a beef burger.</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListGroupItemHeading>Choose beef alternatives</ListGroupItemHeading>
                      <ListGroupItemText>The Impossible™ burger and Beyond Burger® are made from plants, but have the flavor, smell, and look of beef.
                      <br></br>
                      Find a grocery store that sells Impossible™ burgers: impossiblefoods.com/locations/
                      Here’s a Beyond Burger® location finder: impossiblefoods.com/locations/</ListGroupItemText>
                    </ListGroupItem>
                  </ListGroup>
                </div>
              </ParallaxLayer>
            </Col>
          </Row>


          <ParallaxLayer
            offset={1}
            speed={0.1}
            onClick={() => this.parallax.scrollTo(2)}/>

          <ParallaxLayer
            offset={2}
            speed={0.1}
            onClick={() => this.parallax.scrollTo(3)}>
          </ParallaxLayer>

          <ParallaxLayer
            offset={3}
            speed={0.1}
            onClick={() => this.parallax.scrollTo(4)}>
          </ParallaxLayer>

          <ParallaxLayer
            offset={4}
            speed={0.1}
            onClick={() => this.parallax.scrollTo(5)}>
          </ParallaxLayer>

          <ParallaxLayer
            offset={5}
            speed={0.1}
            onClick={() => this.parallax.scrollTo(6)}>
          </ParallaxLayer>

          <ParallaxLayer
            offset={5}
            speed={0.1}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={() => this.parallax.scrollTo(0)}>
            <Row>
              <Col sm={12} className='text-center my-3'>
                <h1 className='text-monospace'>Learn about more foods!</h1>
                <Link to='/'><Button color='success'>Back to home</Button></Link>
              </Col>
              <Col sm={12} className='text-center my-3'>
                <h2 className='text-monospace'>Curious where we got our information from?</h2>
                <Link to='/sources'><Button color='secondary'>Sources</Button></Link>
              </Col>
            </Row>
          </ParallaxLayer>
        </Parallax>
    )
  }
}

export default Hamburger;
