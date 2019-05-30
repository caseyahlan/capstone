import React, { Component } from 'react';
import { Route, Link, Switch} from 'react-router-dom';
// import MediaQuery from 'react-responsive';
import Scrollspy from 'react-scrollspy'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  Jumbotron,
  ListGroup,
  ListGroupItem,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
import Nutella from './components/nutella';
import Fish from './components/fish';
import Hamburger from './components/hamburger';
import Milk from './components/milk';
import Avocado from './components/avocado';
import Coffee from './components/coffee';
import Banana from './components/banana';
import Rice from './components/rice';
import Bread from './components/bread';
import Oreo from './components/oreo';
import Cocacola from './components/cocacola';
import Candybar from './components/candybar';
import hazelnutSpreadImg from './imgs/hazelnutSpread-04.svg';
import fishImg from './imgs/cookedfish-02.svg';
import hamburgerImg from './imgs/hamburger.svg';
import milkImg from './imgs/milk-02.svg';
import avocadoImg from './imgs/avocado.svg';
import coffeeImg from './imgs/coffee.svg';
import bananaImg from './imgs/banana.svg';
import riceImg from './imgs/rice-bowl.svg';
import breadImg from './imgs/bread-01.svg';
import oreoImg from './imgs/oreo-04.svg';
import sodaImg from './imgs/soda-02.svg';
import chocolateImg from './imgs/chocolate-04.svg';
import strawberryImg from './imgs/strawberry-02.svg'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/nutella' component={Nutella}/>
        <Route path='/fish' component={Fish}/>
        <Route path='/hamburger' component={Hamburger}/>
        <Route path='/milk' component={Milk}/>
        <Route path='/avocado' component={Avocado}/>
        <Route path='/coffee' component={Coffee}/>
        <Route path='/banana' component={Banana}/>
        <Route path='/rice' component={Rice}/>
        <Route path='/bread' component={Bread}/>
        <Route path='/oreo' component={Oreo}/>
        <Route path='/cocacola' component={Cocacola}/>
        <Route path='/candybar' component={Candybar}/>
        <Route path='/sources' component={Sources}/>
      </Switch>
    );
  }
}

class HomePage extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <Jumbotron fluid>
          <Container>
            <h1 class="display-4">Welcome to foodfluence</h1>
            <p class="lead">
              <br></br>
              Choose a food to learn about its environmental impact and what you can do to help!
            </p>
          </Container>
        </Jumbotron>
        <Container>
          <Row>
            <Col sm={12} md={4} lg={3} className='py-3'>
              <Link to='/nutella'>
                <Card className='card-img-top'>
                  <CardImg src={hazelnutSpreadImg} className='my-auto'  alt='nutella'/>
                </Card>
              </Link>
            </Col>
            <Col sm={12} md={4} lg={3} className='py-3'>
              <Link to='/fish'>
                <Card className='card-img-top'>
                  <CardImg src={fishImg} className='my-auto' alt='fish'/>
                </Card>
              </Link>
            </Col>
            <Col sm={12} md={4} lg={3} className='py-3'>
              <Link to='/hamburger'>
                <Card className='card-img-top'>
                  <CardImg src={hamburgerImg} className='my-auto' alt='hamburger' />
                </Card>
              </Link>
            </Col>
            <Col sm={12} md={4} lg={3} className='py-3'>
              <Link to='/milk'>
                <Card className='card-img-top'>
                  <CardImg src={milkImg} className='my-auto' alt='milk'/>
                </Card>
              </Link>
            </Col>
            <Col sm={12} md={4} lg={3} className='py-3'>
              <Link to='/avocado'>
                <Card className='card-img-top'>
                  <CardImg src={avocadoImg} className='my-auto' alt='avocado'/>
                </Card>
              </Link>
            </Col>
            <Col sm={12} md={4} lg={3} className='py-3'>
              <Link to='/coffee'>
                <Card className='card-img-top'>
                  <CardImg src={coffeeImg} className='my-auto' alt='coffee'/>
                </Card>
              </Link>
            </Col>
            <Col sm={12} md={4} lg={3} className='py-3'>
              <Link to='/banana'>
                <Card className='card-img-top'>
                  <CardImg src={bananaImg} className='my-auto' alt='banana'/>
                </Card>
              </Link>
            </Col>
            <Col sm={12} md={4} lg={3} className='py-3'>
              <Link to='/rice'>
                <Card className='card-img-top'>
                  <CardImg src={riceImg} className='my-auto' alt='rice'/>
                </Card>
              </Link>
            </Col>
            <Col sm={12} md={4} lg={3} className='py-3'>
              <Link to='/bread'>
                <Card className='card-img-top'>
                  <CardImg src={breadImg} className='my-auto' alt='bread'/>
                </Card>
              </Link>
            </Col>
            <Col sm={12} md={4} lg={3} className='py-3'>
              <Link to='/oreo'>
                <Card className='card-img-top'>
                  <CardImg src={oreoImg} className='my-auto' alt='oreo'/>
                </Card>
              </Link>
            </Col>
            <Col sm={12} md={4} lg={3} className='py-3'>
              <Link to='/cocacola'>
                <Card className='card-img-top'>
                  <CardImg src={sodaImg} className='my-auto' alt='cocacola'/>
                </Card>
              </Link>
            </Col>
            <Col sm={12} md={4} lg={3} className='py-3'>
              <Link to='/candybar'>
                <Card className='card-img-top'>
                  <CardImg src={chocolateImg} className='my-auto' alt='candybar'/>
                </Card>
              </Link>
            </Col>
          </Row>
        </Container>
        <MDBFooter className="font-small pt-4 mt-4 grey-background">
          <MDBContainer fluid className="text-center text-md-left">
            <p className='text-center'>
              We do not endorse any of the products we suggest as alternatives.
            </p>
          </MDBContainer>
        </MDBFooter>
      </div>
    )
  }
}

