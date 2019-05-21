import React, { Component } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Container, Row, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import MediaQuery from 'react-responsive';
import circles from '../imgs/circles.svg';
import coffeeCup from '../imgs/coffee.svg';
import hazelnutSpread from '../imgs/hazelnutSpread-04.svg';
import apple from '../imgs/apple-03.svg';
import crepe from '../imgs/crepe-05.svg';
import strawberry from '../imgs/strawberry-02.svg';
import toast from '../imgs/toast-06.svg';
import orangutanStumps from '../imgs/orangutanStumps-07.svg';
import orangutanTrees from '../imgs/orangutanTrees-07.svg';
import pinkCircle from '../imgs/pink-circle.svg';
import blueCircle from '../imgs/blue-circle.svg';
import house from '../imgs/house-w-line-03.svg';
import deadPalm from '../imgs/dead-palm-07.svg';

class Coffee extends Component {
  render() {
    return (
      <div>
        <MediaQuery query='(min-device-width: 991px)'>
          <CoffeeDesktop />
        </MediaQuery>
        <MediaQuery query='(max-device-width: 991px)'>
          <CoffeeMobile />
        </MediaQuery>
      </div>
    )
  }
}

class CoffeeDesktop extends Component {
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
          <ParallaxLayer offset={1.3} speed={4}>
            <img src={coffeeCup} height="35%" width="35%" style={{ display: 'block', marginLeft: '65%' }}></img>
          </ParallaxLayer>
          <ParallaxLayer offset={1.2} speed={0.1}>
            <Container>
              <div className='media'>
                <div className='media-body'>
                  <h1 className='text-center text-md-left pt-2 pt-lg-5'>About Coffee</h1>
                    <p className='text-monospace body-text'>
                      <br></br>
                      Did you know, throughout the world 1.1 billion cups of coffee are consumed daily? That’s over 400 billion cups a year! You can find countless varieties and flavors of this universally loved drink.
                      <br></br><br></br>
                      After oil, coffee is the world’s most tradable commodity and the increased demand for convenient coffee has led coffee farmers to find new, more efficient ways to grow the crop. While some of these methods result in higher yields, they have also significantly contributed to deforestation and other environmental threats.
                    </p>
                </div>
                <img src={coffeeCup} height="35%" width="35%" style={{ display: 'block', marginLeft: '65%' }}></img>
              </div>
            </Container>
          </ParallaxLayer>
          <ParallaxLayer offset={1.1} speed={2}>
          </ParallaxLayer>

