import React, { Component } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Container, Row, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import avocadopic from '../imgs/avocado.svg';
import butterfly from '../imgs/butterfly-01.svg';
import avocado01 from '../imgs/avocado1-01.svg';
import avocado02 from '../imgs/avocado2-01.svg';
import avocado03 from '../imgs/avocado3-01.svg';
import avocado04 from '../imgs/avocado4-01.svg';

class Avocado extends Component {
  render() {
    return (
      <div>
        <MediaQuery query='(min-device-width: 991px)'>
          <AvocadoDesktop />
        </MediaQuery>
      </div>
    )
  }
}

class AvocadoDesktop extends Component {
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
          <Container>
            <Row>
              <Col sm={8}>
                <ParallaxLayer offset={1.1} speed={0.1}>
                  <h1 className='text-center text-md-left pt-2 pt-lg-5'>About Avocados</h1>
                    <p className='text-monospace body-text'>
                      <br></br>
                      In recent years, avocados have gained popularity in the United States for their mild, yummy taste and health benefits. From avocado toast, to guacamole, and even avocado smoothies, millions of these green fruits are eaten every day.
                      <br></br><br></br>
                      While avocados are good for the health of humans, the health of forests and animal habitats suffer due to the high demand for the crop and the amount of water this fruit requires to grow.
                    </p>
                </ParallaxLayer>
              </Col>
              <Col sm={4}>
                <ParallaxLayer offset={1.1} speed={4}>
                  <img src={avocadopic} height="75%" width="75%" style={{ display: 'block', marginLeft: '35%' }} alt='avocado'></img>
                </ParallaxLayer>
              </Col>
            </Row>
          </Container>
          <ParallaxLayer offset={1.1} speed={2}>
          </ParallaxLayer>

          {/* Slide Three */}
          <ParallaxLayer offset={2.05} speed={1.5} style={{ pointerEvents: 'none' }}>
            <h1 style={{ width: '70%', marginLeft: '5%' }}>Impact of Avocados</h1>
          </ParallaxLayer>
          <ParallaxLayer offset={2.4} speed={6}>
            <img src={avocado04} style={{ display: 'block', height: '40%', width: 'auto', marginLeft: '70%' }} alt='informational circle'></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.3} speed={2.8}>
            <img src={avocado03} style={{ display: 'block', height: '30%', width: 'auto', marginLeft: '50%' }} alt='informational circle'></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.5} speed={1}>
            <img src={avocado02} style={{ display: 'block', height: '30%', width: 'auto', marginLeft: '30%' }} alt='informational circle'></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.2} speed={-0.2}>
            <img src={avocado01} style={{ display: 'block', height: '40%', width: 'auto', marginLeft: '10%' }} alt='informational circle'></img>
          </ParallaxLayer>

          {/* Slide Four */}
          <ParallaxLayer offset={3} speed={1} className='grey-background'/>
          <Container>
            <Row>
              <Col sm={8}>
                <ParallaxLayer offset={3.1} speed={0.1}>
                <h1 className='text-center text-md-left pt-2 pt-lg-5'>How have Avocados Impacted Monarch Butterflies?</h1>
                  <p className='text-monospace body-text'>
                    <br></br>
                    "Apútzio de Juárez, Mexico fills with swarms of migrating monarch butterflies each year. But downhill from the monarchs’ mountain roost, there lurks a new threat to their winter habitat: a lust to grow the lucrative avocados... Farmers here in the western state of Michoacán are clearing land to make room for avocado orchards, cutting oak and pine trees that form a vital buffer around the mountain forests where the monarchs nest. The trees cool the air from Michoacán’s warm western plains. If the temperature at the heart of the reserve, were to rise, the forest could suffer, and thus the butterflies would suffer, too." -nytimes.com
                  </p>
                </ParallaxLayer>
              </Col>
              <Col sm={4}>
                <ParallaxLayer offset={3.1} speed={4}>
                  <img src={butterfly} height="85%" width="85%" style={{ display: 'block', marginLeft: '35%' }} alt='butterfly'></img>
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
                    <h1>Alternatives to Avocados</h1>
                    <p className='text-monospace pt-3'>
                      There are many health benefits to eating avocados. Try these alternative foods that give similar benefits.
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
      </div>
    )
  }
}

export default Avocado;
