import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Spring } from 'react-spring/renderprops';
import { Container, Row, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
class Nutella extends Component {
    render() {
      return (
          <Parallax ref={ref => (this.parallax = ref)} pages={7}>
            
            {/* Background colors for each slide */}
            {/* <ParallaxLayer offset={0} speed={1} className='pink-background'/> */}
            <ParallaxLayer offset={1} speed={1} className='grey-background'/>
            <ParallaxLayer offset={2} speed={1} />

            {/* Titles for each slide */}
            {/* <ParallaxLayer offset={1.05} speed={1.5} style={{ pointerEvents: 'none' }}>
              <h1 className='text-center'>About Nutella</h1>
            </ParallaxLayer> */}
    
            <ParallaxLayer offset={2.05} speed={1.5} style={{ pointerEvents: 'none' }}>
              <h1 style={{ width: '70%', marginLeft: '5%' }}>Impact of Palm Oil</h1>
            </ParallaxLayer>
    
            {/* Content for each slide */}
            <ParallaxLayer offset={1} speed={0.1} style={{ }}>
              <h1 className='text-sm-center text-md-left px-md-5 pt-md-5'>About Nutella</h1>
              <Row className='px-md-5'>
                <Col sm='12' md='5'>
                  <p className='text-monospace'>
                    Nutella is a popular hazelnut spread that is commonly used in many food products. Currently, there are 7 well known ingredients: sugar, palm oil, hazelnuts, cocoa, milk, soy, and vanilla (Citation 1). 
                  </p>
                </Col>
              </Row>
              <Row className='px-md-5'>
                <Col sm='12' md='5'>
                  <p className='text-monospace'>
                    Just by looking at the ingredients, nutella seems like a perfect choice for many recipes. However, nutella’s heavy use of palm oil spreads damage to the environment. 
                  </p>
                </Col>
              </Row>
            </ParallaxLayer>
            
            <ParallaxLayer offset={2} speed={0.1} style={{ }}>
              <h1>palm circles go here</h1>
            </ParallaxLayer>

            <ParallaxLayer offset={3} speed={1} style={{ }}>
              <h1 className='text-sm-center text-md-left px-md-5 pt-md-5'>How has Nutella Impacted Orangutans?</h1>
              <Row className='px-md-5'>
                <Col sm='12' md='5'>
                  <p className='text-monospace font-italic'>
                  “Over 50,000 orangutans on the islands of Borneo and Sumatra have died because of palm oil deforestation. Orangutans whose habitats have been destroyed often enter villages and oil plantations 
                  in search of food where they are captured or killed by farmers who treat them as pests.  In 2016, it was reported that just 45,000 orangutans remained in Borneo and at this rate, 
                  they will be extinct in the wild in just 25 years”. -orangutantrekkingtours.com
                  </p>
                </Col>
              </Row>
            </ParallaxLayer>

            <ParallaxLayer offset={4} speed={0.5}>
              <Container fluid='true'>
                <Row>
                  <Col md='6' className='split-vertical pink-background text-white d-flex align-items-center flex-wrap'>
                    <Row>
                      <h1>Alternatives to popular products that use palm oil</h1>
                      <p>There are many products that use palm oil. Below is a small list of those products and possible alternatives for them.</p>
                    </Row>
                  </Col>
                  <Col md='6' className='split-vertical'>
                    <ListGroup>
                      <ListGroupItem>
                        <ListGroupItemHeading>Nutella</ListGroupItemHeading>
                        <ListGroupItemText>Try Nicciolata Organic Hazelnut Spread with Cocoa & Milk; this product is also GMO Free</ListGroupItemText>
                      </ListGroupItem>
                      <ListGroupItem>
                        <ListGroupItemHeading>Clif Bar</ListGroupItemHeading>
                        <ListGroupItemText>Try Health Warriors Chia Bar; this product is 100 calories and has 3g of sugar</ListGroupItemText>
                      </ListGroupItem>
                      <ListGroupItem>
                        <ListGroupItemHeading>JIF Peanut Butter</ListGroupItemHeading>
                        <ListGroupItemText>Try Wild Friends Foods Chocolate Coconut Peanut Butter; this product is kosher and gluten-free</ListGroupItemText>
                      </ListGroupItem>
                    </ListGroup>
                  </Col>
                </Row>
              </Container>
            </ParallaxLayer>

            <ParallaxLayer offset={5} speed={0.1}>
              <Container fluid='true'>
                <Row>
                  <Col md='6' className='split-vertical pink-background text-white d-flex align-items-center'>
                    <h1>What can you do to help?</h1>
                  </Col>
                  <Col md='6' className='split-vertical'>
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
              offset={0}
              speed={0.1}
              onClick={() => this.parallax.scrollTo(1)}
              style={{ display: 'flex', alignItems: 'center' }}>
              <Container fluid='true'>
                <Row>
                  <Col xs='12' className='split-horizontal pink-background d-flex justify-content-center align-items-end'>
                    <h1 className='text-white pb-3'>Nutella</h1>
                  </Col>
                {/* </Row>
                <Row> */}
                  <Col xs='12' className='split-horizontal d-flex justify-content-center'>
                    <h3 className='pt-5'>Know Your Impact</h3>
                  </Col>
                </Row>
              </Container>
              {/* <div style={{ backgroundColor: '#ffffff', width: '100%', height: '50%', position: 'relative', bottom: '0' }}></div> */}
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

export default Nutella;