          {/* Slide Three */}
          <ParallaxLayer offset={2.05} speed={1.5} style={{ pointerEvents: 'none' }}>
            <h1 className={'text-monospace'} style={{ width: '70%', marginLeft: '5%' }}>Impact of Coffee</h1>
          </ParallaxLayer>
          <ParallaxLayer offset={2.4} speed={6}>
            <img src={pinkCircle} style={{ display: 'block', height: '40%', width: 'auto', marginLeft: '70%' }}></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.5} speed={0.1}>
            <img src={house} style={{ display: 'block', height: '10%', width: 'auto', marginLeft: '76%' }}></img>
            <p className='text-white text-monospace' style={{ marginLeft: '57%', textAlign: 'center' }}>displacement of natives & <br></br> endangered species</p>
          </ParallaxLayer>
          <ParallaxLayer offset={2.3} speed={2.8}>
            <img src={blueCircle} style={{ display: 'block', height: '30%', width: 'auto', marginLeft: '50%' }}></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.35} speed={0}>
            <img src={deadPalm} style={{ display: 'block', height: '10%', width: 'auto', marginLeft: '53%' }}></img>
            <p className='text-white text-monospace' style={{ marginLeft: '12.5%', textAlign: 'center', fontSize: '15px' }}>Release of carbon emissions,<br></br> biodiversity compromised</p>
          </ParallaxLayer>
          <ParallaxLayer offset={2.5} speed={1}>
            <img src={pinkCircle} style={{ display: 'block', height: '30%', width: 'auto', marginLeft: '30%' }}></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.62} speed={1}>
            <p className='text-white text-monospace' style={{ marginRight: '28%', textAlign: 'center', fontSize: '15px' }}>Deforestation of rainforests<br></br> to make room for<br></br> palm oil plantations</p>
          </ParallaxLayer>
          <ParallaxLayer offset={2.2} speed={-0.2}>
            <img src={blueCircle} style={{ display: 'block', height: '40%', width: 'auto', marginLeft: '10%' }}></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.38} speed={-0.2}>
            <p className='text-white text-monospace' style={{ marginRight: '64%', textAlign: 'center', fontSize: '30px' }}>Demand for Palm Oil</p>
          </ParallaxLayer>

          {/* Slide Four */}
          <ParallaxLayer offset={3} speed={1} className='grey-background'/>
          <ParallaxLayer offset={3.15} speed={1}>
            <Container>
              <div className='media'>
                <div className='media-body px-3'>
                  <h1 className='text-left mt-4'>How has Coffee Impacted Birds in Costa Rica?</h1>
                  <p className='text-monospace font-italic'>
                    <br></br>
                    “A 12-year study of 57,255 individually banded birds representing 265 species at 19 Costa Rican sites sheds new light on how tropical birds, a key indicator of ecosystem health, are faring across a patchwork of habitats in a changing agricultural countryside. The study compared bird populations on primarily open coffee farms (with small amounts of shade) with those in remaining forested areas. The study reveals that even a small increase in coffee farm tree cover, from 7 to 13 percent, can provide a significant boost to birds.
                    <br></br><br></br>
                    Researchers found that coffee farms offering some tree shade (not to be confused with coffee that is “shade grown” under a full canopy of mature trees) are still experiencing species decline and are no substitute for large swaths of protected forest. Across coffee farms and all sizes and types of forest, researchers found 61 percent more bird species’ populations declined as grew or remained steady.” -nationalgeographic.com
                  </p>
                </div>
              </div>
            </Container>
          </ParallaxLayer>
          <ParallaxLayer offset={3.53} speed={0.4}>
            <img src={orangutanTrees} style={{ display: 'block', height: '25%', width: 'auto', marginLeft: '30%' }}></img>
          </ParallaxLayer>
          <ParallaxLayer offset={3.54} speed={1.7}>
            <img src={orangutanStumps} style={{ display: 'block', height: '25%', width: 'auto', marginLeft: '50%' }}></img>
          </ParallaxLayer>

          {/* Slide Five */}
          <ParallaxLayer offset={4} speed={0.5}>
            <Container fluid={true}>
              <Row>
                <Col md='6' className='split-vertical light-green-background text-white d-flex align-items-center flex-wrap'>
                  <Row className='px-3'>
                    <h1>Drink sustainably</h1>
                    <p className='text-monospace pt-3'>
                      Don’t worry - you can still enjoy your daily cup of coffee.
                    </p>
                  </Row>
                </Col>
                <Col md='6' className='split-vertical d-flex align-items-center'>
                  <Container>
                    <ListGroup>
                      <ListGroupItem>
                        <ListGroupItemHeading>Fair Trade</ListGroupItemHeading>
                        <ListGroupItemText>
                          Rigorous Fairtrade Standards support farmers and their communities and protect the environment. Every bean can be traced back to the cooperative of small-scale farmers who grew it.
                          <br></br><br></br>
                          Check out these Fair Trade brands:
                          <br></br>
                          <a href="https://www.traderjoes.com/" target="_top">Trader Joe's brand Sumatra Blend & Brew-in-the-Bag coffees</a>
                          <br></br>
                          <a href="https://www.starbucks.com/" target="_top">Starbucks Coffee Company</a>
                          <br></br>
                          <a href="https://www.costco.com/Kirkland-Signature-House-Blend-Coffee%2c-2-lbs.product.100334966.html" target="_top">Kirkland Coffee</a>
                          <br></br>
                          <a href="https://www.gourmesso.com/" target="_top">Gourmesso (coffee pods)</a>
                          <br></br>
                          <a href="https://onecoffee.com/us/home/" target="_top">One Coffee (compostable coffee pods)</a>
                          <br></br>
                          And more on <a href="fairtradeamerica.org" target="_top"></a>
                      </ListGroupItemText>
                      </ListGroupItem>
                      <ListGroupItem>
                        <ListGroupItemHeading>Rainforest Alliance</ListGroupItemHeading>
                        <ListGroupItemText>
                        The Rainforest Alliance works at the intersection of business, agriculture, and forests to make responsible business the new normal. An alliance of companies, farmers, foresters, communities, and consumers committed to creating a world where people and nature thrive in harmony.
                        <br></br><br></br>
                        Check out these Rainforest Alliance Certified brands:
                        <br></br>
                        <a href="https://www.rainforest-alliance.org/find-certified/nescafe" target="_top">Nescafe</a>
                        <br></br>
                        <a href="https://www.rainforest-alliance.org/find-certified/royal-cup" target="_top">Royal Cup</a>
                        <br></br>
                        <a href="https://www.rainforest-alliance.org/find-certified/kroger" target="_top">Kroger</a>
                        <br></br>
                        <a href="https://www.rainforest-alliance.org/find-certified/mcdonalds" target="_top">McDonalds</a>
                        </ListGroupItemText>
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
                </Col>
                <Col md='6' className='split-vertical d-flex align-items-center'>
                  <Container>
                    <ListGroup>
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
                        <a href="https://www.puravidacreategood.com/" target="_top">Pura Vida Coffee</a>
                        <br></br>
                        <a href="https://larryscoffee.com/" target="_top">Larry's Coffee</a>
                        <br></br>
                        <a href="https://cafemam.com/" target="_top">Café Mam</a>
                        <br></br>
                        and more!
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

