import React, { Component } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Container, Row, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import coffeeCup from '../imgs/coffee.svg';
import toucan from '../imgs/toucan-02.svg';
import fairTrade from '../imgs/fair-trade-02.svg';
import rainForestAlliance from '../imgs/rainforest-alliance-02.svg';
import coffee01 from '../imgs/coffee1-01.svg';
import coffee02 from '../imgs/coffee2-01.svg';
import coffee03 from '../imgs/coffee3-01.svg';
import coffee04 from '../imgs/coffee4-01.svg';

class Coffee extends Component {
  render() {
    return (
      <div>
        <MediaQuery query='(min-device-width: 991px)'>
          <CoffeeDesktop />
        </MediaQuery>
      </div>
    )
  }
}

class CoffeeDesktop extends Component {
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
                  <h1 className='text-white pb-3'>Coffee</h1>
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
                <h1 className='text-center text-md-left pt-2 pt-lg-5'>About Coffee</h1>
                  <p className='text-monospace body-text'>
                    <br></br>
                    Did you know, throughout the world 1.1 billion cups of coffee are consumed daily? That’s over 400 billion cups a year! You can find countless varieties and flavors of this universally loved drink.
                    <br></br><br></br>
                    After oil, coffee is the world’s most tradable commodity and the increased demand for convenient coffee has led coffee farmers to find new, more efficient ways to grow the crop. While some of these methods result in higher yields, they have also significantly contributed to deforestation and other environmental threats.
                  </p>
                </ParallaxLayer>
              </Col>
              <Col sm={4}>
                <ParallaxLayer offset={1.1} speed={4}>
                  <img src={coffeeCup} height="75%" width="75%" style={{ display: 'block', marginLeft: '35%' }} alt='coffee cup'></img>
                </ParallaxLayer>
              </Col>
            </Row>
          </Container>
          <ParallaxLayer offset={1.1} speed={2}>
          </ParallaxLayer>

