import React, { Component } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Container, Row, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import MediaQuery from 'react-responsive';
import hazelnutSpread from '../imgs/hazelnutSpread-04.svg';
import apple from '../imgs/apple-03.svg';
import crepe from '../imgs/crepe-05.svg';
import strawberry from '../imgs/strawberry-02.svg';
import toast from '../imgs/toast-06.svg';
import orangutanStumps from '../imgs/orangutanStumps-07.svg';
import orangutanTrees from '../imgs/orangutanTrees-07.svg';
import nutella01 from '../imgs/nutella1.svg';
import nutella02 from '../imgs/nutella2.svg';
import nutella03 from '../imgs/nutella3-01.svg';
import nutella04 from '../imgs/nutella4-01.svg';

class Oreo extends Component {
  render() {
    return (
      <div>
        <MediaQuery query='(min-device-width: 991px)'>
          <OreoDesktop />
        </MediaQuery>
        <MediaQuery query='(max-device-width: 991px)'>
          <OreoMobile />
        </MediaQuery>
      </div>
    )
  }
}

class OreoDesktop extends Component {
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
                  <h1 className='text-white pb-3'>Oreo</h1>
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
            <img src={hazelnutSpread} height="35%" width="35%" style={{ display: 'block', marginLeft: '65%' }}></img>
          </ParallaxLayer>
          <ParallaxLayer offset={1.2} speed={0.1}>
            <Container>
              <div className='media'>
                <div className='media-body'>
                  <h1 className='text-center text-md-left pt-2 pt-lg-5'>About Oreos</h1>
                    <p className='text-monospace body-text'>
                      <br></br>
                      Oreo is an iconic brand in the United States and is the world’s best selling cookie. Oreo’s parent company, Mondelēz, has not kept its promise of keeping deforestation out of its supply chain. Making palm oil doesn’t need to destroy forests, but Mondelēz has not dropped dirty palm oil suppliers. This lack of action means time is running out for species that call the forest home.
                      <br></br><br></br>
                      Orangutans are literally dying for cookies.
                    </p>
                </div>
              </div>
            </Container>
          </ParallaxLayer>
          <ParallaxLayer offset={1.1} speed={2}>
          </ParallaxLayer>