class Sources extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <Container>
          <Row>
            <Col sm={2}>
              <Nav vertical className='sticky-top mt-3' id="source-list">
                <NavItem>
                  <NavLink href="#avocado-sources">Avocado</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#banana-sources">Banana</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#bread-sources">Bread</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#coffee-sources">Coffee</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#fishing-sources">Fishing</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#hamburger-sources">Hamburger</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#milk-sources">Milk</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#nutella-sources">Nutella</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#oreo-sources">Oreo</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#rice-sources">Rice</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#soda-sources">Soda</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#chocolate-sources">Chocolate</NavLink>
                </NavItem>
              </Nav>
            </Col>

            <Col sm={10}>
              <h1 className='mt-3'>Our Sources</h1>
              <p>Some blurb about our sources and how we are impartial and pulled from a variety of different sources</p>
              <br></br>
              <h2 id='avocado-sources'>Avocado sources</h2>
              <ListGroup flush>
                <ListGroupItem>
                  <a href="https://www.canr.msu.edu/news/avocado_consumption_environmental_and_social_considerations" target="_top">Avocado consumption: environmental and social considerations</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="https://www.vice.com/en_uk/article/7xm8ab/this-is-how-bad-your-avocado-obsession-is-for-the-world">This Is How Bad Your Avocado Obsession Is for the World</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="https://e-csr.net/benefits-avocados-production-bad-people-planet-27107/" target="_top">Are Avocados Sustainable? What Are The Consequences Of Avocado Production?</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="https://www.theguardian.com/commentisfree/2016/aug/12/hispters-handle-unpalatable-truth-avocado-toast" target="_top">Can hipsters stomach the unpalatable truth about avocado toast?</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="https://www.nytimes.com/2016/11/18/world/americas/ambition-of-avocado-imperils-monarch-butterflies-winter-home.html" target="_top">Avocados Imperil Monarch Butterflies’ Winter Home in Mexico</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="https://fruitguys.com/almanac/2018/03/09/avocado-addiction" target="_top">4 ways to enjoy avocados more sustainably</a>
                </ListGroupItem>
              </ListGroup>

              <br></br><br></br>

              <h2 id='banana-sources'>Banana sources</h2>
              <ListGroup flush>
                <ListGroupItem>
                  <a href="https://www.onegreenplanet.org/animalsandnature/the-human-and-environmental-impact-of-bananas/" target="_top">The Human and Environmental Impact of Bananas</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="http://jrscience.wcp.muohio.edu/fieldcourses07/PapersCostaRicaArticles/BananaPlantationsandtheEn.html" target="_top">Banana Plantations and the Environment</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="https://www.npr.org/sections/thesalt/2013/09/24/225793450/global-love-of-bananas-may-be-hurting-costa-ricas-crocodiles" target="_top">Global Love Of Bananas May Be Hurting Costa Rica's Crocodiles</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="https://www.fairtrade.org.uk/Media-Centre/Blog/2018/August/Top-12-Facts-about-Fairtrade-Bananas" target="_top">Top 12 Facts about Fairtrade Bananas</a>
                </ListGroupItem>
              </ListGroup>

              <br></br><br></br>

              <h2 id='bread-sources'>Bread sources</h2>
              <ListGroup flush>
                <ListGroupItem>
                  <a href="https://www.bbc.com/news/science-environment-39106180" target="_top">Bread's environmental costs are counted</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="https://www.treehugger.com/green-food/whats-environmental-impact-loaf-bread.html" target="_top">What's the environmental impact of a loaf of bread?</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="https://phys.org/news/2017-02-environmental-impact-loaf-bread.html" target="_top">How to reduce the environmental impact of a loaf of bread?</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="https://www.npr.org/sections/thesalt/2017/02/27/517531611/whats-the-environmental-footprint-of-a-loaf-of-bread-now-we-know" target="_top">What's The Environmental Footprint Of A Loaf Of Bread? Now We Know</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="https://www.cnn.com/2017/03/03/world/cost-of-bread-conversation/index.html" target="_top">We've calculated the environmental cost of a loaf of bread (and what to do about it)</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="https://www.theguardian.com/environment/2018/mar/22/dead-zone-gulf-of-mexico-decades-recover-study" target="_top">'Dead zone' in Gulf of Mexico will take decades to recover from farm pollution</a>
                </ListGroupItem>
              </ListGroup>

              <br></br><br></br>

              <h2 id='coffee-sources'>Coffee sources</h2>
              <ListGroup flush>
                <ListGroupItem>
                  <a href="https://www.seattletimes.com/life/lifestyle/wake-up-to-coffees-impact/" target="_top">Wake up to coffee’s impact</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="https://www.theguardian.com/environment/2011/oct/04/green-coffee" target="_top">How green is your coffee?</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="https://www.onegreenplanet.org/animalsandnature/coffee-and-its-impact-on-people-animals-and-the-planet/" target="_top">Coffee and its Impact on People, Animals and the Planet</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="https://www.sustainablebusinesstoolkit.com/environmental-impact-coffee-trade/" target="_top">The Environmental Impact of Coffee Production: What’s Your Coffee Costing The Planet?</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="http://livablefutureblog.com/2017/08/coffee-part-3-how-your-starbucks-cup-can-create-positive-change" target="_top">Coffee Part 3: How Your Starbucks Cup Can Create Positive Change</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="http://livablefutureblog.com/2017/08/coffee-part-1-environment" target="_top">Coffee Part 1: How Your Cup Affects the Environment</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="https://kcts9.pbslearningmedia.org/resource/467891618-agriculture-farming-forestry/the-coffee-economy-in-costa-rica-agriculture-and-forestry/" target="_top">The Coffee Economy In Costa Rica | Agriculture and Forestry</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="https://www.nationalgeographic.com/animals/2019/04/shade-trees-coffee-plantations-effect-bird-biodiversity/" target="_top">How can coffee plantations be more bird-friendly?</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="https://www.thegoodtrade.com/features/fair-trade-coffee-brands" target="_top">15 Fair Trade Coffee Brands Worth Waking Up For</a>
                </ListGroupItem>
              </ListGroup>

              <br></br><br></br>

              <h2 id='fishing-sources'>Fishing sources</h2>
              <ListGroup flush>
                <ListGroupItem>
                  <a href="https://www.environmentalscience.org/environmental-consequences-fishing-practices " target="_top">What Is The Environmental Impact Of The Fishing Industry?</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="https://www.worldatlas.com/articles/what-is-the-environmental-impact-of-the-fishing-industry.html" target="_top">Environmental Consequences of Fishing Practices</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="https://www.msc.org/what-we-are-doing/our-approach/what-is-sustainable-fishing" target="_top">What is sustainable fishing?</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="https://oceanconservancy.org/sustainable-fisheries/ " target="_top">Sustainable Fisheries</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="https://oceanservice.noaa.gov/facts/coral-overfishing.html" target="_top">How does overfishing threaten coral reefs?</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="https://www.houstonpress.com/restaurants/10-fish-youre-eating-that-are-endangered-species-6439972" target="_top">10 Fish You're Eating That Are Endangered Species</a>
                </ListGroupItem>
              </ListGroup>

              <br></br><br></br>

              <h2 id='hamburger-sources'>Hamburger sources</h2>
              <ListGroup flush>
              <ListGroupItem>
                <a href="https://www.npr.org/sections/thesalt/2012/06/27/155527365/visualizing-a-nation-of-meat-eaters" target="_top">A Nation Of Meat Eaters: See How It All Adds Up</a>
              </ListGroupItem>
              <ListGroupItem>
                <a href="https://www.wsj.com/articles/SB120001666638282817" target="_top">How Much Water Goes Into a Burger? Studies Find Different Answers</a>
              </ListGroupItem>
              <ListGroupItem>
                <a href="https://www.pbs.org/newshour/science/the-hidden-costs-of-hamburgers" target="_top">The Hidden Costs of Hamburgers</a>
              </ListGroupItem>
              <ListGroupItem>
                <a href="https://www.independent.co.uk/life-style/food-and-drink/features/why-we-should-be-trying-to-make-the-most-sustainable-burgers-possible-a8243546.html" target="_top">Why we should be trying to make the most of sustainable burgers possible</a>
              </ListGroupItem>
              <ListGroupItem>
                <a href="https://www.ucsusa.org/global-warming/stop-deforestation/beef-deforestation-scorecard" target="_top">Cattle, Cleared Forests, and Climate Change: Scoring Global Companies on their Deforestation-Free Beef Commitments and Practices</a>
              </ListGroupItem>
              </ListGroup>

              <br></br><br></br>

              <h2 id='milk-sources'>Milk sources</h2>
              <ListGroup flush>
                <ListGroupItem>
                  <a href="https://inhabitat.com/how-to-choose-the-healthiest-most-sustainable-milk-alternative/" target="_top">How to choose the healthiest, most sustainable milk alternative</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="https://www.sierraclub.org/sierra/got-nondairy-alternative-milk" target="_top">Got Nondairy Alternative Milk?</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="https://www.planetvision.com/blog/2018/02/28/ask-emily-sustainable-milk" target="_top">Ask Emily! Almond, Soy, or Cow: Which milk is more sustainable?</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="https://www.nytimes.com/2015/05/04/business/energy-environment/how-growth-in-dairy-is-affecting-the-environment.html" target="_top">How Growth in Dairy Is Affecting the Environment</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="https://e360.yale.edu/features/as_dairy_farms_grow_bigger_new_concerns_about_pollution" target="_top">As Dairy Farms Grow Bigger, New Concerns About Pollution</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="https://www.onegreenplanet.org/animalsandnature/the-dairy-industry-and-the-environment/" target="_top">Milk Life? How About Milk Destruction: The Shocking Truth About the Dairy Industry and the Environment</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="https://www.americandairy.com/dairy-farms/dairy-farming.stml" target="_top">Dairy Farming History</a>
                </ListGroupItem>
              </ListGroup>

              <br></br><br></br>

              <h2 id='nutella-sources'>Nutella sources</h2>
              <ListGroup flush>
                <ListGroupItem>
                  <a href="https://www.planetforward.org/idea/facing-the-facts-about-nutella-palm-oil-the-environment" target="_top">Facing the facts about Nutella, palm oil & the environment</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="https://www.bbc.com/news/world-europe-33163534 " target="_top">French minister says Nutella spread 'damages environment'</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="https://www.orangutantrekkingtours.com/orangutan-blog/palm-oil-products-are-killing-orangutans/" target="_top">How Everyday Palm Oil Products Are Killing Orangutans</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="https://www.epicurious.com/archive/blogs/editor/2014/03/nutella-alternatives.html " target="_top">Move Over, Nutella: Nine Alternative Chocolate-Hazelnut Spreads</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="https://www.onegreenplanet.org/vegan-food/15-palm-oil-free-products-for-more-eco-friendly-snacking/ " target="_top">15 Palm-Oil Free Products for More Eco-Friendly Snacking</a>
                </ListGroupItem>
              </ListGroup>

              <br></br><br></br>

              <h2 id='oreo-sources'>Oreo sources</h2>
              <ListGroup flush>
                <ListGroupItem>
                  <a href="https://www.sunshineguerrilla.com/2016/06/dont-buy-oreos-instead-try.html" target="_top">Don't Buy Oreos, Instead Try...</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="https://www.forbes.com/sites/lanabandoim/2018/10/16/mondelez-will-make-all-of-its-packaging-recyclable-by-2025/#57d9d3d87484" target="_top">Mondelēz Will Make All Of Its Packaging Recyclable By 2025</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="https://slate.com/technology/2014/12/palm-tree-oil-and-the-environment-skip-the-cookies-to-fight-climate-change.html" target="_top">Hold the Cookies, Save the Climate</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="https://www.bloomberg.com/news/articles/2018-11-14/oreo-cookie-maker-targeted-by-greenpeace-to-save-orangutans" target="_top">Oreo Cookie Maker Targeted by Greenpeace to Save Orangutans</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="https://www.huffpost.com/entry/oreos-orangutans-and-unin_b_7894" target="_top">Oreos, Orangutans and Unintended Consequences</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="https://news.mongabay.com/2018/11/oreo-maker-linked-to-destruction-of-orangutan-habitat-in-indonesia/" target="_top">Oreo maker linked to destruction of orangutan habitat in Indonesia</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="https://www.fastcompany.com/90267040/greenpeace-unveils-a-new-oreo-flavor-deforestation" target="_top">Greenpeace unveils a new Oreo flavor: Deforestation</a>
                </ListGroupItem>
              </ListGroup>

              <br></br><br></br>

              <h2 id='rice-sources'>Rice sources</h2>
              <ListGroup flush>
                <ListGroupItem>
                  <a href="https://www.wri.org/blog/2014/12/more-rice-less-methane" target="_top">More Rice, Less Methane</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="https://www.sciencedaily.com/releases/2012/10/121021154455.htm" target="_top">Rice agriculture accelerates global warming: More greenhouse gas per grain of rice</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="https://www.irri.org/our-work/outcome-themes/developing-environmentally-sustainable-solutions-rice-systems" target="_top">Developing environmentally sustainable solutions for rice systems</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="https://www.eco-business.com/opinion/in-addressing-climate-change-rice-production-needs-more-attention-and-urgent-action/" target="_top">In addressing climate change, rice production needs more attention and urgent action</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="https://www.care2.com/greenliving/when-to-avoid-rice-8-alternatives-to-try-instead.html" target="_top">When to Avoid Rice + 8 Healthy Alternatives to Try Instead</a>
                </ListGroupItem>
              </ListGroup>

              <br></br><br></br>

              <h2 id='soda-sources'>Soda sources</h2>
              <ListGroup flush>
                <ListGroupItem>
                  <a href="https://medium.com/@danielle_67565/is-soda-as-bad-for-the-environment-as-it-is-for-your-health-249ef3e3fa05" target="_top">Is Soda as Bad for the Environment as it is for Your Health?</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="https://inews.co.uk/news/environment/always-coca-cola-fizzy-drinks-giants-shocking-impact-oceans/" target="_top">Revealed: Coca-Cola sells 3,500 environmentally damaging plastic bottles every second</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="https://www.theguardian.com/commentisfree/2017/may/02/plastic-bottles-coca-cola-recycling-coke" target="_top">Plastic bottles are a recycling disaster. Coca-Cola should have known better</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="https://www.greenlivingtips.com/articles/soda-and-the-environment.html" target="_top">Making soda at home – lessening environmental impact</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="https://vinepair.com/articles/environment-soda-beer/" target="_top">What’s Worse for the Environment, Soda or Beer?</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="http://woundednature.org/environmental-issues/cola-wars-impact-on-marine-life/" target="_top">Cola Wars Impact on Marine Life</a>
                </ListGroupItem>
              </ListGroup>

              <br></br><br></br>

              <h2 id='chocolate-sources'>Chocolate sources</h2>
              <ListGroup flush>
                <ListGroupItem>
                  <a href="" target="_top">Is</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="" target="_top">Revealed</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="" target="_top">Plastic</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="" target="_top">Making</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="" target="_top">What’s</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="" target="_top">Cola</a>
                </ListGroupItem>
              </ListGroup>

              <br></br><br></br>

            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Container>
        <Link class="navbar-brand" to="/">
          <img src={strawberryImg} width="50" height="50" class="d-inline-block align-center" alt="" />
          foodfluence
        </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarToggler">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <Link class="nav-link" to="/sources">sources</Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://caseyahlan.github.io/landingpage/?fbclid=IwAR3P_NdjgG8vzpLCwXoyCQfjeBrmJyzeX-iQNE55-GK286utfl3VOeufCBg#!">about us</a>
            </li>
          </ul>
        </div>
        </Container>
      </nav>
    )
  }
}

export default App;
