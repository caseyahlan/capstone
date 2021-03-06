import React, { Component } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Container, Row, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Button, UncontrolledPopover } from 'reactstrap';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import hazelnutSpread from '../imgs/hazelnutSpread-04.svg';
import orangutanStumps from '../imgs/orangutanStumps-07.svg';
import orangutanTrees from '../imgs/orangutanTrees-07.svg';
import nutella01 from '../imgs/nutella1.svg';
import nutella02 from '../imgs/nutella2.svg';
import nutella03 from '../imgs/nutella3-01.svg';
import nutella04 from '../imgs/nutella4-01.svg';

class Nutella extends Component {
  render() {
    return (
      <div>
        <MediaQuery query='(min-device-width: 991px)'>
          <NutellaDesktop />
        </MediaQuery>
      </div>
    )
  }
}

class NutellaDesktop extends Component {
  render() {
    return (
      <div>
        <Link to='/'><Button close id='PopoverHover' type='button' className='floating x-btn'/></Link>
        <UncontrolledPopover innerClassName='goHomePopover' hideArrow='true' trigger="hover" placement="left" target="PopoverHover">
          <div>go home</div>
        </UncontrolledPopover>
        <Parallax ref={ref => (this.parallax = ref)} pages={7}>

          {/* Slide One */}
          <ParallaxLayer
            offset={0}
            speed={0.1}
            onClick={() => this.parallax.scrollTo(1)}>
            <Container fluid={true}>
              <Row>
                <Col xs='12' className='split-horizontal light-green-background d-flex justify-content-center align-items-end'>
                  <h1 className='text-white pb-3'>Nutella</h1>
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
                <h1 className='text-center text-md-left pt-2 pt-lg-5'>About Nutella</h1>
                  <p className='text-monospace body-text'>
                    <br></br>
                    Nutella is a popular hazelnut spread that is commonly used in many food products. Currently, there are 7
                    well known ingredients: sugar, palm oil, hazelnuts, cocoa, milk, soy, and vanilla.
                    <br></br><br></br>
                    Just by looking at the ingredients, Nutella seems like a perfect choice for many recipes. However, Nutella’s
                    heavy use of palm oil spreads damage to the environment.
                  </p>
                </ParallaxLayer>
              </Col>
              <Col sm={4}>
                <ParallaxLayer offset={1.1} speed={4}>
                  <img src={hazelnutSpread} height="75%" width="75%" style={{ display: 'block', marginLeft: '35%' }} alt='nutella'></img>
                </ParallaxLayer>
              </Col>
            </Row>
          </Container>
          <ParallaxLayer offset={1.1} speed={2}>
          </ParallaxLayer>

          {/* Slide Three */}
          <ParallaxLayer offset={2.05} speed={1.5} style={{ pointerEvents: 'none' }}>
            <h1 className={'text-monospace'} style={{ width: '70%', marginLeft: '5%' }}>Impact of Palm Oil</h1>
          </ParallaxLayer>
          <ParallaxLayer offset={2.4} speed={6}>
            <img src={nutella04} style={{ display: 'block', height: '40%', width: 'auto', marginLeft: '70%' }} alt='informational circle'></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.3} speed={2.8}>
            <img src={nutella03} style={{ display: 'block', height: '30%', width: 'auto', marginLeft: '50%' }} alt='informational circle'></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.5} speed={1}>
            <img src={nutella02} style={{ display: 'block', height: '30%', width: 'auto', marginLeft: '30%' }} alt='informational circle'></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.2} speed={-0.2}>
            <img src={nutella01} style={{ display: 'block', height: '40%', width: 'auto', marginLeft: '10%' }} alt='informational circle'></img>
          </ParallaxLayer>

          {/* Slide Four */}
          <ParallaxLayer offset={3} speed={1} className='grey-background'/>
          <Container>
            <Row>
              <Col sm={8}>
                <ParallaxLayer offset={3.2} speed={0.1}>
                <h1 className='text-center text-md-left pt-2 pt-lg-5'>How has Nutella Impacted Orangutans?</h1>
                  <p className='text-monospace body-text'>
                    <br></br>
                    “Over 50,000 orangutans on the islands of Borneo and Sumatra have died because of palm oil deforestation.
                    Orangutans whose habitats have been destroyed often enter villages and oil plantations in search of food
                    where they are captured or killed by farmers who treat them as pests.  In 2016, it was reported that just
                    45,000 orangutans remained in Borneo and at this rate, they will be extinct in the wild in just 25 years”.
                    -orangutantrekkingtours.com
                  </p>
                </ParallaxLayer>
              </Col>
              <Col sm={2}>
                <ParallaxLayer offset={3.1} speed={4}>
                  <img src={orangutanTrees} height="100%" width="100%" style={{ display: 'block', marginLeft: '35%' }} alt='trees with orangutans'></img>
                </ParallaxLayer>
              </Col>
              <Col sm={2}>
                <ParallaxLayer offset={3.1} speed={4}>
                  <img src={orangutanStumps} height="100%" width="100%" style={{ display: 'block', marginLeft: '35%' }} alt='stumps of cut down trees with sad orangutans'></img>
                </ParallaxLayer>
              </Col>
            </Row>
          </Container>
          <ParallaxLayer offset={3.1} speed={2}>
          </ParallaxLayer>

          {/* Slide Five */}
          <Row>
            <Col md='6'>
              <ParallaxLayer offset={4} speed={0.5} onClick={() => this.parallax.scrollTo(5)}>
                <div className='split-vertical light-green-background text-white d-flex align-items-center flex-wrap container'>
                  <Row className='px-3'>
                    <h1>Alternatives to popular products that use palm oil</h1>
                    <p className='text-monospace pt-3'>
                      There are many products that use palm oil. This is a small list of those products and possible alternatives for them.
                    </p>
                  </Row>
                </div>
              </ParallaxLayer>
            </Col>
            <Col md='6'>
              <ParallaxLayer offset={4} speed={1.5} onClick={() => this.parallax.scrollTo(5)}>
                <div className='split-vertical d-flex align-items-center container'>
                  <ListGroup flush>
                    <ListGroupItem>
                      <ListGroupItemHeading>Nutella</ListGroupItemHeading>
                      <ListGroupItemText>Try <a href="https://rigonidiasiago-usa.com/our-products/nocciolata/organic-hazelnut-spread-with-cocoa-and-milk/" target="_blank">Nicciolata Organic Hazelnut Spread with Cocoa & Milk</a>; this product is also GMO Free</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListGroupItemHeading>Clif Bar</ListGroupItemHeading>
                      <ListGroupItemText>Try <a href="https://www.amazon.com/dp/B01MYU64E4/?tag=onegrepla-20&th=1" target="_blank">Health Warriors Chia Bar</a>; this product is 100 calories and has 3g of sugar</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListGroupItemHeading>JIF Peanut Butter</ListGroupItemHeading>
                      <ListGroupItemText>Try <a href="https://www.amazon.com/dp/B079Y59DV2/?tag=onegrepla-20&th=1" target="_blank">Wild Friends Foods Chocolate Coconut Peanut Butter</a>; this product is kosher and gluten-free</ListGroupItemText>
                    </ListGroupItem>
                  </ListGroup>
                </div>
              </ParallaxLayer>
            </Col>
          </Row>

          {/* Slide Six */}
          <Row>
            <Col md='6'>
              <ParallaxLayer offset={5} speed={0.5} >
                <div className='split-vertical light-green-background text-white d-flex align-items-center flex-wrap container'>
                  <Row className='px-3'>
                    <h1>What can you do to help?</h1>
                    <p className='text-monospace pt-3'>
                      There are many ways you can reduce your impact. This is a small list of ways you can help reduce your environmental impact.
                    </p>
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
                        Consider buying alternative products that do not use palm oil. While it is impossible to completely avoid palm oil products,
                        reducing purchases of these products is a start to reducing demand of palm oil products.
                      </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListGroupItemHeading>Research alternatives</ListGroupItemHeading>
                      <ListGroupItemText>
                        Palm oil is used in other products such as soaps, shampoos, detergents, etc. Research
                        the ingredients in products you use and try to find alternatives.
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

          {/* <ParallaxLayer
            offset={4}
            speed={0.1}
            onClick={() => this.parallax.scrollTo(5)}>
          </ParallaxLayer> */}

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
      </div>
    )
  }
}

export default Nutella;
