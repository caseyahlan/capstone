import React, { Component } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Container, Row, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import MediaQuery from 'react-responsive';
import soDelicious from '../imgs/soDelicious-02.svg';
import oatly from '../imgs/oatly-02.svg';
import ripple from '../imgs/ripple-02.svg';
import tempt from '../imgs/tempt-02.svg';
import cow from '../imgs/cow-02.svg';
import milk from '../imgs/milk-02.svg';
import milk1 from '../imgs/milk1-01.svg';
import milk2 from '../imgs/milk2-01.svg';
import milk3 from '../imgs/milk3-01.svg';
import milk4 from '../imgs/milk4-01.svg';
import river from '../imgs/contaminatedRiver-02.svg';
import x from '../imgs/x-02.svg';
import plus from '../imgs/+-02.svg';

class Milk extends Component {
  render() {
    return (
      <div>
        <MediaQuery query='(min-device-width: 991px)'>
          <MilkDesktop />
        </MediaQuery>
        <MediaQuery query='(max-device-width: 991px)'>
          <MilkMobile />
        </MediaQuery>
      </div>
    )
  }
}

class MilkDesktop extends Component {
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
                  <h1 className='text-white pb-3'>Milk</h1>
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
            <img src={milk} height="35%" width="35%" style={{ display: 'block', marginLeft: '65%' }}></img>
          </ParallaxLayer>
          <ParallaxLayer offset={1.2} speed={0.1}>
            <Container>
              <div className='media'>
                <div className='media-body'>
                  <h1 className='text-center text-md-left pt-2 pt-lg-5'>About the Dairy Industry</h1>
                    <p className='text-monospace body-text'>
                      <br></br>
                      Dairy farmers are essential members of local communities and it’s estimated that the dairy industry creates 900,000 jobs in the United States alone.
                      <br></br><br></br>
                      While some dairy farmers take special care of their animals and local environment, the demand for milk and other dairy products has dramatically impacted the dairy industry. More than 50% of milk is produced by just 3% of dairies in the United States.
                    </p>
                </div>
              </div>
            </Container>
          </ParallaxLayer>

          <ParallaxLayer offset={1.1} speed={2}>
          </ParallaxLayer>

