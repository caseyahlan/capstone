import React, { Component } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Container, Row, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import MediaQuery from 'react-responsive';
import circles from '../imgs/circles.svg';
import hazelnutSpread from '../imgs/hazelnutSpread-04.svg';
import apple from '../imgs/apple-03.svg';
import crepe from '../imgs/crepe-05.svg';
import strawberry from '../imgs/strawberry-02.svg';
import toast from '../imgs/toast-06.svg';
import orangutanStumps from '../imgs/orangutanStumps-07.svg';
import orangutanTrees from '../imgs/orangutanTrees-07.svg';

class Nutella extends Component {
  render() {
    return (
      <div>
        <MediaQuery query='(min-device-width: 991px)'>
          <NutellaDesktop />
        </MediaQuery>
        <MediaQuery query='(max-device-width: 991px)'>
          <NutellaMobile />
        </MediaQuery>
      </div>
    )
  }
}

class NutellaDesktop extends Component {
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
          <ParallaxLayer offset={1} speed={0.1}>
            <Container>
              <div className='media'>
                <div className='media-body'>
                  <h1 className='text-center text-md-left pt-2 pt-lg-5'>About Nutella</h1>
                    <p className='text-monospace body-text'>
                      <br></br>
                      Nutella is a popular hazelnut spread that is commonly used in many food products. Currently, there are 7
                      well known ingredients: sugar, palm oil, hazelnuts, cocoa, milk, soy, and vanilla (Citation 1).
                      <br></br><br></br>
                      Just by looking at the ingredients, nutella seems like a perfect choice for many recipes. However, nutella’s
                      heavy use of palm oil spreads damage to the environment.
                    </p>
                </div>
                <img src={hazelnutSpread} className='align-self-center' height="35%" width="35%"></img>
              </div>
            </Container>
          </ParallaxLayer>

          <ParallaxLayer offset={1.1} speed={2}>
          </ParallaxLayer>

          {/* Slide Three */}
          <ParallaxLayer offset={2.05} speed={1.5} style={{ pointerEvents: 'none' }}>
            <h1 style={{ width: '70%', marginLeft: '5%' }}>Impact of Palm Oil</h1>
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0.1}>
            <img src={circles} className='py-5 my-5 mx-3'></img>
          </ParallaxLayer>

          {/* Slide Four */}
          <ParallaxLayer offset={3} speed={1} className='grey-background'>
            <Container>
              <div className='media'>
                <div className='media-body px-3'>
                  <h1 className='text-left mt-4'>How has Nutella Impacted Orangutans?</h1>
                  <p className='text-monospace font-italic'>
                    <br></br>
                    “Over 50,000 orangutans on the islands of Borneo and Sumatra have died because of palm oil deforestation.
                    Orangutans whose habitats have been destroyed often enter villages and oil plantations in search of food
                    where they are captured or killed by farmers who treat them as pests.  In 2016, it was reported that just
                    45,000 orangutans remained in Borneo and at this rate, they will be extinct in the wild in just 25 years”.
                    -orangutantrekkingtours.com
                  </p>
                </div>
                <img src={orangutanTrees} className='align-self-center' height="25%" width="25%"></img>
                <img src={orangutanStumps} className='align-self-center' height="25%" width="25%"></img>
              </div>
            </Container>
          </ParallaxLayer>

          {/* Slide Five */}
          <ParallaxLayer offset={4} speed={0.5}>
            <Container fluid={true}>
              <Row>
                <Col md='6' className='split-vertical light-green-background text-white d-flex align-items-center flex-wrap'>
                  <Row className='px-3'>
                    <h1>Alternatives to popular products that use palm oil</h1>
                    <p className='text-monospace pt-3'>
                      There are many products that use palm oil. Below is a small list of those products and possible alternatives for them.
                    </p>
                  </Row>
                </Col>
                <Col md='6' className='split-vertical d-flex align-items-center'>
                  <Container>
                  <img src={crepe} className='align-self-center' height="25%" width="25%"></img>
                  <img src={apple} className='align-self-center' height="25%" width="25%"></img>
                  <img src={strawberry} className='align-self-center' height="25%" width="25%"></img>
                  <img src={toast} className='align-self-center' height="25%" width="25%"></img>
                    <ListGroup>
                      <ListGroupItem>
                        <ListGroupItemHeading>Nutella</ListGroupItemHeading>
                        <ListGroupItemText>Try <a href="https://rigonidiasiago-usa.com/our-products/nocciolata/organic-hazelnut-spread-with-cocoa-and-milk/" target="_top">Nicciolata Organic Hazelnut Spread with Cocoa & Milk</a>; this product is also GMO Free</ListGroupItemText>
                      </ListGroupItem>
                      <ListGroupItem>
                        <ListGroupItemHeading>Clif Bar</ListGroupItemHeading>
                        <ListGroupItemText>Try <a href="https://www.amazon.com/dp/B01MYU64E4/?tag=onegrepla-20&th=1" target="_top">Health Warriors Chia Bar</a>; this product is 100 calories and has 3g of sugar</ListGroupItemText>
                      </ListGroupItem>
                      <ListGroupItem>
                        <ListGroupItemHeading>JIF Peanut Butter</ListGroupItemHeading>
                        <ListGroupItemText>Try <a href="https://www.amazon.com/dp/B079Y59DV2/?tag=onegrepla-20&th=1" target="_top">Wild Friends Foods Chocolate Coconut Peanut Butter</a>; this product is kosher and gluten-free</ListGroupItemText>
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
                  <img src={crepe} className='align-self-center' height="25%" width="25%"></img>
                  <img src={apple} className='align-self-center' height="25%" width="25%"></img>
                  <img src={strawberry} className='align-self-center' height="25%" width="25%"></img>
                  <img src={toast} className='align-self-center' height="25%" width="25%"></img>
                    <ListGroup>
                      <ListGroupItem>
                        <ListGroupItemHeading>Be a Responsible Shopper and reduce purchase of Palm Oil Products</ListGroupItemHeading>
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