          {/* Slide Three */}
          <ParallaxLayer offset={2.05} speed={1.5} style={{ pointerEvents: 'none' }}>
            <h1 className={'text-monospace'} style={{ width: '70%', marginLeft: '5%' }}>Impact of Oreos</h1>
          </ParallaxLayer>
          <ParallaxLayer offset={2.4} speed={6}>
            <img src={nutella04} style={{ display: 'block', height: '40%', width: 'auto', marginLeft: '70%' }}></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.3} speed={2.8}>
            <img src={nutella03} style={{ display: 'block', height: '30%', width: 'auto', marginLeft: '50%' }}></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.5} speed={1}>
            <img src={nutella02} style={{ display: 'block', height: '30%', width: 'auto', marginLeft: '30%' }}></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.2} speed={-0.2}>
            <img src={nutella01} style={{ display: 'block', height: '40%', width: 'auto', marginLeft: '10%' }}></img>
          </ParallaxLayer>

          {/* Slide Four */}
          <ParallaxLayer offset={3} speed={1} className='grey-background'/>
          <ParallaxLayer offset={3.15} speed={1}>
            <Container>
              <div className='media'>
                <div className='media-body px-3'>
                  <h1 className='text-left mt-4'>How have Oreos Impacted Orangutans?</h1>
                  <p className='text-monospace font-italic'>
                    <br></br>
                    “22 of Mondelēz’s (the parent company of Oreo) palm oil suppliers cleared more than 270 square miles of rainforest — an area larger than the city of San Francisco. Of that area, 96 square miles constituted the habitat of critically endangered orangutans. Palm oil can be made without destroying forests, yet Mondelēz suppliers are still trashing forests and wrecking orangutan habitat, pushing these beautiful and intelligent creatures to the brink of extinction. They’re literally dying for a cookie.” -news.mongabay.com
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
                    <h1>Alternatives to popular products that use palm oil</h1>
                    <p className='text-monospace pt-3'>
                      There are many products that use palm oil. Below is a small list of those products and possible alternatives for them.
                    </p>
                  </Row>
                </Col>
                <Col md='6' className='split-vertical d-flex align-items-center'>
                  <Container>
                    <ListGroup>
                      <ListGroupItem>
                        <ListGroupItemHeading>Instead of Oreo...</ListGroupItemHeading>
                        <ListGroupItemText>Try <a href="https://products.wholefoodsmarket.com/product/365-everyday-value-chocolate-sandwich-cremes-c9fd86" target="_top">365 Everyday Value Chocolate Sandwich Cremes</a>; this product is also vegan</ListGroupItemText>
                      </ListGroupItem>
                      <ListGroupItem>
                        <ListGroupItemHeading>Instead of Nutella...</ListGroupItemHeading>
                        <ListGroupItemText>Try <a href="https://rigonidiasiago-usa.com/our-products/nocciolata/organic-hazelnut-spread-with-cocoa-and-milk/" target="_top">Nicciolata Organic Hazelnut Spread with Cocoa & Milk</a>; this product is also GMO Free</ListGroupItemText>
                      </ListGroupItem>
                      <ListGroupItem>
                        <ListGroupItemHeading>Instead of Clif Bar...</ListGroupItemHeading>
                        <ListGroupItemText>Try <a href="https://www.amazon.com/dp/B01MYU64E4/?tag=onegrepla-20&th=1" target="_top">Health Warriors Chia Bar</a>; this product is 100 calories and has 3g of sugar</ListGroupItemText>
                      </ListGroupItem>
                      <ListGroupItem>
                        <ListGroupItemHeading>Instead of JIF Peanut Butter...</ListGroupItemHeading>
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
                <Col md='6' className='split-vertical light-green-background text-white d-flex align-items-center flex-wrap'>
                  <Row className='px-3'>
                    <h1>What can you do to help?</h1>
                  </Row>
                </Col>
                <Col md='6' className='split-vertical d-flex align-items-center'>
                  <Container>
                    <ListGroup>
                      <ListGroupItem>
                        <ListGroupItemHeading>Make your own Oreos</ListGroupItemHeading>
                        <ListGroupItemText>
                        Baking is a fun way to relax, plus you know exactly what ingredients are going into your food. And you’ll avoid the extra packaging.
                        Try a recipe: <a href="https://topsecretrecipes.com/nabisco-oreo-cookies-copycat-recipe.html" target="_top">Top Secret Recipes</a> or <a href="https://www.foodnetwork.com/recipes/oreo-cookies-recipe-1972673#!" target="_top">Food Network</a>
                        </ListGroupItemText>
                      </ListGroupItem>
                      <ListGroupItem>
                        <ListGroupItemHeading>Eat local cookies</ListGroupItemHeading>
                        <ListGroupItemText>
                        Satisfy your cookie craving and support local businesses that use local ingredients. Two great companies that are local to Seattle are:
                        <a href="http://www.cmbc.com/" target="_top">Cougar Mountain Baking Company</a> <a href="http://www.cowchipcookies.com/bestcookies/" target="_top">Cow Chip Cookies</a>
                        </ListGroupItemText>
                      </ListGroupItem>
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

class OreoMobile extends Component {
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
                  <h1 className='text-white pb-3'>Oreo</h1>
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
                  <h1 className='text-center text-md-left pt-2 pt-lg-5'>About Oreos</h1>
                  <Row className='justify-content-center'>
                      <img src={hazelnutSpread} className='img-fluid' height="35%" width="35%"></img>
                  </Row>
                  <p className='text-monospace'>
                    <br></br>
                    Oreo is an iconic brand in the United States and is the world’s best selling cookie. Oreo’s parent company, Mondelēz, has not kept its promise of keeping deforestation out of its supply chain. Making palm oil doesn’t need to destroy forests, but Mondelēz has not dropped dirty palm oil suppliers. This lack of action means time is running out for species that call the forest home.
                    <br></br><br></br>
                    Orangutans are literally dying for cookies.
                  </p>
                </Col>
              </Row>
            </Container>
          </ParallaxLayer>

          <ParallaxLayer offset={1.1} speed={2}>
          </ParallaxLayer>

