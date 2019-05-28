import React, { Component } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Container, Row, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import rice from '../imgs/rice-bowl.svg';
import rice01 from '../imgs/rice1-01.svg';
import rice02 from '../imgs/rice2-01.svg';
import rice03 from '../imgs/rice3-01.svg';
import rice04 from '../imgs/milk4-01.svg';

class Rice extends Component {
  render() {
    return (
      <div>
        <MediaQuery query='(min-device-width: 991px)'>
          <RiceDesktop />
        </MediaQuery>
      </div>
    )
  }
}

class RiceDesktop extends Component {
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
                  <h1 className='text-white pb-3'>Rice</h1>
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
                        <h1 className='text-center text-md-left pt-2 pt-lg-5'>About Rice</h1>
                          <p className='text-monospace body-text'>
                            <br></br>
                            Rice is a nutritious staple food that many communities depend on to survive. However, growing rice produces methane, a greenhouse gas. The methane from rice production contributes to 1.5% of total greenhouse gas emissions, and could continue to grow.
                            <br></br><br></br>
                            Rice is a unique food that produces a lot of methane, but is necessary in communities that grow it and for those that lack a lot of resources for food. Rice production also helps biodiversity for wetland habitats, so it cannot be eliminated without other environmental harm. Therefore, it is crucial to find the balance between competing environmental factors and human need for rice.
                          </p>
                      {/* </div> */}
                    {/* </div> */}
                </ParallaxLayer>
              </Col>
              <Col sm={4}>
                <ParallaxLayer offset={1.1} speed={4}>
                  <img src={rice} height="75%" width="75%" style={{ display: 'block', marginLeft: '35%' }} alt='rice'></img>
                </ParallaxLayer>
              </Col>
            </Row>
          </Container>
          <ParallaxLayer offset={1.1} speed={2}>
          </ParallaxLayer>

          {/* Slide Three */}
          <ParallaxLayer offset={2.05} speed={1.5} style={{ pointerEvents: 'none' }}>
            <h1 className={'text-monospace'} style={{ width: '70%', marginLeft: '5%' }}>Impact of Bananas</h1>
          </ParallaxLayer>
          <ParallaxLayer offset={2.4} speed={6}>
            <img src={rice04} style={{ display: 'block', height: '40%', width: 'auto', marginLeft: '70%' }} alt='informational circle'></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.3} speed={2.8}>
            <img src={rice03} style={{ display: 'block', height: '30%', width: 'auto', marginLeft: '50%' }} alt='informational circle'></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.5} speed={1}>
            <img src={rice02} style={{ display: 'block', height: '30%', width: 'auto', marginLeft: '30%' }} alt='informational circle'></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.2} speed={-0.2}>
            <img src={rice01} style={{ display: 'block', height: '40%', width: 'auto', marginLeft: '10%' }} alt='informational circle'></img>
          </ParallaxLayer>

          {/* Slide Four */}
          <ParallaxLayer offset={3} speed={1} className='grey-background'/>
          <ParallaxLayer offset={3.15} speed={1}>
            <Container>
              <div className='media'>
                <div className='media-body px-3'>
                  <h1 className='text-left mt-4'>How has Rice Impacted Asian Wetland habitats?</h1>
                  <p className='text-monospace font-italic'>
                    <br></br>
                    “In Asia, wetland habitats are at grave risk globally and as a result, there are great concerns on the rates of loss of biological diversity. Rice agricultural systems provide important human-modified wetlands for wildlife. In the ecosystem service context, flooded rice environments provide important ‘supporting services’ for wildlife through their extensive water networks. In turn, the abundance of diverse species supported by the rice ecosystem provides a number of ecosystem services to humanity.” www.irri.org
                    <br></br><br></br>
                    So, what do we do?
                    <br></br><br></br>
                    “Feeding the world and saving the planet have to become mutual goals if we are to meet the demands of a billion extra people by 2030, while keeping global warming below the 1.5°C critical risk threshold.” - www.eco-business.com
                  </p>
                </div>
              </div>
            </Container>
          </ParallaxLayer>

          {/* Slide Five */}
          <Row>
            <Col md='6'>
              <ParallaxLayer offset={4} speed={0.5}>
                <div className='split-vertical light-green-background text-white d-flex align-items-center flex-wrap container'>
                  <Row className='px-3'>
                    <h1>What can you do to help?</h1>
                    <p className='text-monospace pt-3'>
                      There are many ways you can reduce your impact. Below is a small list of ways you can help reduce your environmental impact.
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
                      <ListGroupItemHeading>Buy rice alternatives</ListGroupItemHeading>
                      <ListGroupItemText>
                        There are many alternatives available for rice such as quinoa, barley, amaranth, and cauliflower. Although it is not necessary to completely stop consumption of rice, eating rice alternatives can lower the demand of rice, so less is produced.
                      </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListGroupItemHeading>Reduce rice consumption</ListGroupItemHeading>
                      <ListGroupItemText>
                        By reducing rice consumption, demand may lower and therefore less methane may be produced. While it is important to reduce methane pollution from rice, rice is still an important crop. It is important to find the balance between its importance and harm, so reducing consumption, without completely eliminating it is a good way to start.
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
    )
  }
}

export default Rice;
