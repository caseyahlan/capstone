import React, { Component } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Container, Row, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import banana from '../imgs/banana.svg';
import fairTradeBanana from '../imgs/fair-trade-banana.svg';
import crocodile from '../imgs/alligator-02.svg';
import banana01 from '../imgs/banana1-01.svg';
import banana02 from '../imgs/banana2-01.svg';
import banana03 from '../imgs/banana3-01.svg';
import banana04 from '../imgs/banana4-01.svg';

class Banana extends Component {
  render() {
    return (
      <div>
        <MediaQuery query='(min-device-width: 991px)'>
          <BananaDesktop />
        </MediaQuery>
      </div>
    )
  }
}

class BananaDesktop extends Component {
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
                  <h1 className='text-white pb-3'>Banana</h1>
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
                        <h1 className='text-center text-md-left pt-2 pt-lg-5'>About Bananas</h1>
                          <p className='text-monospace body-text'>
                            <br></br>
                            Bananas are a staple food that a lot of cultures depend on. Bananas are generally inexpensive and have a lot of healthy nutrients. However, there are significant environmental impacts from banana production.
                            <br></br><br></br>
                            Did you know that bananas have to be flown into western countries, which releases CO2? Or that tropical rainforests are impacted by deforestation to make room for banana plantations? The world’s ecosystem is being impacted by banana production, but there are ways to help lessen this impact.
                          </p>
                      {/* </div> */}
                    {/* </div> */}
                </ParallaxLayer>
              </Col>
              <Col sm={4}>
                <ParallaxLayer offset={1.1} speed={4}>
                  <img src={banana} height="75%" width="75%" style={{ display: 'block', marginLeft: '35%' }} alt='banana'></img>
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
            <img src={banana04} style={{ display: 'block', height: '40%', width: 'auto', marginLeft: '70%' }} alt='informational circle'></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.3} speed={2.8}>
            <img src={banana03} style={{ display: 'block', height: '30%', width: 'auto', marginLeft: '50%' }} alt='informational circle'></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.5} speed={1}>
            <img src={banana02} style={{ display: 'block', height: '30%', width: 'auto', marginLeft: '30%' }} alt='informational circle'></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.2} speed={-0.2}>
            <img src={banana01} style={{ display: 'block', height: '40%', width: 'auto', marginLeft: '10%' }} alt='informational circle'></img>
          </ParallaxLayer>

          {/* Slide Four */}
          <ParallaxLayer offset={3} speed={1} className='grey-background'/>
          <ParallaxLayer offset={3.15} speed={1}>
            <Container>
              <div className='media'>
                <div className='media-body px-3'>
                  <h1 className='text-left mt-4'>How have Bananas Impacted Crocodiles?</h1>
                  <p className='text-monospace font-italic'>
                    <br></br>
                    “In the past, I have witnessed and a lot of the locals have pointed out that there have been massive fish kills as a result of pesticide exposure in high levels. A lot of the pesticides will wind up at the top of the food chain. What was revealing to me was the fact that the caiman [crocodiles] that were near the banana plantations had not only higher concentrations of pesticides, but also they were in a poorer state of health relative to the caiman in more pristine, remote areas.You know, we're now reckoning with the problem left by past use of highly toxic, highly persistent pesticides. So, what plantations must avoid now is leaving similar toxic legacies for the next generation to deal with.” - www.npr.org
                  </p>
                </div>
                <img src={crocodile} className='align-self-center' height="35%" width="35%" alt='crocodile'></img>
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
                      <ListGroupItemHeading>Buy locally-grown fruit</ListGroupItemHeading>
                      <ListGroupItemText>
                        You can minimize the impact from banana production by switching from buying bananas to buying locally-grown fruit. Buying fruit that is grown locally not only reduces carbon emissions, but it strengthens your local economy.
                      </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                      <img src={fairTradeBanana} height="10%" width="10%"></img>
                      <ListGroupItemHeading>Buy Fairtrade bananas</ListGroupItemHeading>
                      <ListGroupItemText>
                        If you continue purchasing bananas, purchase Fairtrade bananas. Fairtrade bananas focus on improving the lives of banana farmers by giving more of the money back to them that is gained from selling bananas.
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

export default Banana;
