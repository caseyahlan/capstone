import React, { Component } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Container, Row, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import chocolateBar from '../imgs/chocolate-04.svg';
import chocolate01 from '../imgs/chocolate1-01.svg';
import chocolate02 from '../imgs/chocolate2-01.svg';
import chocolate03 from '../imgs/chocolate3-01.svg';
import chocolate04 from '../imgs/chocolate4-01.svg';
import monkey from '../imgs/monkey-04.svg';

class Candybar extends Component {
  render() {
    return (
      <div>
        <MediaQuery query='(min-device-width: 991px)'>
          <CandybarDesktop />
        </MediaQuery>
      </div>
    )
  }
}

class CandybarDesktop extends Component {
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
                  <h1 className='text-white pb-3'>Chocolate</h1>
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
              <Col sm={9}>
                <ParallaxLayer offset={1} speed={0.1}>
                <h1 className='text-center text-md-left pt-2 pt-lg-5'>About Chocolate</h1>
                  <p className='text-monospace body-text'>
                    <br></br>
                    Around 70% of the world’s cocoa beans grow in West Africa and this area has been affected by increasing temperatures and dry spells due to climate change. There are challenges ahead for cocoa farmers as cocoa trees are particularly sensitive to heat and drought.
                    <br></br><br></br>
                    There is hope though, despite these challenges. New farming techniques can help boost existing cocoa farms and genome mapping has helped create cocoa tree varieties that are more climate resistant and productive. You don’t have to stop eating chocolate completely, but thinking about how your chocolate is made is increasingly important.
                  </p>
                </ParallaxLayer>
              </Col>
              <Col sm={3}>
                <ParallaxLayer offset={1.1} speed={4}>
                  <img src={chocolateBar} height="100%" width="100%" style={{ display: 'block', marginLeft: '35%' }} alt='soda'></img>
                </ParallaxLayer>
              </Col>
            </Row>
          </Container>
          <ParallaxLayer offset={1.1} speed={2}>
          </ParallaxLayer>

          {/* Slide Three */}
          <ParallaxLayer offset={2.05} speed={1.5} style={{ pointerEvents: 'none' }}>
            <h1 className={'text-monospace'} style={{ width: '70%', marginLeft: '5%' }}>Impact of Chocolate</h1>
          </ParallaxLayer>
          <ParallaxLayer offset={2.4} speed={6}>
            <img src={chocolate04} style={{ display: 'block', height: '40%', width: 'auto', marginLeft: '70%' }} alt='informational circle'></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.3} speed={2.8}>
            <img src={chocolate03} style={{ display: 'block', height: '30%', width: 'auto', marginLeft: '50%' }} alt='informational circle'></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.5} speed={1}>
            <img src={chocolate02} style={{ display: 'block', height: '30%', width: 'auto', marginLeft: '30%' }} alt='informational circle'></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.2} speed={-0.2}>
            <img src={chocolate01} style={{ display: 'block', height: '40%', width: 'auto', marginLeft: '10%' }} alt='informational circle'></img>
          </ParallaxLayer>

          {/* Slide Four */}
          <ParallaxLayer offset={3} speed={1} className='grey-background'/>
          <Container>
            <Row>
              <Col sm={9}>
                <ParallaxLayer offset={3} speed={0.1}>
                <h1 className='text-center text-md-left pt-2'>How has Chocolate Impacted Primates in the Ivory Coast?</h1>
                  <p className='text-monospace body-text'>
                    <br></br>
                    “The world’s passion for chocolate is having unexpectedly far-reaching effects. It’s endangering the world’s primate population. Ohio State University’s Scott McGraw and team spent over 200 days tramping through 18 forest reserves and five national parks of the Ivory Coast.
                    <br></br><br></br>
                    McGraw’s group found that 13 of 23 protected reserves and parks now had no primate species at all, and five had lost half of their original primate populations.
                    <br></br><br></br>
                    Instead of monkeys, chimpanzees, and old-growth forest, McGraw’s group found “a sea of cocoa plants.” -nationalgeographic.com
                  </p>
                </ParallaxLayer>
              </Col>
              <Col sm={3}>
                <ParallaxLayer offset={3.1} speed={4}>
                  <img src={monkey} height="100%" width="100%" style={{ display: 'block', marginLeft: '35%' }} alt='turtle'></img>
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
                    <h1>Eat responsibly</h1>
                    <p>Don’t worry, you don’t have to give up chocolate completely.</p>
                  </Row>
                </div>
              </ParallaxLayer>
            </Col>
            <Col md='6'>
              <ParallaxLayer offset={4} speed={1.5} onClick={() => this.parallax.scrollTo(5)}>
                <div className='split-vertical d-flex align-items-center container'>
                  <ListGroup flush>
                    <ListGroupItem>
                      <ListGroupItemHeading>Fair Trade</ListGroupItemHeading>
                      <ListGroupItemText>
                        Rigorous Fairtrade Standards support cocoa farmers and their communities and protect the environment. Farmers who are paid fairly are able to cultivate sustainable crops that positively impact their communities.
                        <br></br><br></br>
                        These brands are local to Seattle and Fair Trade:
                        <br></br>
                        <a href="https://frans.com/" target="_blank">Fran’s Chocolates</a> - Local to Seattle!
                        <br></br>
                        <a href="https://www.theochocolate.com/" target="_blank">Theo Chocolate</a> - Local to Seattle!
                        <br></br>
                        <a href="https://us.greenandblacks.com/" target="_blank">GREEN & BLACK’S</a>
                        <br></br>
                        <a href="https://www.traderjoes.com/" target="_blank">Trader Joe's Chocolate</a>
                        <br></br>
                        And more on fairtradeamerica.org
                      </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListGroupItemHeading>Rainforest Alliance</ListGroupItemHeading>
                      <ListGroupItemText>
                        The Rainforest Alliance works at the intersection of business, agriculture, and forests to make responsible business the new normal. An alliance of companies, farmers, foresters, communities, and consumers committed to creating a world where people and nature thrive in harmony.
                        <br></br><br></br>
                        Check out these Rainforest Alliance Certified brands:
                        <br></br>
                        <a href="https://www.rainforest-alliance.org/find-certified/seattle-chocolates" target="_blank">Seattle Chocolates</a> - Local to Seattle!
                        <br></br>
                        <a href="https://www.rainforest-alliance.org/find-certified/whole-foods" target="_blank">Whole Foods Market</a>
                        <br></br>
                        <a href="https://www.rainforest-alliance.org/find-certified/dove" target="_blank">Dove Dark Chocolate</a>
                        <br></br>
                        <a href="https://www.rainforest-alliance.org/find-certified/magnum" target="_blank">Magnum</a>
                      </ListGroupItemText>
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
                      <ListGroupItemHeading>Know your cocoa source</ListGroupItemHeading>
                      <ListGroupItemText>
                        Stick to chocolate brands that are focused on ethical and environmentally sound cocoa sourcing. Fair Trade and Rainforest Alliance certified brands are good places to start.
                      </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListGroupItemHeading>Eat more dark chocolate</ListGroupItemHeading>
                      <ListGroupItemText>
                        The milk powder used to create milk chocolate is more carbon-intensive because of the high methane production from cows when producing milk. Dark chocolate can be a better choice to reduce these types of impacts. Dark chocolate has also been shown to reduce your risk of heart disease by lowering blood pressure, reducing bad cholesterol and lessening inflammation.
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

export default Candybar;
