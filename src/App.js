import React, { Component } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Spring } from 'react-spring/renderprops';
// import { Jumbotron } from 'react-bootstrap/Jumbotron';

// const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
const Pink = ({ children }) => <span style={{ color: '#FF6AC1' }}>{children}</span>
const Yellow = ({ children }) => <span style={{ color: '#EFF59B' }}>{children}</span>
const Lightblue = ({ children }) => <span style={{ color: '#9AEDFE' }}>{children}</span>
const Green = ({ children }) => <span style={{ color: '#57EE89' }}>{children}</span>
const Blue = ({ children }) => <span style={{ color: '#57C7FF' }}>{children}</span>
const Gray = ({ children }) => <span style={{ color: '#909090' }}>{children}</span>

class App extends Component {
  render() {
    return (
      <Parallax ref={ref => (this.parallax = ref)} pages={9}>
        <ParallaxLayer offset={0} speed={1} style={{ backgroundColor: '#4454E0' }} />
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#87BCDE' }} />

        <ParallaxLayer offset={2} speed={1} factor={5}>
          <h1>IMPACTS OF FISHING</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src='https://cdn11.bigcommerce.com/s-hii7479o/images/stencil/original/products/10545/26845/fish_1__56306.1526673301.png?c=2' style={{ width: '15%', marginLeft: '70%' }} />
        </ParallaxLayer>

        {/* <ParallaxLayer offset={2.5} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
          <img src='http://pluspng.com/img-png/circle-png-circle-png-hd-1600.png' style={{ width: '20%' }} />
        </ParallaxLayer> */}

        {/* <ParallaxLayer offset={2} speed={0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'left', pointerEvents: 'none' }}>
          <img src='http://pluspng.com/img-png/circle-png-circle-png-hd-1600.png' style={{ width: '20%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'right', pointerEvents: 'none' }}>
          <img src='http://pluspng.com/img-png/circle-png-circle-png-hd-1600.png' style={{ width: '20%' }} />
        </ParallaxLayer> */}

        {/* <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: '80%',
            backgroundPosition: 'center',
            backgroundImage: 'http://pluspng.com/img-png/circle-png-circle-png-hd-1600.png'
          }}
        /> */}

        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(1)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Spring
            from={{ opacity: 0 }}
            to={{opacity: 1 }}>
            {props => <h1 style={props}>FISH</h1>}
          </Spring>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(2)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}>
            {props => <p style={props}>Research, however, has indicated that if the fishing industry continues as is, wild-caught seafood will be non-existent by the year 2048 - worldatlas.com</p>}
          </Spring>
        </ParallaxLayer>

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
          onClick={() => this.parallax.scrollTo(7)}>
          <img src='https://cdn11.bigcommerce.com/s-hii7479o/images/stencil/original/products/10545/26845/fish_1__56306.1526673301.png?c=2' style={{ width: '20%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={7}
          speed={0.1}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={() => this.parallax.scrollTo(8)}>
          <img src='https://cdn11.bigcommerce.com/s-hii7479o/images/stencil/original/products/10545/26845/fish_1__56306.1526673301.png?c=2' style={{ width: '20%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={8}
          speed={-0}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={() => this.parallax.scrollTo(0)}>
          <img src='https://cdn11.bigcommerce.com/s-hii7479o/images/stencil/original/products/10545/26845/fish_1__56306.1526673301.png?c=2' style={{ width: '20%' }} />
        </ParallaxLayer>
      </Parallax>
    )
  }
}

export default App;
