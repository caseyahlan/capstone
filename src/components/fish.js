import React, { Component } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Container, Row, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import MediaQuery from 'react-responsive';
import circles from '../imgs/circles.svg';
import cookedfish from '../imgs/cookedfish-02.svg';
import alivecoral from '../imgs/coral-02.svg';
import deadcoral from '../imgs/deadcoral-02.svg';
import fishnet from '../imgs/fishnet-02.svg';

class Fish extends Component {
  render() {
    return (
      <div>
        <MediaQuery query='(min-device-width: 991px)'>
          <FishDesktop />
        </MediaQuery>
        <MediaQuery query='(max-device-width: 991px)'>
          <FishMobile />
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
          <ParallaxLayer offset={1} speed={0.1}>
            <Container>
              <div className='media'>
                <div className='media-body'>
                  <h1 className='text-center text-md-left pt-2 pt-lg-5'>About the Fishing Industry</h1>
                    <p className='text-monospace body-text'>
                      <br></br>
                      Fish are a high demand product. There are several different species of fish that are on sale, but with the impacts of overfishing in various parts of the world, some species of fish are being pushed to extinction.
                      <br></br><br></br>
                      According to worldatlas.com; “if the fishing industry continues as is, wild-caught seafood will be non-existent by the year 2048”.
                    </p>
                </div>
                <img src={fishnet} className='align-self-center' height="35%" width="35%"></img>
              </div>
            </Container>
          </ParallaxLayer>

          <ParallaxLayer offset={1.1} speed={2}>
          </ParallaxLayer>

          {/* Slide Three */}
          <ParallaxLayer offset={2.05} speed={1.5} style={{ pointerEvents: 'none' }}>
            <h1 style={{ width: '70%', marginLeft: '5%' }}>Impacts of Overfishing</h1>
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0.1}>
            <img src={circles} className='py-5 my-5 mx-3'></img>
          </ParallaxLayer>

          {/* Slide Four */}
          <ParallaxLayer offset={3} speed={1} className='grey-background'>
            <Container>
              <div className='media'>
                <div className='media-body px-3'>
                  <h1 className='text-left mt-4'>How has the Fishing Industry Impacted Coral Reefs?</h1>
                  <p className='text-monospace font-italic'>
                    <br></br>
                    “Impacts from unsustainable fishing on coral reef areas can lead to the depletion of key reed species in many locations… Additionally, certain types of fishing gear can inflict serious physical damage to coral reefs, seagrass beds, and other important marine habitats” - oceanservice.noaa.gov
                  </p>
                </div>
                <img src={alivecoral} className='align-self-center' height="25%" width="25%"></img>
                <img src={deadcoral} className='align-self-center' height="25%" width="25%"></img>
              </div>
            </Container>
          </ParallaxLayer>

          {/* Slide Five */}
          <ParallaxLayer offset={4} speed={0.5}>
            <Container fluid={true}>
              <Row>
                <Col md='6' className='split-vertical light-green-background text-white d-flex align-items-center flex-wrap'>
                  <Row className='px-3'>
                    <h1>What fish are frequently overfished?</h1>
                    <img src={cookedfish} className='align-self-center' height="25%" width="25%"></img>
                    <p className='text-monospace pt-3'>
                      It is important to know when certain types of fish are more endangered than others so shoppers know what fish they should and should not buy at any given time.
                    </p>
                  </Row>
                </Col>
                <Col md='6' className='split-vertical d-flex align-items-center'>
                  <Container>
                    <ListGroup>
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
                  </Container>
                </Col>
              </Row>
            </Container>
          </ParallaxLayer>

          {/* Slide Six */}
          <ParallaxLayer offset={5} speed={0.1}>
            <Container fluid={true}>
              <Row>
                <Col md='6' className='split-vertical light-green-background text-white d-flex align-items-center'>
                  <h1 className='px-3'>What can you do to help?</h1>
                </Col>
                <Col md='6' className='split-vertical d-flex align-items-center'>
                  <Container>
                    <ListGroup>
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
                  </Container>
                </Col>
              </Row>
            </Container>
          </ParallaxLayer>



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
            <img src='https://cdn11.bigcommerce.com/s-hii7479o/images/stencil/original/products/10545/26845/fish_1__56306.1526673301.png?c=2' style={{ width: '20%' }} />
          </ParallaxLayer>
        </Parallax>
    )
  }
}

