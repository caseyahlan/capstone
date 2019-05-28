import React, { Component } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Container, Row, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import MediaQuery from 'react-responsive';
import hazelnutSpread from '../imgs/hazelnutSpread-04.svg';
import apple from '../imgs/apple-03.svg';
import crepe from '../imgs/crepe-05.svg';
import strawberry from '../imgs/strawberry-02.svg';
import toast from '../imgs/toast-06.svg';
import orangutanStumps from '../imgs/orangutanStumps-07.svg';
import orangutanTrees from '../imgs/orangutanTrees-07.svg';
import nutella01 from '../imgs/nutella1.svg';
import nutella02 from '../imgs/nutella2.svg';
import nutella03 from '../imgs/nutella3-01.svg';
import nutella04 from '../imgs/nutella4-01.svg';

class Cocacola extends Component {
  render() {
    return (
      <div>
        <MediaQuery query='(min-device-width: 991px)'>
          <CocacolaDesktop />
        </MediaQuery>
        <MediaQuery query='(max-device-width: 991px)'>
          <CocacolaMobile />
        </MediaQuery>
      </div>
    )
  }
}

class CocacolaDesktop extends Component {
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
                  <h1 className='text-white pb-3'>Soda</h1>
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
                        <h1 className='text-center text-md-left pt-2 pt-lg-5'>About Soda</h1>
                          <p className='text-monospace body-text'>
                            <br></br>
                            You already know the impact soda can have on your health (it’s bad for your blood pressure, teeth, heart, kidney...), but still nothing beats an ice-cold soda on a hot day. Have you thought about the impact each bottle of soda has on the environment though? Coca-Cola alone sells around 3,500 single-use bottles every second! One way or another, most of these bottles end up in the ocean, impacting marine animals.
                            <br></br><br></br>
                            It’s predicted that, if nothing changes, by 2050 plastic in the ocean may outweigh fish.
                          </p>
                      {/* </div> */}
                    {/* </div> */}
                </ParallaxLayer>
              </Col>
              <Col sm={4}>
                <ParallaxLayer offset={1.1} speed={4}>
                  <img src={hazelnutSpread} height="75%" width="75%" style={{ display: 'block', marginLeft: '35%' }} alt='soda'></img>
                </ParallaxLayer>
              </Col>
            </Row>
          </Container>
          <ParallaxLayer offset={1.1} speed={2}>
          </ParallaxLayer>

          {/* Slide Three */}
          <ParallaxLayer offset={2.05} speed={1.5} style={{ pointerEvents: 'none' }}>
            <h1 className={'text-monospace'} style={{ width: '70%', marginLeft: '5%' }}>Impact of Soda</h1>
          </ParallaxLayer>
          <ParallaxLayer offset={2.4} speed={6}>
            <img src={nutella04} style={{ display: 'block', height: '40%', width: 'auto', marginLeft: '70%' }}></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.3} speed={2.8}>
            <img src={nutella03} style={{ display: 'block', height: '30%', width: 'auto', marginLeft: '50%' }}></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.5} speed={1}>
            <img src={nutella02} style={{ display: 'block', height: '30%', width: 'auto', marginLeft: '30%' }}></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.2} speed={-0.2}>
            <img src={nutella01} style={{ display: 'block', height: '40%', width: 'auto', marginLeft: '10%' }}></img>
          </ParallaxLayer>

          {/* Slide Four */}
          <ParallaxLayer offset={3} speed={1} className='grey-background'/>
          <ParallaxLayer offset={3.15} speed={1}>
            <Container>
              <div className='media'>
                <div className='media-body px-3'>
                  <h1 className='text-left mt-4'>How has Soda Impacted Marine Life?</h1>
                  <p className='text-monospace font-italic'>
                    <br></br>
                    “Many people think that plastic soft drink bottles are killing wildlife, and it is a contributor as it breaks down into small pieces. However, plastic bottles are not the main reason for plastics killing wildlife, it is the colorful plastic caps that become separated from the bottles. These colorful plastic caps act as lures, attract animals, and become bite size appetizers for sea turtles, dolphins and fish. The plastic can neither be digested nor passed through by most species. Instead, it clogs their intestinal tract and they die a slow and painful death at sea.” - www.woundednature.org
                  </p>
                </div>
              </div>
            </Container>
          </ParallaxLayer>
          <ParallaxLayer offset={3.53} speed={0.4}>
            <img src={orangutanTrees} style={{ display: 'block', height: '25%', width: 'auto', marginLeft: '30%' }}></img>
          </ParallaxLayer>
          <ParallaxLayer offset={3.54} speed={1.7}>
            <img src={orangutanStumps} style={{ display: 'block', height: '25%', width: 'auto', marginLeft: '50%' }}></img>
          </ParallaxLayer>

          {/* Slide Five */}
          <ParallaxLayer offset={4} speed={0.1}>
            <Container fluid={true}>
              <Row>
                <Col md='6' className='split-vertical light-green-background text-white d-flex align-items-center flex-wrap'>
                  <Row className='px-3'>
                    <h1>What can you do to help?</h1>
                  </Row>
                </Col>
                <Col md='6' className='split-vertical d-flex align-items-center'>
                  <Container>
                    <ListGroup>
                      <ListGroupItem>
                        <ListGroupItemHeading>Recycle, recycle, recycle</ListGroupItemHeading>
                        <ListGroupItemText>
                          Instead of being recycled, 70% of plastic containers end up in landfills or go directly into the environment. Recycling plastic bottles helps conserve natural resources and energy, while keeping plastic out of the stomachs of marine animals. Aluminum cans and glass bottles are also easily recycled.
                        </ListGroupItemText>
                      </ListGroupItem>
                      <ListGroupItem>
                        <ListGroupItemHeading>Drink fountain-style or bring a reusable cup</ListGroupItemHeading>
                        <ListGroupItemText>
                          Rather than buying a bottle or can of soda, choose fountain-style. Better yet, bring your own water in a reusable water bottle. Tap water is free, and you’ll be preventing another bottle or can from ending up in the environment.
                        </ListGroupItemText>
                      </ListGroupItem>
                      <ListGroupItem>
                        <ListGroupItemHeading>Invest in at-home soda machines</ListGroupItemHeading>
                        <ListGroupItemText>
                        At-home soda machines allow you to make your own sparkling water and soft drinks. These machines significantly reduce plastic bottle use and at a cost of around 50 cents per liter, will save you money.
                        Try the <a href="https://sodastream.com/" target="_top">SodaStream</a>
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

