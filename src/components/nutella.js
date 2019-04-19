import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Spring } from 'react-spring/renderprops';
import { Container, Row, Col } from 'reactstrap';
class Nutella extends Component {
    render() {
      return (
          <Parallax ref={ref => (this.parallax = ref)} pages={7}>
            
            {/* Background colors for each slide */}
            <ParallaxLayer offset={0} speed={1} style={{ backgroundColor: '#E61A58' }}/>
            <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#d4d4d4' }}/>
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
    
            <ParallaxLayer
              offset={0}
              speed={0.1}
              onClick={() => this.parallax.scrollTo(1)}
              style={{ display: 'flex', alignItems: 'center' }}>
              <Container className='text-center'>
                <Row>
                  <Col>
                    <h1>Nutella</h1>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h3>Know Your Impact</h3>
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
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              onClick={() => this.parallax.scrollTo(3)}>
              <img src='https://vectr.com/tmp/a19mOuHvgF/b2RJ0682uA.svg?width=451.03&height=250&select=fJycNYaHz,a4eEByws9B,g3bdeiGle,aKh5hjDVk,e7IidWsg1,eDagJRHhR,b5YMasxcQf,g1nKjucdzP&source=selection' style={{ width: '60%' }} />
            </ParallaxLayer>
    
            <ParallaxLayer
              offset={3}
              speed={0.1}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              onClick={() => this.parallax.scrollTo(4)}>
              <img src='https://cdn11.bigcommerce.com/s-hii7479o/images/stencil/original/products/10545/26845/fish_1__56306.1526673301.png?c=2' style={{ width: '20%' }} />
            </ParallaxLayer>
    
            <ParallaxLayer
              offset={4}
              speed={0.1}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              onClick={() => this.parallax.scrollTo(5)}>
              <img src='https://cdn11.bigcommerce.com/s-hii7479o/images/stencil/original/products/10545/26845/fish_1__56306.1526673301.png?c=2' style={{ width: '20%' }} />
            </ParallaxLayer>
    
            <ParallaxLayer
              offset={5}
              speed={0.1}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              onClick={() => this.parallax.scrollTo(6)}>
              <img src='https://cdn11.bigcommerce.com/s-hii7479o/images/stencil/original/products/10545/26845/fish_1__56306.1526673301.png?c=2' style={{ width: '20%' }} />
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