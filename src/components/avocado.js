import React, { Component } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Container, Row, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import MediaQuery from 'react-responsive';
import circles from '../imgs/circles.svg';
import avocadopic from '../imgs/avocado.svg';
import cookedfish from '../imgs/cookedfish-02.svg';
import alivecoral from '../imgs/coral-02.svg';
import deadcoral from '../imgs/deadcoral-02.svg';
import fishnet from '../imgs/fishnet-02.svg';

class Avocado extends Component {
  render() {
    return (
      <div>
        <MediaQuery query='(min-device-width: 991px)'>
          <AvocadoDesktop />
        </MediaQuery>
        <MediaQuery query='(max-device-width: 991px)'>
          <AvocadoMobile />
        </MediaQuery>
      </div>
    )
  }
}

class AvocadoDesktop extends Component {
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
                  <h1 className='text-white pb-3'>Avocado</h1>
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
                  <h1 className='text-center text-md-left pt-2 pt-lg-5'>About Avocados</h1>
                    <p className='text-monospace body-text'>
                      <br></br>
                      In recent years, avocados have gained popularity in the United States for their mild, yummy taste and health benefits. From avocado toast, to guacamole, and even avocado smoothies, millions of these green fruits are eaten every day.
                      <br></br><br></br>
                      While avocados are good for the health of humans, the health of forests and animal habitats suffer due to the high demand for the crop and the amount of water this fruit requires to grow.
                    </p>
                </div>
                <img src={avocadopic} className='align-self-center' height="25%" width="25%"></img>
              </div>
            </Container>
          </ParallaxLayer>

          <ParallaxLayer offset={1.1} speed={2}>
          </ParallaxLayer>

          {/* Slide Three */}
          <ParallaxLayer offset={2.05} speed={1.5} style={{ pointerEvents: 'none' }}>
            <h1 style={{ width: '70%', marginLeft: '5%' }}>Impacts of Avocados</h1>
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0.1}>
            <img src={circles} className='py-5 my-5 mx-3'></img>
          </ParallaxLayer>

          {/* Slide Four */}
          <ParallaxLayer offset={3} speed={1} className='grey-background'>
            <Container>
              <div className='media'>
                <div className='media-body px-3'>
                  <h1 className='text-left mt-4'>How have Avocados Impacted Monarch Butterflies?</h1>
                  <p className='text-monospace font-italic'>
                    <br></br>
                    "Apútzio de Juárez, Mexico fills with swarms of migrating monarch butterflies each year. But downhill from the monarchs’ mountain roost, there lurks a new threat to their winter habitat: a lust to grow the lucrative avocados that are being consumed at record rates in the United States. Spurred by soaring demand for the creamy fruit, farmers here in the western state of Michoacán are clearing land to make room for avocado orchards, cutting oak and pine trees that form a vital buffer around the mountain forests where the monarchs nest. The trees cool the air from Michoacán’s warm western plains. If the temperature at the heart of the reserve, were to rise, the forest could suffer, and thus the butterflies would suffer, too." -nytimes.com
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
                    <h1>Alternatives to Avocados</h1>
                    <img src={cookedfish} className='align-self-center' height="25%" width="25%"></img>
                    <p className='text-monospace pt-3'>
                      There are many health benefits to eating avocados. Try these alternative foods that give similar benefits.
                    </p>
                  </Row>
                </Col>
                <Col md='6' className='split-vertical d-flex align-items-center'>
                  <Container>
                    <ListGroup>
                      <ListGroupItem>
                        <ListGroupItemHeading>Vitamin E</ListGroupItemHeading>
                        <ListGroupItemText>Try sunflower seeds, which are a richer source of vitamin E.</ListGroupItemText>
                      </ListGroupItem>
                      <ListGroupItem>
                        <ListGroupItemHeading>Vitamin K</ListGroupItemHeading>
                        <ListGroupItemText>Broccoli and cabbage offer high amounts of vitamin K.</ListGroupItemText>
                      </ListGroupItem>
                      <ListGroupItem>
                        <ListGroupItemHeading>Monounsaturated Oil</ListGroupItemHeading>
                        <ListGroupItemText>Extra virgin olive oil, olives, and nuts are a good choice.</ListGroupItemText>
                      </ListGroupItem>
                      <ListGroupItem>
                        <ListGroupItemHeading>Folate</ListGroupItemHeading>
                        <ListGroupItemText>Lentils and cauliflower are packed with folate.</ListGroupItemText>
                      </ListGroupItem>
                      <ListGroupItem>
                        <ListGroupItemHeading>Protein and Healthy Fat</ListGroupItemHeading>
                        <ListGroupItemText>Nut butters and hummus are both filling and delicious.</ListGroupItemText>
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
                  <img src={cookedfish} className='align-self-center' height="25%" width="25%"></img>
                </Col>
                <Col md='6' className='split-vertical d-flex align-items-center'>
                  <Container>
                    <ListGroup>
                      <ListGroupItem>
                        <ListGroupItemHeading>Buy seasonally and locally</ListGroupItemHeading>
                        <ListGroupItemText>
                          Double check your avocado’s label to see how far it has travelled to get to you. California avocados are in season in the spring and summer. Try buying avocados from local fruit stands or at farmers markets.
                        </ListGroupItemText>
                      </ListGroupItem>
                      <ListGroupItem>
                        <ListGroupItemHeading>Don’t throw avocados away</ListGroupItemHeading>
                        <ListGroupItemText>
                          Be conscious about the ripeness of the avocados you buy. Ripen avocados on the counter (slower) or in a paper bag with a banana (faster) and refrigerate ripe avocados for about three days.
                        </ListGroupItemText>
                      </ListGroupItem>
                      <ListGroupItem>
                        <ListGroupItemHeading>Reduce your consumption</ListGroupItemHeading>
                        <ListGroupItemText>
                          Substitute your daily avocado toast for carrots and hummus or a banana with nut butter.
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