          {/* Slide Three */}
          <ParallaxLayer offset={2.05} speed={1.5} style={{ pointerEvents: 'none' }}>
            <h1 style={{ width: '70%', marginLeft: '5%' }}>Impacts of Milk</h1>
          </ParallaxLayer>
          <ParallaxLayer offset={2.4} speed={6}>
            <img src={milk4} style={{ display: 'block', height: '40%', width: 'auto', marginLeft: '70%' }}></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.3} speed={2.8}>
            <img src={milk3} style={{ display: 'block', height: '30%', width: 'auto', marginLeft: '50%' }}></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.5} speed={1}>
            <img src={milk2} style={{ display: 'block', height: '30%', width: 'auto', marginLeft: '30%' }}></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.2} speed={-0.2}>
            <img src={milk1} style={{ display: 'block', height: '40%', width: 'auto', marginLeft: '10%' }}></img>
          </ParallaxLayer>

          {/* Slide Four */}
          <ParallaxLayer offset={3} speed={1} className='grey-background'/>
          <ParallaxLayer offset={3.15} speed={1}>
            <Container>
              <div className='media'>
                <div className='media-body px-3'>
                  <h1 className='text-left mt-4'>How has Dairy Impacted Groundwater?</h1>
                  <p className='text-monospace font-italic'>
                    <br></br>
                    “In Yakima, Washington, the Community Association for Restoration of the Environment and the Center for Food Safety allege in an ongoing lawsuit now in federal court that manure spreading by five large dairies has caused nitrate and other contamination of groundwater and violates the federal Resource Conservation and Recovery Act (RCRA).” - e360.yale.edu
                  </p>
                </div>
              </div>
            </Container>
          </ParallaxLayer>
          <ParallaxLayer offset={3.53} speed={0.4}>
            <img src={river} style={{ display: 'block', height: '25%', width: 'auto', marginLeft: '30%' }}></img>
          </ParallaxLayer>

          {/* Slide Five */}
          <ParallaxLayer offset={4} speed={0.5}>
            <Container fluid={true}>
              <Row>
                <Col md='6' className='split-vertical light-green-background text-white d-flex align-items-center flex-wrap'>
                  <Row className='px-3'>
                    <h1>Should you try dairy alternatives?</h1>
                    <p className='text-monospace pt-3'>
                      There are many alternatice milk products. Below is a small list of those products and their associated benefits or drawbacks.
                    </p>
                  </Row>
                </Col>
                <Col md='6' className='split-vertical d-flex align-items-center'>
                  <Container>
                    <ListGroup>
                      <ListGroupItem>
                        <img src={x} className='align-self-center' height="5%" width="5%"></img>
                        <ListGroupItemHeading>Almond milk</ListGroupItemHeading>
                        <ListGroupItemText>Almond milk is a $1 billion+ industry. But, it takes a little over a gallon to grow just one almond! Plus, many almonds come from California, which has suffered from droughts in recent years. This alternative is not suggested. </ListGroupItemText>
                      </ListGroupItem>
                      <ListGroupItem>
                      <img src={plus} className='align-self-center' height="5%" width="5%"></img>
                        <ListGroupItemHeading>Hemp milk</ListGroupItemHeading>
                        <ListGroupItemText>Hemp is hardy, so less pesticides and sprays are needed to combat weeds. Hemp filters out carbon dioxide to combat greenhouse gases. Just about every part of the hemp plant is usable, resulting in less waste. This is a great alternative!</ListGroupItemText>
                      </ListGroupItem>
                      <ListGroupItem>
                      <img src={plus} className='align-self-center' height="5%" width="5%"></img>
                        <ListGroupItemHeading>Coconut milk</ListGroupItemHeading>
                        <ListGroupItemText>Coconut farms are eco-friendly and use small amounts of water. Coconut trees can also filter out carbon dioxide to combat greenhouse gases. This is a great alternative!</ListGroupItemText>
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
                <Col md='6' className='split-vertical light-green-background text-white d-flex align-items-center flex-wrap'>
                  <Row className='px-3'>
                    <h1>So, what can you do to help?</h1>
                    <p className='text-monospace pt-3'>
                      There are many ways you can reduce your impact. Below is a small list of ways you can help reduce your environmental impact.
                    </p>
                  </Row>
                </Col>
                <Col md='6' className='split-vertical d-flex align-items-center'>
                  <Container>
                    <ListGroup>
                      <ListGroupItem>
                        <ListGroupItemHeading>Choose dairy alternatives</ListGroupItemHeading>
                        <ListGroupItemText>
                          Coconut, hemp, oat, and pea milk are all great alternatives to dairy products. The suggested alternative to stay away from is almond milk as it has its own environmental impacts.
                        </ListGroupItemText>
                      </ListGroupItem>
                      <ListGroupItem>
                        <ListGroupItemHeading>Consider trying these brands:</ListGroupItemHeading>
                        <ListGroupItemText>
                        <img src={oatly} className='img-fluid' height="25%" width="25%"></img>
                        <img src={tempt} className='img-fluid' height="25%" width="25%"></img>
                        <img src={soDelicious} className='img-fluid' height="25%" width="25%"></img>
                        <img src={ripple} className='img-fluid' height="25%" width="25%"></img>
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

class MilkMobile extends Component {
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
                  <h1 className='text-white pb-3'>Milk</h1>
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
                  <h1 className='text-center text-md-left pt-2 pt-lg-5'>About the Dairy Industry</h1>
                  <Row className='justify-content-center'>
                      <img src={milk} className='img-fluid' height="35%" width="35%"></img>
                  </Row>
                  <p className='text-monospace'>
                    <br></br>
                    Dairy farmers are essential members of local communities and it’s estimated that the dairy industry creates 900,000 jobs in the United States alone.
                    <br></br><br></br>
                    While some dairy farmers take special care of their animals and local environment, the demand for milk and other dairy products has dramatically impacted the dairy industry. More than 50% of milk is produced by just 3% of dairies in the United States.
                  </p>
                </Col>
              </Row>
            </Container>
          </ParallaxLayer>

          <ParallaxLayer offset={1.1} speed={2}>
          </ParallaxLayer>