class CocacolaMobile extends Component {
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
                  <h1 className='text-white pb-3'>Soda</h1>
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
                  <h1 className='text-center text-md-left pt-2 pt-lg-5'>About Soda</h1>
                  <Row className='justify-content-center'>
                      <img src={hazelnutSpread} className='img-fluid' height="35%" width="35%"></img>
                  </Row>
                  <p className='text-monospace'>
                    <br></br>
                    You already know the impact soda can have on your health (it’s bad for your blood pressure, teeth, heart, kidney...), but still nothing beats an ice-cold soda on a hot day. Have you thought about the impact each bottle of soda has on the environment though? Coca-Cola alone sells around 3,500 single-use bottles every second! One way or another, most of these bottles end up in the ocean, impacting marine animals.
                    <br></br><br></br>
                    It’s predicted that, if nothing changes, by 2050 plastic in the ocean may outweigh fish.
                  </p>
                </Col>
              </Row>
            </Container>
          </ParallaxLayer>

          <ParallaxLayer offset={1.1} speed={2}>
          </ParallaxLayer>

          {/* Slide Three */}
          <ParallaxLayer offset={2.05} speed={1.5} style={{ pointerEvents: 'none' }}>
            <h1 style={{ width: '70%', marginLeft: '5%' }}>Impact of Soda</h1>
          </ParallaxLayer>
          <ParallaxLayer offset={2.4} speed={6}>
            <img src={nutella01} style={{height: '25%', width: '25%', marginLeft: '5%' }}></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.3} speed={2.8}>
            <img src={nutella02} style={{ display: 'block', height: '25%', width: '25%', marginLeft: '30%' }}></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.5} speed={1}>
            <img src={nutella03} style={{ display: 'block', height: '25%', width: '25%', marginLeft: '50%' }}></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.2} speed={-0.2}>
            <img src={nutella04} style={{ display: 'block', height: '25%', width: '25%', marginLeft: '70%' }}></img>
          </ParallaxLayer>

          {/* Slide Four */}
          <ParallaxLayer offset={3} speed={1} className='grey-background'>
            <Container>
              <Row>
                <Col xs='12'>
                  <h1 className='text-center text-md-left pt-2 pt-lg-5'>How has Soda Impacted Marine Life?</h1>
                  <Row className='justify-content-center'>
                    <img src={orangutanTrees} className='img-fluid'></img>
                    <img src={orangutanStumps} className='img-fluid'></img>
                  </Row>
                  <p className='text-monospace font-italic'>
                    <br></br>
                    “Many people think that plastic soft drink bottles are killing wildlife, and it is a contributor as it breaks down into small pieces. However, plastic bottles are not the main reason for plastics killing wildlife, it is the colorful plastic caps that become separated from the bottles. These colorful plastic caps act as lures, attract animals, and become bite size appetizers for sea turtles, dolphins and fish. The plastic can neither be digested nor passed through by most species. Instead, it clogs their intestinal tract and they die a slow and painful death at sea.” - www.woundednature.org
                  </p>
                </Col>
              </Row>
            </Container>
          </ParallaxLayer>

          {/* Slide Five */}
          <ParallaxLayer offset={4} speed={0.1}>
            <Container fluid={true}>
              <Row>
                <Col xs='12' className='split-horizontal-mobile light-green-background text-white d-flex justify-content-center'>
                  <Row>
                    <h1>How can you help?</h1>
                  </Row>
                </Col>
                <Col className='split-horizontal d-flex justify-content-center'>
                  <ListGroup>
                    <br></br><br></br>
                    <ListGroupItem>
                      <ListGroupItemHeading>Recycle, recycle, recycle</ListGroupItemHeading>
                      <ListGroupItemText>
                        Instead of being recycled, 70% of plastic containers end up in landfills or go directly into the environment. Recycling plastic bottles helps conserve natural resources and energy, while keeping plastic out of the stomachs of marine animals. Aluminum cans and glass bottles are also easily recycled.
                      </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListGroupItemHeading>Drink fountain-style or bring a reusable cup</ListGroupItemHeading>
                      <ListGroupItemText>
                        Rather than buying a bottle or can of soda, choose fountain-style. Better yet, bring your own water in a reusable water bottle. Tap water is free, and you’ll be preventing another bottle or can from ending up in the environment.
                      </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListGroupItemHeading>Invest in at-home soda machines</ListGroupItemHeading>
                      <ListGroupItemText>
                      At-home soda machines allow you to make your own sparkling water and soft drinks. These machines significantly reduce plastic bottle use and at a cost of around 50 cents per liter, will save you money.
                      Try the <a href="https://sodastream.com/" target="_top">SodaStream</a>
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

export default Cocacola;