class CoffeeMobile extends Component {
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
          <ParallaxLayer offset={1} speed={0.1}>
            <Container>
              <Row>
                <Col xs='12'>
                  <h1 className='text-center text-md-left pt-2 pt-lg-5'>About Coffee</h1>
                  <Row className='justify-content-center'>
                      <img src={coffeeCup} className='img-fluid' height="35%" width="35%"></img>
                  </Row>
                  <p className='text-monospace'>
                    <br></br>
                    Did you know, throughout the world 1.1 billion cups of coffee are consumed daily? That’s over 400 billion cups a year! You can find countless varieties and flavors of this universally loved drink.
                    <br></br><br></br>
                    After oil, coffee is the world’s most tradable commodity and the increased demand for convenient coffee has led coffee farmers to find new, more efficient ways to grow the crop. While some of these methods result in higher yields, they have also significantly contributed to deforestation and other environmental threats.
                  </p>
                </Col>
              </Row>
            </Container>
          </ParallaxLayer>

          <ParallaxLayer offset={1.1} speed={2}>
          </ParallaxLayer>

          {/* Slide Three */}
          <ParallaxLayer offset={2.05} speed={1.5} style={{ pointerEvents: 'none' }}>
            <h1 style={{ width: '70%', marginLeft: '5%' }}>Impact of Coffee</h1>
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
                  <h1 className='text-center text-md-left pt-2 pt-lg-5'>How has Coffee Impacted Birds in Costa Rica?</h1>
                  <Row className='justify-content-center'>
                    <img src={orangutanTrees} className='img-fluid'></img>
                    <img src={orangutanStumps} className='img-fluid'></img>
                  </Row>
                  <p className='text-monospace font-italic'>
                    <br></br>
                    “A 12-year study of 57,255 individually banded birds representing 265 species at 19 Costa Rican sites sheds new light on how tropical birds, a key indicator of ecosystem health, are faring across a patchwork of habitats in a changing agricultural countryside. The study compared bird populations on primarily open coffee farms (with small amounts of shade) with those in remaining forested areas. The study reveals that even a small increase in coffee farm tree cover, from 7 to 13 percent, can provide a significant boost to birds.
                    <br></br><br></br>
                    Researchers found that coffee farms offering some tree shade (not to be confused with coffee that is “shade grown” under a full canopy of mature trees) are still experiencing species decline and are no substitute for large swaths of protected forest. Across coffee farms and all sizes and types of forest, researchers found 61 percent more bird species’ populations declined as grew or remained steady.” -nationalgeographic.com
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
                    <h1>Drink sustainably</h1>
                    <br></br>
                    <p>Don’t worry - you can still enjoy your daily cup of coffee.</p>
                    <br></br><br></br>
                  </Row>
                </Col>
                <Col className='split-horizontal d-flex justify-content-center'>
                  <ListGroup>
                    <br></br><br></br>
                    <ListGroupItem>
                      <ListGroupItemHeading>Fair Trade</ListGroupItemHeading>
                      <ListGroupItemText>
                        Rigorous Fairtrade Standards support farmers and their communities and protect the environment. Every bean can be traced back to the cooperative of small-scale farmers who grew it.
                        <br></br><br></br>
                        Check out these Fair Trade brands:
                        <br></br>
                        <a href="https://www.traderjoes.com/" target="_top">Trader Joe's brand Sumatra Blend & Brew-in-the-Bag coffees</a>
                        <br></br>
                        <a href="https://www.starbucks.com/" target="_top">Starbucks Coffee Company</a>
                        <br></br>
                        <a href="https://www.costco.com/Kirkland-Signature-House-Blend-Coffee%2c-2-lbs.product.100334966.html" target="_top">Kirkland Coffee</a>
                        <br></br>
                        <a href="https://www.gourmesso.com/" target="_top">Gourmesso (coffee pods)</a>
                        <br></br>
                        <a href="https://onecoffee.com/us/home/" target="_top">One Coffee (compostable coffee pods)</a>
                        <br></br>
                        And more on <a href="fairtradeamerica.org" target="_top"></a>
                    </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListGroupItemHeading>Rainforest Alliancer</ListGroupItemHeading>
                      <ListGroupItemText>
                        The Rainforest Alliance works at the intersection of business, agriculture, and forests to make responsible business the new normal. An alliance of companies, farmers, foresters, communities, and consumers committed to creating a world where people and nature thrive in harmony.
                        <br></br><br></br>
                        Check out these Rainforest Alliance Certified brands:
                        <br></br>
                        <a href="https://www.rainforest-alliance.org/find-certified/nescafe" target="_top">Nescafe</a>
                        <br></br>
                        <a href="https://www.rainforest-alliance.org/find-certified/royal-cup" target="_top">Royal Cup</a>
                        <br></br>
                        <a href="https://www.rainforest-alliance.org/find-certified/kroger" target="_top">Kroger</a>
                        <br></br>
                        <a href="https://www.rainforest-alliance.org/find-certified/mcdonalds" target="_top">McDonalds</a>
                      </ListGroupItemText>
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
                    <h1>What can you do to help?</h1>
                    <br></br><br></br>
                  </Row>
                </Col>
                <Col className='split-horizontal d-flex justify-content-center'>
                  <br></br><br></br>
                  <ListGroup>
                    <br></br><br></br>
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
                        <a href="https://www.puravidacreategood.com/" target="_top">Pura Vida Coffee</a>
                        <br></br>
                        <a href="https://larryscoffee.com/" target="_top">Larry's Coffee</a>
                        <br></br>
                        <a href="https://cafemam.com/" target="_top">Café Mam</a>
                        <br></br>
                        and more!
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

export default Coffee;