class NutellaMobile extends Component {
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
          <ParallaxLayer offset={1} speed={0.1}>
            <Container>
              <Row>
                <Col xs='12'>
                  <h1 className='text-center text-md-left pt-2 pt-lg-5'>About Nutella</h1>
                  <Row className='justify-content-center'>
                      <img src={hazelnutSpread} className='img-fluid' height="35%" width="35%"></img>
                  </Row>
                  <p className='text-monospace'>
                    <br></br>
                    Nutella is a popular hazelnut spread that is commonly used in many food products. Currently, there are 7
                    well known ingredients: sugar, palm oil, hazelnuts, cocoa, milk, soy, and vanilla (Citation 1).
                    <br></br><br></br>
                    Just by looking at the ingredients, nutella seems like a perfect choice for many recipes. However, nutella’s
                    heavy use of palm oil spreads damage to the environment.
                  </p>
                </Col>
              </Row>
            </Container>
          </ParallaxLayer>

          <ParallaxLayer offset={1.1} speed={2}>
          </ParallaxLayer>

          {/* Slide Three */}
          <ParallaxLayer offset={2.05} speed={1.5} style={{ pointerEvents: 'none' }}>
            <h1 style={{ width: '70%', marginLeft: '5%' }}>Impact of Palm Oil</h1>
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
                  <h1 className='text-center text-md-left pt-2 pt-lg-5'>How has Nutella Impacted Orangutans?</h1>
                  <Row className='justify-content-center'>
                    <img src={orangutanTrees} className='img-fluid'></img>
                    <img src={orangutanStumps} className='img-fluid'></img>
                  </Row>
                  <p className='text-monospace font-italic'>
                    <br></br>
                    “Over 50,000 orangutans on the islands of Borneo and Sumatra have died because of palm oil deforestation.
                    Orangutans whose habitats have been destroyed often enter villages and oil plantations in search of food
                    where they are captured or killed by farmers who treat them as pests.  In 2016, it was reported that just
                    45,000 orangutans remained in Borneo and at this rate, they will be extinct in the wild in just 25 years”.
                    -orangutantrekkingtours.com
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
                    <h1>Alternatives to popular products that use palm oil</h1>
                    <img src={crepe} className='img-fluid' height="25%" width="25%"></img>
                    <img src={apple} className='img-fluid' height="25%" width="25%"></img>
                    <img src={strawberry} className='img-fluid' height="25%" width="25%"></img>
                    <img src={toast} className='img-fluid' height="25%" width="25%"></img>
                    <p>There are many products that use palm oil. Below is a small list of those products and possible alternatives for them.</p>
                  </Row>
                </Col>
                <Col className='split-horizontal d-flex justify-content-center'>
                  <ListGroup>
                    <ListGroupItem>
                      <ListGroupItemHeading>Nutella</ListGroupItemHeading>
                      <ListGroupItemText>Try <a href="https://rigonidiasiago-usa.com/our-products/nocciolata/organic-hazelnut-spread-with-cocoa-and-milk/" target="_top">Nicciolata Organic Hazelnut Spread with Cocoa & Milk</a>; this product is also GMO Free</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListGroupItemHeading>Clif Bar</ListGroupItemHeading>
                      <ListGroupItemText>Try <a href="https://www.amazon.com/dp/B01MYU64E4/?tag=onegrepla-20&th=1" target="_top">Health Warriors Chia Bar</a>; this product is 100 calories and has 3g of sugar</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListGroupItemHeading>JIF Peanut Butter</ListGroupItemHeading>
                      <ListGroupItemText>Try <a href="https://www.amazon.com/dp/B079Y59DV2/?tag=onegrepla-20&th=1" target="_top">Wild Friends Foods Chocolate Coconut Peanut Butter</a>; this product is kosher and gluten-free</ListGroupItemText>
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
                    <img src={crepe} className='img-fluid' height="25%" width="25%"></img>
                    <img src={apple} className='img-fluid' height="25%" width="25%"></img>
                    <img src={strawberry} className='img-fluid' height="25%" width="25%"></img>
                    <img src={toast} className='img-fluid' height="25%" width="25%"></img>
                    <p>There are many ways you can reduce your impact. Below is a small list of ways you can help reduce your environmental impact.</p>
                  </Row>
                </Col>
                <Col className='split-horizontal d-flex justify-content-center'>
                  <ListGroup>
                    <ListGroupItem>
                      <ListGroupItemHeading>Be a Responsible Shopper and reduce purchase of Palm Oil Products</ListGroupItemHeading>
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

export default Nutella;