import React, { Component } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Container, Row, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import bread from '../imgs/bread-01.svg';
import bread01 from '../imgs/bread1-01.svg';
import bread02 from '../imgs/bread2-01.svg';
import bread03 from '../imgs/bread3-01.svg';
import bread04 from '../imgs/bread4-01.svg';
import wetland from '../imgs/wetlands-04.svg';

class Bread extends Component {
  render() {
    return (
      <div>
        <MediaQuery query='(min-device-width: 991px)'>
          <BreadDesktop />
        </MediaQuery>
      </div>
    )
  }
}

class BreadDesktop extends Component {
  render() {
    return (
      <div>
        <Link to='/'><Button close id='PopoverHover' type='button' className='floating x-btn'/></Link>
        <Parallax ref={ref => (this.parallax = ref)} pages={7}>

          {/* Slide One */}
          <ParallaxLayer
            offset={0}
            speed={0.1}
            onClick={() => this.parallax.scrollTo(1)}>
            <Container fluid={true}>
              <Row>
                <Col xs='12' className='split-horizontal light-green-background d-flex justify-content-center align-items-end'>
                  <h1 className='text-white pb-3'>Bread</h1>
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
                <ParallaxLayer offset={1} speed={0.1}>
                <h1 className='text-center text-md-left pt-2'>About Bread</h1>
                  <p className='text-monospace body-text'>
                    <br></br>
                    Did you know that almost 50% of people in the United States eat a sandwich every day? That’s a lot of bread! Bread in its many forms is widely loved all over the world.
                    <br></br><br></br>
                    With the high consumption of this tasty food comes a significant impact to the environment. The production of wheat currently relies heavily on fertilizers, which release harmful emissions and contribute to greenhouse gases. It might be time to think twice before making PB&J for your midnight snack.
                  </p>
                </ParallaxLayer>
              </Col>
              <Col sm={4}>
                <ParallaxLayer offset={1.1} speed={4}>
                  <img src={bread} height="75%" width="75%" style={{ display: 'block', marginLeft: '35%' }} alt='bread'></img>
                </ParallaxLayer>
              </Col>
            </Row>
          </Container>
          <ParallaxLayer offset={1.1} speed={2}>
          </ParallaxLayer>

          {/* Slide Three */}
          <ParallaxLayer offset={2.05} speed={1.5} style={{ pointerEvents: 'none' }}>
            <h1 className={'text-monospace'} style={{ width: '70%', marginLeft: '5%' }}>Impact of Bread</h1>
          </ParallaxLayer>
          <ParallaxLayer offset={2.4} speed={6}>
            <img src={bread04} style={{ display: 'block', height: '40%', width: 'auto', marginLeft: '70%' }} alt='informational circle'></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.3} speed={2.8}>
            <img src={bread03} style={{ display: 'block', height: '30%', width: 'auto', marginLeft: '50%' }} alt='informational circle'></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.5} speed={1}>
            <img src={bread02} style={{ display: 'block', height: '30%', width: 'auto', marginLeft: '30%' }} alt='informational circle'></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.2} speed={-0.2}>
            <img src={bread01} style={{ display: 'block', height: '40%', width: 'auto', marginLeft: '10%' }} alt='informational circle'></img>
          </ParallaxLayer>

          {/* Slide Four */}
          <ParallaxLayer offset={3} speed={1} className='grey-background'/>
          <Container>
            <Row>
              <Col sm={9}>
                <ParallaxLayer offset={3} speed={0.1}>
                <h1 className='text-center text-md-left pt-2'>How has Bread Impacted the Gulf of Mexico?</h1>
                  <p className='text-monospace body-text'>
                    <br></br>
                    “The enormous “dead zone” in the Gulf of Mexico will take decades to recover even if the flow of farming chemicals that is causing the damage is completely halted, new research has warned.
                    Intensive agriculture has led to fertilizers leeching into the river, and ultimately the Gulf of Mexico, via soils and waterways. 
                    Fertilizers spilling into the oceans promote the growth of algae, which can trigger toxic blooms harmful to fish, shellfish, marine mammals and birds. These outbreaks can discolour water and befoul beaches. It also depletes oxygen in the water, leading to further damage to marine creatures and dwindling supplies for the people who rely upon them for food.” - www.theguardian.com
                  </p>
                </ParallaxLayer>
              </Col>
              <Col sm={3}>
                <ParallaxLayer offset={3.1} speed={4}>
                  <img src={wetland} height="100%" width="100%" style={{ display: 'block', marginLeft: '35%' }} alt='wetland'></img>
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
                      <ListGroupItemHeading>Buy from local bakeries</ListGroupItemHeading>
                      <ListGroupItemText>
                        Buying from local bakeries that use clean ingredients is a good place to start in reducing the impact your bread has on the environment. Buying locally reduces emissions from the transportation of ingredients and is a good way to start a conversation with farmers about how they are growing their crops.
                      </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListGroupItemHeading>Reduce food waste</ListGroupItemHeading>
                      <ListGroupItemText>
                        If bread is something you can’t eliminate from your diet (let’s be realistic here), then be sure to be a responsible buyer and eater. Plan how you’re going to finish the loaf before it gets moldy by meal planning or sharing the loaf with your roommates or family.
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
      </div>
    )
  }
}

export default Bread;
