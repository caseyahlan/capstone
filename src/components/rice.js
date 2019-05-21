import React, { Component } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Container, Row, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
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
        <MediaQuery query='(max-device-width: 991px)'>
          <RiceMobile />
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
          <ParallaxLayer offset={1.3} speed={4}>
            <img src={rice} height="35%" width="35%" style={{ display: 'block', marginLeft: '65%' }}></img>
          </ParallaxLayer>
          <ParallaxLayer offset={1.2} speed={0.1}>
            <Container>
              <div className='media'>
                <div className='media-body'>
                  <h1 className='text-center text-md-left pt-2 pt-lg-5'>About Rice</h1>
                    <p className='text-monospace body-text'>
                      <br></br>
                      Rice is a nutritious staple food that many communities depend on to survive. However, growing rice produces methane, a greenhouse gas. The methane from rice production contributes to 1.5% of total greenhouse gas emissions, and could continue to grow.
                      <br></br><br></br>
                      Rice is a unique food that produces a lot of methane, but is necessary in communities that grow it and for those that lack a lot of resources for food. Rice production also helps biodiversity for wetland habitats, so it cannot be eliminated without other environmental harm. Therefore, it is crucial to find the balance between competing environmental factors and human need for rice.
                    </p>
                </div>
              </div>
            </Container>
          </ParallaxLayer>
          <ParallaxLayer offset={1.1} speed={2}>
          </ParallaxLayer>

          {/* Slide Three */}
          <ParallaxLayer offset={2.05} speed={1.5} style={{ pointerEvents: 'none' }}>
            <h1 className={'text-monospace'} style={{ width: '70%', marginLeft: '5%' }}>Impact of Bananas</h1>
          </ParallaxLayer>
          <ParallaxLayer offset={2.4} speed={6}>
            <img src={rice04} style={{ display: 'block', height: '40%', width: 'auto', marginLeft: '70%' }}></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.3} speed={2.8}>
            <img src={rice03} style={{ display: 'block', height: '30%', width: 'auto', marginLeft: '50%' }}></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.5} speed={1}>
            <img src={rice02} style={{ display: 'block', height: '30%', width: 'auto', marginLeft: '30%' }}></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.2} speed={-0.2}>
            <img src={rice01} style={{ display: 'block', height: '40%', width: 'auto', marginLeft: '10%' }}></img>
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
          <ParallaxLayer offset={4} speed={0.1}>
            <Container fluid={true}>
              <Row>
                <Col md='6' className='split-vertical light-green-background text-white d-flex align-items-center flex-wrap'>
                  <Row className='px-3'>
                    <h1>What can you do to help?</h1>
                    <p className='text-monospace pt-3'>
                      There are many ways you can reduce your impact. Below is a small list of ways you can help reduce your environmental impact.
                    </p>
                  </Row>
                </Col>
                <Col md='6' className='split-vertical d-flex align-items-center'>
                  <Container>
                    <ListGroup>
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

class RiceMobile extends Component {
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
          <ParallaxLayer offset={1} speed={0.1}>
            <Container>
              <Row>
                <Col xs='12'>
                  <h1 className='text-center text-md-left pt-2 pt-lg-5'>About Rice</h1>
                  <Row className='justify-content-center'>
                      <img src={rice} className='img-fluid' height="35%" width="35%"></img>
                  </Row>
                  <p className='text-monospace'>
                    <br></br>
                    Rice is a nutritious staple food that many communities depend on to survive. However, growing rice produces methane, a greenhouse gas. The methane from rice production contributes to 1.5% of total greenhouse gas emissions, and could continue to grow.
                    <br></br><br></br>
                    Rice is a unique food that produces a lot of methane, but is necessary in communities that grow it and for those that lack a lot of resources for food. Rice production also helps biodiversity for wetland habitats, so it cannot be eliminated without other environmental harm. Therefore, it is crucial to find the balance between competing environmental factors and human need for rice.
                  </p>
                </Col>
              </Row>
            </Container>
          </ParallaxLayer>

          <ParallaxLayer offset={1.1} speed={2}>
          </ParallaxLayer>

          {/* Slide Three */}
          <ParallaxLayer offset={2.05} speed={1.5} style={{ pointerEvents: 'none' }}>
            <h1 style={{ width: '70%', marginLeft: '5%' }}>Impact of Bananas</h1>
          </ParallaxLayer>
          <ParallaxLayer offset={2.4} speed={6}>
            <img src={rice04} style={{height: '25%', width: '25%', marginLeft: '5%' }}></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.3} speed={2.8}>
            <img src={rice03} style={{ display: 'block', height: '25%', width: '25%', marginLeft: '30%' }}></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.5} speed={1}>
            <img src={rice02} style={{ display: 'block', height: '25%', width: '25%', marginLeft: '50%' }}></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.2} speed={-0.2}>
            <img src={rice01} style={{ display: 'block', height: '25%', width: '25%', marginLeft: '70%' }}></img>
          </ParallaxLayer>

          {/* Slide Four */}
          <ParallaxLayer offset={3} speed={1} className='grey-background'>
            <Container>
              <Row>
                <Col xs='12'>
                  <h1 className='text-center text-md-left pt-2 pt-lg-5'>How has Rice Impacted Asian Wetland habitats?</h1>
                  <Row className='justify-content-center'>
                  </Row>
                  <p className='text-monospace font-italic'>
                    <br></br>
                    “In Asia, wetland habitats are at grave risk globally and as a result, there are great concerns on the rates of loss of biological diversity. Rice agricultural systems provide important human-modified wetlands for wildlife. In the ecosystem service context, flooded rice environments provide important ‘supporting services’ for wildlife through their extensive water networks. In turn, the abundance of diverse species supported by the rice ecosystem provides a number of ecosystem services to humanity.” www.irri.org
                    <br></br><br></br>
                    So, what do we do?
                    <br></br><br></br>
                    “Feeding the world and saving the planet have to become mutual goals if we are to meet the demands of a billion extra people by 2030, while keeping global warming below the 1.5°C critical risk threshold.” - www.eco-business.com
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
                    <br></br>
                    <p>There are many ways you can reduce your impact. Below is a small list of ways you can help reduce your environmental impact.</p>
                    <br></br><br></br>
                  </Row>
                </Col>
                <Col className='split-horizontal d-flex justify-content-center'>
                  <ListGroup>
                    <br></br><br></br>
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

export default Rice;