class AvocadoMobile extends Component {
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
                  <h1 className='text-white pb-3'>Avocado</h1>
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
                  <h1 className='text-center text-md-left pt-2 pt-lg-5'>About Avocados</h1>
                  <Row className='justify-content-center'>
                      <img src={avocadopic} className='img-fluid' height="35%" width="35%"></img>
                  </Row>
                  <p className='text-monospace'>
                    <br></br>
                    In recent years, avocados have gained popularity in the United States for their mild, yummy taste and health benefits. From avocado toast, to guacamole, and even avocado smoothies, millions of these green fruits are eaten every day.
                    <br></br><br></br>
                    While avocados are good for the health of humans, the health of forests and animal habitats suffer due to the high demand for the crop and the amount of water this fruit requires to grow.
                  </p>
                </Col>
              </Row>
            </Container>
          </ParallaxLayer>

          <ParallaxLayer offset={1.1} speed={2}>
          </ParallaxLayer>

          {/* Slide Three */}
          <ParallaxLayer offset={2.05} speed={1.5} style={{ pointerEvents: 'none' }}>
            <h1 style={{ width: '70%', marginLeft: '5%' }}>Impacts of Avocados</h1>
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
                  <h1 className='text-center text-md-left pt-2 pt-lg-5'>How have Avocados Impacted Monarch Butterflies?</h1>
                  <Row className='justify-content-center'>
                    <img src={alivecoral} className='img-fluid'></img>
                    <img src={deadcoral} className='img-fluid'></img>
                  </Row>
                  <p className='text-monospace font-italic'>
                    <br></br>
                    "Apútzio de Juárez, Mexico fills with swarms of migrating monarch butterflies each year. But downhill from the monarchs’ mountain roost, there lurks a new threat to their winter habitat: a lust to grow the lucrative avocados that are being consumed at record rates in the United States. Spurred by soaring demand for the creamy fruit, farmers here in the western state of Michoacán are clearing land to make room for avocado orchards, cutting oak and pine trees that form a vital buffer around the mountain forests where the monarchs nest. The trees cool the air from Michoacán’s warm western plains. If the temperature at the heart of the reserve, were to rise, the forest could suffer, and thus the butterflies would suffer, too." -nytimes.com
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
                    <h1>Alternatives to Avocados</h1>
                    <p className='text-monospace pt-3'>
                      There are many health benefits to eating avocados. Try these alternative foods that give similar benefits.
                    </p>
                  </Row>
                </Col>
                <Col className='split-horizontal d-flex justify-content-center'>
                  <ListGroup>
                    <ListGroupItem>
                      <ListGroupItemHeading>Vitamin E</ListGroupItemHeading>
                      <ListGroupItemText>Try sunflower seeds, which are a richer source of vitamin E.</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListGroupItemHeading>Vitamin K</ListGroupItemHeading>
                      <ListGroupItemText>Broccoli and cabbage offer high amounts of vitamin K.</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListGroupItemHeading>Monounsaturated Oil</ListGroupItemHeading>
                      <ListGroupItemText>Extra virgin olive oil, olives, and nuts are a good choice.</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListGroupItemHeading>Folate</ListGroupItemHeading>
                      <ListGroupItemText>Lentils and cauliflower are packed with folate.</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListGroupItemHeading>Protein and Healthy Fat</ListGroupItemHeading>
                      <ListGroupItemText>Nut butters and hummus are both filling and delicious.</ListGroupItemText>
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
                      <ListGroupItemHeading>Buy seasonally and locally</ListGroupItemHeading>
                      <ListGroupItemText>
                        Double check your avocado’s label to see how far it has travelled to get to you. California avocados are in season in the spring and summer. Try buying avocados from local fruit stands or at farmers markets.
                      </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListGroupItemHeading>Don’t throw avocados away</ListGroupItemHeading>
                      <ListGroupItemText>
                        Be conscious about the ripeness of the avocados you buy. Ripen avocados on the counter (slower) or in a paper bag with a banana (faster) and refrigerate ripe avocados for about three days.
                      </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListGroupItemHeading>Reduce your consumption</ListGroupItemHeading>
                      <ListGroupItemText>
                        Substitute your daily avocado toast for carrots and hummus or a banana with nut butter.
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

export default Avocado;
