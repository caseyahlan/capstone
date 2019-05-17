import React, { Component } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Container, Row, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import MediaQuery from 'react-responsive';
import cow from '../imgs/cow-02.svg';
import circles from '../imgs/circles.svg';
import apple from '../imgs/apple-03.svg';
import crepe from '../imgs/crepe-05.svg';
import strawberry from '../imgs/strawberry-02.svg';
import toast from '../imgs/toast-06.svg';
import orangutanStumps from '../imgs/orangutanStumps-07.svg';
import orangutanTrees from '../imgs/orangutanTrees-07.svg';
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
        <MediaQuery query='(max-device-width: 991px)'>
          <HamburgerMobile />
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
          <ParallaxLayer offset={1} speed={0.1}>
            <Container>
              <div className='media'>
                <div className='media-body'>
                  <h1 className='text-center text-md-left pt-2 pt-lg-5'>About the Beef Industry</h1>
                    <p className='text-monospace body-text'>
                      <br></br>
                      Hamburgers are a staple food from barbecues to 3-star restaurants. In the United States, people eat over 50 billion hamburgers every year! What you might not realize is that eating meat has more of an environmental impact than almost any other food we eat.
                      <br></br><br></br>
                      Raising cows requires a lot of food, water, land, and energy.
                    </p>
                </div>
                <img src={cow} className='align-self-center' height="35%" width="35%"></img>
              </div>
            </Container>
          </ParallaxLayer>

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
          <ParallaxLayer offset={3} speed={1} className='grey-background'>
            <Container>
              <div className='media'>
                <div className='media-body px-3'>
                  <h1 className='text-left mt-4'>How has the Beef Industry Impacted the Amazon Rainforest?</h1>
                  <p className='text-monospace font-italic'>
                    <br></br>
                    “Each year, millions of hectares of forest are cleared for beef pasture, releasing carbon into the atmosphere and destroying habitat of endangered species. The deforestation impact of beef is greatest in South America, where beef was responsible for nearly three-quarters of total deforestation between 1990 and 2005.” - www.ucsusa.org
                  </p>
                </div>
                <img src={orangutanTrees} className='align-self-center' height="25%" width="25%"></img>
                <img src={orangutanStumps} className='align-self-center' height="25%" width="25%"></img>
              </div>
            </Container>
          </ParallaxLayer>

          {/* Slide Five */}
          <ParallaxLayer offset={4} speed={0.5}>
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

class HamburgerMobile extends Component {
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
          <ParallaxLayer offset={1} speed={0.1}>
            <Container>
              <Row>
                <Col xs='12'>
                  <h1 className='text-center text-md-left pt-2 pt-lg-5'>About the Beef Industry</h1>
                  <Row className='justify-content-center'>
                      <img src={cow} className='img-fluid' height="35%" width="35%"></img>
                  </Row>
                  <p className='text-monospace'>
                    <br></br>
                    Hamburgers are a staple food from barbecues to 3-star restaurants. In the United States, people eat over 50 billion hamburgers every year! What you might not realize is that eating meat has more of an environmental impact than almost any other food we eat.
                    <br></br><br></br>
                    Raising cows requires a lot of food, water, land, and energy.
                  </p>
                </Col>
              </Row>
            </Container>
          </ParallaxLayer>

          <ParallaxLayer offset={1.1} speed={2}>
          </ParallaxLayer>

          {/* Slide Three */}
          <ParallaxLayer offset={2.05} speed={1.5} style={{ pointerEvents: 'none' }}>
            <h1 style={{ width: '70%', marginLeft: '5%' }}>Impacts of Beef</h1>
          </ParallaxLayer>
          <ParallaxLayer offset={2.4} speed={6}>
            <img src={hamburger1} style={{height: '25%', width: '25%', marginLeft: '5%' }}></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.3} speed={2.8}>
            <img src={hamburger2} style={{ display: 'block', height: '25%', width: '25%', marginLeft: '30%' }}></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.5} speed={1}>
            <img src={hamburger3} style={{ display: 'block', height: '25%', width: '25%', marginLeft: '50%' }}></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.2} speed={-0.2}>
            <img src={hamburger4} style={{ display: 'block', height: '25%', width: '25%', marginLeft: '70%' }}></img>
          </ParallaxLayer>

          {/* Slide Four */}
          <ParallaxLayer offset={3} speed={1} className='grey-background'>
            <Container>
              <Row>
                <Col xs='12'>
                  <h1 className='text-center text-md-left pt-2 pt-lg-5'>How has the Beef Industry Impacted the Amazon Rainforest?</h1>
                  <Row className='justify-content-center'>
                    <img src={orangutanTrees} className='img-fluid'></img>
                    <img src={orangutanStumps} className='img-fluid'></img>
                  </Row>
                  <p className='text-monospace font-italic'>
                    <br></br>
                    “Each year, millions of hectares of forest are cleared for beef pasture, releasing carbon into the atmosphere and destroying habitat of endangered species. The deforestation impact of beef is greatest in South America, where beef was responsible for nearly three-quarters of total deforestation between 1990 and 2005.” - www.ucsusa.org
                  </p>
                </Col>
              </Row>
            </Container>
          </ParallaxLayer>

          {/* Slide Five */}
          <ParallaxLayer offset={4} speed={0.5}>
            <Container>
              <Row>
                <Col xs='12' className='split-horizontal-mobile light-green-background text-white d-flex justify-content-center'>
                  <Row>
                    <h1>What can you do to help?</h1>
                    <br></br><br></br>
                  </Row>
                </Col>
                <Col className='split-horizontal d-flex justify-content-center'>
                  <ListGroup>
                    <br></br><br></br>
                    <ListGroupItem>
                      <ListGroupItemHeading>Reduce consumption of beef</ListGroupItemHeading>
                      <ListGroupItemText>Reduce your portion size or try a blended burger. Blended burgers combine mushroom and beef to create a patty with less fat and fewer calories than a beef burger.</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListGroupItemHeading>Choose beef alternatives</ListGroupItemHeading>
                      <ListGroupItemText>The Impossible™ burger and Beyond Burger® are made from plants, but have the flavor, smell, and look of beef.
                      <br></br>
                      Find a grocery store that sells Impossible™ burgers: impossiblefoods.com/locations/
                      Here’s a Beyond Burger® location finder: impossiblefoods.com/locations/
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

export default Hamburger;
