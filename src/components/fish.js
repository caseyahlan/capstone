import React, { Component } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Container, Row, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import cookedfish from '../imgs/cookedfish-02.svg';
import alivecoral from '../imgs/coral-02.svg';
import deadcoral from '../imgs/deadcoral-02.svg';
import fishnet from '../imgs/fishnet-02.svg';
import fish01 from '../imgs/fish-01.svg';
import fish02 from '../imgs/fish-02.svg';
import fish03 from '../imgs/fish-03.svg';
import fish04 from '../imgs/fish-04.svg';

class Fish extends Component {
  render() {
    return (
      <div>
        <MediaQuery query='(min-device-width: 991px)'>
          <FishDesktop />
        </MediaQuery>
      </div>
    )
  }
}

class FishDesktop extends Component {
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
                  <h1 className='text-white pb-3'>Fishing</h1>
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
                        <h1 className='text-center text-md-left pt-2 pt-lg-5'>About the Fishing Industry</h1>
                          <p className='text-monospace body-text'>
                            <br></br>
                            Fish are a high demand product. There are several different species of fish that are on sale, but with the impacts of overfishing in various parts of the world, some species of fish are being pushed to extinction.
                            <br></br><br></br>
                            According to worldatlas.com; “if the fishing industry continues as is, wild-caught seafood will be non-existent by the year 2048”.
                          </p>
                      {/* </div> */}
                    {/* </div> */}
                </ParallaxLayer>
              </Col>
              <Col sm={4}>
                <ParallaxLayer offset={1.1} speed={4}>
                  <img src={fishnet} height="75%" width="75%" style={{ display: 'block', marginLeft: '35%' }} alt='fishnet'></img>
                </ParallaxLayer>
              </Col>
            </Row>
          </Container>
          <ParallaxLayer offset={1.1} speed={2}>
          </ParallaxLayer>

          {/* Slide Three */}
          <ParallaxLayer offset={2.05} speed={1.5} style={{ pointerEvents: 'none' }}>
            <h1 style={{ width: '70%', marginLeft: '5%' }}>Impacts of Overfishing</h1>
          </ParallaxLayer>
          <ParallaxLayer offset={2.4} speed={6}>
            <img src={fish04} style={{ display: 'block', height: '40%', width: 'auto', marginLeft: '70%' }} alt='informational circle'></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.3} speed={2.8}>
            <img src={fish03} style={{ display: 'block', height: '30%', width: 'auto', marginLeft: '50%' }} alt='informational circle'></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.5} speed={1}>
            <img src={fish02} style={{ display: 'block', height: '30%', width: 'auto', marginLeft: '30%' }} alt='informational circle'></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.2} speed={-0.2}>
            <img src={fish01} style={{ display: 'block', height: '40%', width: 'auto', marginLeft: '10%' }} alt='informational circle'></img>
          </ParallaxLayer>

          {/* Slide Four */}
          <ParallaxLayer offset={3} speed={1} className='grey-background'>
            <Container>
              <div className='media'>
                <div className='media-body px-3'>
                  <br></br>
                  <h1 className='text-left mt-4'>How has the Fishing Industry Impacted Coral Reefs?</h1>
                  <p className='text-monospace font-italic'>
                    <br></br><br></br>
                    “Impacts from unsustainable fishing on coral reef areas can lead to the depletion of key reed species in many locations… Additionally, certain types of fishing gear can inflict serious physical damage to coral reefs, seagrass beds, and other important marine habitats” - oceanservice.noaa.gov
                  </p>
                </div>
              </div>
            </Container>
          </ParallaxLayer>
          <ParallaxLayer offset={3.53} speed={0.4}>
            <img src={alivecoral} style={{ display: 'block', height: '30%', width: 'auto', marginLeft: '30%' }} alt='healthy coral reef'></img>
          </ParallaxLayer>
          <ParallaxLayer offset={3.54} speed={1.7}>
            <img src={deadcoral} style={{ display: 'block', height: '30%', width: 'auto', marginLeft: '50%' }} alt='dead coral reef'></img>
          </ParallaxLayer>

          {/* Slide Five */}
          <Row>
            <Col md='6'>
              <ParallaxLayer offset={4} speed={0.5}>
                <div className='split-vertical light-green-background text-white d-flex align-items-center flex-wrap container'>
                  <Row className='px-3'>
                    <h1>What fish are frequently overfished?</h1>
                    <p className='text-monospace pt-3'>
                      It is important to know when certain types of fish are more endangered than others so shoppers know what fish they should and should not buy at any given time.
                    </p>
                  </Row>
                </div>
              </ParallaxLayer>
            </Col>
            <Col md='6'>
              <ParallaxLayer offset={4} speed={1.5}>
                <div className='split-vertical d-flex align-items-center container'>
                  <ListGroup flush>
                    <ListGroupItem>
                      <ListGroupItemHeading>Atlantic Cod</ListGroupItemHeading>
                      <ListGroupItemText>Atlantic Cod used to be known for how plentiful its population is, however, it is now in constant threat of extinction.</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListGroupItemHeading>Halibut</ListGroupItemHeading>
                      <ListGroupItemText>Halibut is often considered endangered, however there have been conservation efforts. Despite these conservation efforts, Halibut still struggled to regrow its population.</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListGroupItemHeading>Atlantic Salmon</ListGroupItemHeading>
                      <ListGroupItemText>Since 2000, Atlantic Salmon has been at risk of extinction.</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListGroupItemHeading>Bluefin Tuna</ListGroupItemHeading>
                      <ListGroupItemText>Most species of tuna are frequently fished to capacity and the populations are declining or depleted.</ListGroupItemText>
                    </ListGroupItem>
                  </ListGroup>
                </div>
              </ParallaxLayer>
            </Col>
          </Row>

          {/* Slide Six */}
          <Row>
            <Col md='6'>
              <ParallaxLayer offset={5} speed={0.5}>
                <div className='split-vertical light-green-background text-white d-flex align-items-center flex-wrap container'>
                  <Row className='px-3'>
                    <h1>What can you do to help?</h1>
                  </Row>
                </div>
              </ParallaxLayer>
            </Col>
            <Col md='6'>
              <ParallaxLayer offset={5} speed={1.5}>
                <div className='split-vertical d-flex align-items-center container'>
                  <ListGroup flush>
                    <ListGroupItem>
                      <ListGroupItemHeading>Be a Responsible Shopper</ListGroupItemHeading>
                      <ListGroupItemText>
                        Only purchase fish that comes from sustainable fisheries. Look for sustainable fishing labels when purchasing fish.
                      </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListGroupItemHeading>Reduce purchase of threatened fish species</ListGroupItemHeading>
                      <ListGroupItemText>
                        Reduce how often you consume fish and be mindful and aware of what you are eating. Additionally, shop for alternative fish species that are not being overfished.
                      </ListGroupItemText>
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
            offset={6}
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

export default Fish;