class FishMobile extends Component {
  render() {
    return (
        <Parallax ref={ref => (this.parallax = ref)} pages={9}>

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
          <ParallaxLayer offset={1} speed={0.1}>
            <Container>
              <Row>
                <Col xs='12'>
                  <h1 className='text-center text-md-left pt-2 pt-lg-5'>About the Fishing Industry</h1>
                  <Row className='justify-content-center'>
                      <img src={fishnet} className='img-fluid' height="45%" width="45%"></img>
                  </Row>
                  <p className='text-monospace'>
                    <br></br>
                    Fish are a high demand product. There are several different species of fish that are on sale, but with the impacts of overfishing in various parts of the world, some species of fish are being pushed to extinction.
                    <br></br><br></br>
                    According to worldatlas.com; “if the fishing industry continues as is, wild-caught seafood will be non-existent by the year 2048”.
                  </p>
                </Col>
              </Row>
            </Container>
          </ParallaxLayer>

          <ParallaxLayer offset={1.1} speed={2}>
          </ParallaxLayer>

          {/* Slide Three */}
          <ParallaxLayer offset={2.05} speed={1.5} style={{ pointerEvents: 'none' }}>
            <h1 style={{ width: '70%', marginLeft: '5%' }}>Impacts of Overfishing</h1>
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0.1}>
            <Container>
              <img src={circles}></img>
            </Container>
          </ParallaxLayer>

          {/* Slide Four */}
          <ParallaxLayer offset={3} speed={1} className='grey-background'>
            <Container>
              <Row>
                <Col xs='12'>
                  <h1 className='text-center text-md-left pt-2 pt-lg-5'>How has the Fishing Industry Impacted Coral Reefs?</h1>
                  <Row className='justify-content-center'>
                    <img src={alivecoral} className='img-fluid'></img>
                    <img src={deadcoral} className='img-fluid'></img>
                  </Row>
                  <p className='text-monospace font-italic'>
                    <br></br>
                    “Impacts from unsustainable fishing on coral reef areas can lead to the depletion of key reed species in many locations… Additionally, certain types of fishing gear can inflict serious physical damage to coral reefs, seagrass beds, and other important marine habitats” - oceanservice.noaa.gov
                  </p>
                </Col>
              </Row>
            </Container>
          </ParallaxLayer>

          {/* Slide Five */}
          <ParallaxLayer offset={4} speed={0.5}>
            <Container>
              <Row>
                <Col xs='12' className='split-horizontal light-green-background text-white d-flex justify-content-center'>
                  <Row>
                    <h1>What fish are frequently overfished?</h1>
                    <p className='text-monospace pt-3'>
                      It is important to know when certain types of fish are more endangered than others so shoppers know what fish they should and should not buy at any given time.
                    </p>
                  </Row>
                </Col>
                <Col className='split-horizontal d-flex justify-content-center'>
                  <ListGroup>
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
                </Col>
              </Row>
            </Container>
          </ParallaxLayer>

          {/* Slide Six */}
          <ParallaxLayer offset={6} speed={0.1}>
            <Container fluid={true}>
              <Row>
                <Col xs='12' className='split-horizontal light-green-background text-white d-flex justify-content-center'>
                  <Row>
                    <h1>How can you help?</h1>
                    <p>There are many ways you can reduce your impact. Below is a small list of ways you can help reduce your environmental impact.</p>
                  </Row>
                </Col>
                <Col className='split-horizontal d-flex justify-content-center'>
                  <ListGroup>
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
                </Col>
              </Row>
            </Container>
          </ParallaxLayer>

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
            onClick={() => this.parallax.scrollTo(7)}>
          </ParallaxLayer>

          <ParallaxLayer
            offset={7}
            speed={0.1}
            onClick={() => this.parallax.scrollTo(8)}>
          </ParallaxLayer>

          <ParallaxLayer
            offset={8}
            speed={0.1}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={() => this.parallax.scrollTo(0)}>
            <img src='https://cdn11.bigcommerce.com/s-hii7479o/images/stencil/original/products/10545/26845/fish_1__56306.1526673301.png?c=2' style={{ width: '20%' }} />
          </ParallaxLayer>
        </Parallax>
    )
  }
}

export default Fish;