          {/* Slide Three */}
          <ParallaxLayer offset={2.05} speed={1.5} style={{ pointerEvents: 'none' }}>
            <h1 style={{ width: '70%', marginLeft: '5%' }}>Impacts of Milk</h1>
          </ParallaxLayer>
          <ParallaxLayer offset={2.4} speed={6}>
            <img src={milk1} style={{height: '25%', width: '25%', marginLeft: '5%' }}></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.3} speed={2.8}>
            <img src={milk2} style={{ display: 'block', height: '25%', width: '25%', marginLeft: '30%' }}></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.5} speed={1}>
            <img src={milk3} style={{ display: 'block', height: '25%', width: '25%', marginLeft: '50%' }}></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.2} speed={-0.2}>
            <img src={milk4} style={{ display: 'block', height: '25%', width: '25%', marginLeft: '70%' }}></img>
          </ParallaxLayer>

          {/* Slide Four */}
          <ParallaxLayer offset={3} speed={1} className='grey-background'>
            <Container>
              <Row>
                <Col xs='12'>
                  <h1 className='text-center text-md-left pt-2 pt-lg-5'>How has Dairy Impacted Groundwater?</h1>
                  <Row className='justify-content-center'>
                    <img src={river} className='img-fluid'></img>
                  </Row>
                  <p className='text-monospace font-italic'>
                    <br></br>
                    “In Yakima, Washington, the Community Association for Restoration of the Environment and the Center for Food Safety allege in an ongoing lawsuit now in federal court that manure spreading by five large dairies has caused nitrate and other contamination of groundwater and violates the federal Resource Conservation and Recovery Act (RCRA)." - e360.yale.edu
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
                    <h1>Should you try dairy alternatives?</h1>
                    <br></br>
                    <p>There are many alternatice milk products. Below is a small list of those products and their associated benefits or drawbacks.</p>
                    <br></br><br></br>
                  </Row>
                </Col>
                <Col className='split-horizontal d-flex justify-content-center'>
                  <ListGroup>
                    <br></br><br></br>
                    <ListGroupItem>
                      <img src={x} className='align-self-center' height="5%" width="5%"></img>
                      <ListGroupItemHeading>Almond milk</ListGroupItemHeading>
                      <ListGroupItemText>Almond milk is a $1 billion+ industry. But, it takes a little over a gallon to grow just one almond! Plus, many almonds come from California, which has suffered from droughts in recent years. This alternative is not suggested.</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                      <img src={plus} className='align-self-center' height="5%" width="5%"></img>
                      <ListGroupItemHeading>Hemp milk</ListGroupItemHeading>
                      <ListGroupItemText>Hemp is hardy, so less pesticides and sprays are needed to combat weeds. Hemp filters out carbon dioxide to combat greenhouse gases. Just about every part of the hemp plant is usable, resulting in less waste. This is a great alternative!</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                      <img src={plus} className='align-self-center' height="5%" width="5%"></img>
                      <ListGroupItemHeading>Coconut milk</ListGroupItemHeading>
                      <ListGroupItemText>Coconut farms are eco-friendly and use small amounts of water. Coconut trees can also filter out carbon dioxide to combat greenhouse gases. This is a great alternative!</ListGroupItemText>
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
                <Col xs='12' className='split-horizontal-mobile light-green-background text-white d-flex justify-content-center'>
                  <Row>
                    <h1>So, what can you do to help?</h1>
                    <br></br>
                    <p>There are many ways you can reduce your impact. Below is a small list of ways you can help reduce your environmental impact.</p>
                    <br></br><br></br>
                  </Row>
                </Col>
                <Col className='split-horizontal d-flex justify-content-center'>
                  <ListGroup>
                    <br></br><br></br>
                    <ListGroupItem>
                      <ListGroupItemHeading>Choose dairy alternatives</ListGroupItemHeading>
                      <ListGroupItemText>
                        Coconut, hemp, oat, and pea milk are all great alternatives to dairy products. The suggested alternative to stay away from is almond milk as it has its own environmental impacts.
                      </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListGroupItemHeading>Consider trying these brands:</ListGroupItemHeading>
                      <ListGroupItemText>
                      <img src={oatly} className='img-fluid' height="25%" width="25%"></img>
                      <img src={tempt} className='img-fluid' height="25%" width="25%"></img>
                      <img src={soDelicious} className='img-fluid' height="25%" width="25%"></img>
                      <img src={ripple} className='img-fluid' height="25%" width="25%"></img>
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

export default Milk;