          {/* Slide Three */}
          <ParallaxLayer offset={2.05} speed={1.5} style={{ pointerEvents: 'none' }}>
            <h1 className={'text-monospace'} style={{ width: '70%', marginLeft: '5%' }}>Impact of Coffee</h1>
          </ParallaxLayer>
          <ParallaxLayer offset={2.4} speed={6}>
            <img src={coffee04} style={{ display: 'block', height: '40%', width: 'auto', marginLeft: '70%' }} alt='informational circle'></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.3} speed={2.8}>
            <img src={coffee03} style={{ display: 'block', height: '30%', width: 'auto', marginLeft: '50%' }} alt='informational circle'></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.5} speed={1}>
            <img src={coffee02} style={{ display: 'block', height: '30%', width: 'auto', marginLeft: '30%' }} alt='informational circle'></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.2} speed={-0.2}>
            <img src={coffee01} style={{ display: 'block', height: '40%', width: 'auto', marginLeft: '10%' }} alt='informational circle'></img>
          </ParallaxLayer>

          {/* Slide Four */}
          <ParallaxLayer offset={3} speed={1} className='grey-background'/>
          <Container>
            <Row>
              <Col sm={9}>
                <ParallaxLayer offset={3} speed={0.1}>
                <h1 className='text-center text-md-left pt-2 pt-lg-5'>How has Coffee Impacted Birds in Costa Rica?</h1>
                  <p className='text-monospace body-text'>
                    <br></br>
                    “A study compared bird populations on primarily open coffee farms (with small amounts of shade) with those in remaining forested areas. The study reveals that even a small increase in coffee farm tree cover, from 7 to 13 percent, can provide a significant boost to birds.
                    <br></br><br></br>
                    Researchers found that coffee farms offering some tree shade are still experiencing species decline and are no substitute for large swaths of protected forest. Across coffee farms and all sizes and types of forest, researchers found 61 percent more bird species’ populations declined as grew or remained steady.” - nationalgeographic.com
                  </p>
                </ParallaxLayer>
              </Col>
              <Col sm={3}>
                <ParallaxLayer offset={3.1} speed={4}>
                  <img src={toucan} height="100%" width="100%" style={{ display: 'block', marginLeft: '35%' }} alt='toucan'></img>
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
                    <h1>Drink sustainably</h1>
                    <p className='text-monospace pt-3'>
                      Don’t worry, you can still enjoy your daily cup of coffee!
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
                      <img src={fairTrade} height="8%" width="8%" alt='fair trade logo'></img>
                      <ListGroupItemHeading>Fair Trade</ListGroupItemHeading>
                      <ListGroupItemText>
                        Rigorous Fairtrade Standards support farmers and their communities and protect the environment. Every bean can be traced back to the cooperative of small-scale farmers who grew it.
                        <br></br><br></br>
                        Check out these Fair Trade brands:
                        <br></br>
                        <a href="https://www.traderjoes.com/" target="_blank">Trader Joe's brand Sumatra Blend & Brew-in-the-Bag coffees</a>
                        <br></br>
                        <a href="https://www.starbucks.com/" target="_blank">Starbucks Coffee Company</a>
                        <br></br>
                        <a href="https://www.costco.com/Kirkland-Signature-House-Blend-Coffee%2c-2-lbs.product.100334966.html" target="_blank">Kirkland Coffee</a>
                        <br></br>
                        <a href="https://www.gourmesso.com/" target="_blank">Gourmesso (coffee pods)</a>
                        <br></br>
                        <a href="https://onecoffee.com/us/home/" target="_blank">One Coffee (compostable coffee pods)</a>
                        <br></br>
                      </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                      <img src={rainForestAlliance} height="8%" width="8%" alt='rainforest alliance logo'></img>
                      <ListGroupItemHeading>Rainforest Alliance</ListGroupItemHeading>
                      <ListGroupItemText>
                        The Rainforest Alliance works at the intersection of business, agriculture, and forests to make responsible business the new normal. An alliance of companies, farmers, foresters, communities, and consumers committed to creating a world where people and nature thrive in harmony.
                        <br></br><br></br>
                        Check out these Rainforest Alliance Certified brands:
                        <br></br>
                        <a href="https://www.rainforest-alliance.org/find-certified/nescafe" target="_blank">Nescafe</a>
                        <br></br>
                        <a href="https://www.rainforest-alliance.org/find-certified/royal-cup" target="_blank">Royal Cup</a>
                        <br></br>
                        <a href="https://www.rainforest-alliance.org/find-certified/kroger" target="_blank">Kroger</a>
                        <br></br>
                        <a href="https://www.rainforest-alliance.org/find-certified/mcdonalds" target="_blank">McDonalds</a>
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
                      <ListGroupItemHeading>Use reusable materials and BYOM (bring your own mug)</ListGroupItemHeading>
                      <ListGroupItemText>
                        A Keurig pod machine creates 10 times the amount of solid waste as a drip coffee maker and single use coffee cups often end up in landfills. Invest in a reusable mug, ground coffee for a drip coffee maker or reusable K-cup filter.
                      </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListGroupItemHeading>Buy shade-grown coffee</ListGroupItemHeading>
                      <ListGroupItemText>
                        With this method, coffee plants grow naturally with local forest trees. This method boosts biodiversity and supports reforestation. For example, in Ethiopia where coffee is often grown on plantations shaded by native trees, there are 2.5 times the number of bird species relative to adjacent mountain forest.
                        <br></br><br></br>
                        Try:
                        <br></br>
                        <a href="https://www.puravidacreategood.com/" target="_blank">Pura Vida Coffee</a>
                        <br></br>
                        <a href="https://larryscoffee.com/" target="_blank">Larry's Coffee</a>
                        <br></br>
                        <a href="https://cafemam.com/" target="_blank">Café Mam</a>
                        <br></br>
                        and more!
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

export default Coffee;