          {/* Slide Three */}
          <ParallaxLayer offset={2.05} speed={1.5} style={{ pointerEvents: 'none' }}>
            <h1 style={{ width: '70%', marginLeft: '5%' }}>Impact of Oreos</h1>
          </ParallaxLayer>
          <ParallaxLayer offset={2.4} speed={6}>
            <img src={nutella01} style={{height: '25%', width: '25%', marginLeft: '5%' }}></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.3} speed={2.8}>
            <img src={nutella02} style={{ display: 'block', height: '25%', width: '25%', marginLeft: '30%' }}></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.5} speed={1}>
            <img src={nutella03} style={{ display: 'block', height: '25%', width: '25%', marginLeft: '50%' }}></img>
          </ParallaxLayer>
          <ParallaxLayer offset={2.2} speed={-0.2}>
            <img src={nutella04} style={{ display: 'block', height: '25%', width: '25%', marginLeft: '70%' }}></img>
          </ParallaxLayer>

          {/* Slide Four */}
          <ParallaxLayer offset={3} speed={1} className='grey-background'>
            <Container>
              <Row>
                <Col xs='12'>
                  <h1 className='text-center text-md-left pt-2 pt-lg-5'>How have Oreos Impacted Orangutans?</h1>
                  <Row className='justify-content-center'>
                    <img src={orangutanTrees} className='img-fluid'></img>
                    <img src={orangutanStumps} className='img-fluid'></img>
                  </Row>
                  <p className='text-monospace font-italic'>
                    <br></br>
                    “22 of Mondelēz’s (the parent company of Oreo) palm oil suppliers cleared more than 270 square miles of rainforest — an area larger than the city of San Francisco. Of that area, 96 square miles constituted the habitat of critically endangered orangutans. Palm oil can be made without destroying forests, yet Mondelēz suppliers are still trashing forests and wrecking orangutan habitat, pushing these beautiful and intelligent creatures to the brink of extinction. They’re literally dying for a cookie.” -news.mongabay.com
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
                    <h1>Alternatives to popular products that use palm oil</h1>
                    <br></br>
                    <p>There are many products that use palm oil. Below is a small list of those products and possible alternatives for them.</p>
                    <br></br><br></br>
                  </Row>
                </Col>
                <Col className='split-horizontal d-flex justify-content-center'>
                  <ListGroup>
                    <br></br><br></br>
                    <ListGroupItem>
                      <ListGroupItemHeading>Instead of Oreo...</ListGroupItemHeading>
                      <ListGroupItemText>Try <a href="https://products.wholefoodsmarket.com/product/365-everyday-value-chocolate-sandwich-cremes-c9fd86" target="_top">365 Everyday Value Chocolate Sandwich Cremes</a>; this product is also vegan</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListGroupItemHeading>Instead of Nutella...</ListGroupItemHeading>
                      <ListGroupItemText>Try <a href="https://rigonidiasiago-usa.com/our-products/nocciolata/organic-hazelnut-spread-with-cocoa-and-milk/" target="_top">Nicciolata Organic Hazelnut Spread with Cocoa & Milk</a>; this product is also GMO Free</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListGroupItemHeading>Instead of Clif Bar...</ListGroupItemHeading>
                      <ListGroupItemText>Try <a href="https://www.amazon.com/dp/B01MYU64E4/?tag=onegrepla-20&th=1" target="_top">Health Warriors Chia Bar</a>; this product is 100 calories and has 3g of sugar</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListGroupItemHeading>Instead of JIF Peanut Butter...</ListGroupItemHeading>
                      <ListGroupItemText>Try <a href="https://www.amazon.com/dp/B079Y59DV2/?tag=onegrepla-20&th=1" target="_top">Wild Friends Foods Chocolate Coconut Peanut Butter</a>; this product is kosher and gluten-free</ListGroupItemText>
                    </ListGroupItem>
                  </ListGroup>
                </Col>
              </Row>
            </Container>
          </ParallaxLayer>

          {/* Slide Six */}
          <ParallaxLayer offset={5} speed={0.1}>
            <Container fluid={true}>
              <Row>
                <Col xs='12' className='split-horizontal-mobile light-green-background text-white d-flex justify-content-center'>
                  <Row>
                    <h1>What can you do to help?</h1>
                  </Row>
                </Col>
                <Col className='split-horizontal d-flex justify-content-center'>
                  <ListGroup>
                    <br></br><br></br>
                    <ListGroupItem>
                      <ListGroupItemHeading>Make your own Oreos</ListGroupItemHeading>
                      <ListGroupItemText>
                      Baking is a fun way to relax, plus you know exactly what ingredients are going into your food. And you’ll avoid the extra packaging.
                      Try a recipe: <a href="https://topsecretrecipes.com/nabisco-oreo-cookies-copycat-recipe.html" target="_top">Top Secret Recipes</a> or <a href="https://www.foodnetwork.com/recipes/oreo-cookies-recipe-1972673#!" target="_top">Food Network</a>
                      </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListGroupItemHeading>Eat local cookies</ListGroupItemHeading>
                      <ListGroupItemText>
                      Satisfy your cookie craving and support local businesses that use local ingredients. Two great companies that are local to Seattle are:
                      <a href="http://www.cmbc.com/" target="_top">Cougar Mountain Baking Company</a> <a href="http://www.cowchipcookies.com/bestcookies/" target="_top">Cow Chip Cookies</a>
                      </ListGroupItemText>
                    </ListGroupItem>
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

export default Oreo;
