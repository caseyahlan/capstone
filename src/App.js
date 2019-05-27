import React, { Component } from 'react';
import { Route, Link, Switch, NavLink} from 'react-router-dom';
// import MediaQuery from 'react-responsive';
import {
  Container,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Collapse,
  Card,
  CardImg } from 'reactstrap';
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
import hazelnutSpreadImg from './imgs/hazelnutSpread-04.svg';
import fishImg from './imgs/cookedfish-02.svg';
import hamburgerImg from './imgs/hamburger.svg';
import milkImg from './imgs/milk-02.svg';
import avocadoImg from './imgs/avocado.svg';
import coffeeImg from './imgs/coffee.svg';
import bananaImg from './imgs/banana.svg';
import riceImg from './imgs/rice-bowl.svg';
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
        <Route path='/sources' component={Sources}/>
      </Switch>
    );
  }
}

class HomePage extends Component {
  // constructor(props) {
  //   super(props);

  //   this.toggle = this.bind.toggle(this);
  //   this.state = {
  //     isOpen: false
  //   };
  // }

  // toggle() {
  //   this.setState({
  //     isOpen: !this.state.isOpen
  //   });
  // }

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div class="jumbotron jumbotron-fluid">
          <Container>
            <h1 class="display-4">Welcome to foodfluence</h1>
            <p class="lead">Choose a food to learn about its environmental impact!</p>
          </Container>
        </div>
        <Container>
          <Row>
            <Col sm={12} md={4} lg={3} className='py-3'>
              <Link to='/nutella'>
                <Card className='card-img-top'>
                  <CardImg src={hazelnutSpreadImg} alt='nutella'/>
                </Card>
              </Link>
            </Col>
            <Col sm={12} md={4} lg={3} className='py-3'>
              <Link to='/fish'>
                <Card className='card-img-top'>
                  <CardImg src={fishImg} alt='fish'/>
                </Card>
              </Link>
            </Col>
            <Col sm={12} md={4} lg={3} className='py-3'>
              <Link to='/hamburger'>
                <Card className='card-img-top'>
                  <CardImg src={hamburgerImg} alt='hamburger' />
                </Card>
              </Link>
            </Col>
            <Col sm={12} md={4} lg={3} className='py-3'>
              <Link to='/milk'>
                <Card className='card-img-top'>
                  <CardImg src={milkImg} alt='milk'/>
                </Card>
              </Link>
            </Col>
            <Col sm={12} md={4} lg={3} className='py-3'>
              <Link to='/avocado'>
                <Card className='card-img-top'>
                  <CardImg src={avocadoImg} alt='avocado'/>
                </Card>
              </Link>
            </Col>
            <Col sm={12} md={4} lg={3} className='py-3'>
              <Link to='/coffee'>
                <Card className='card-img-top'>
                  <CardImg src={coffeeImg} alt='coffee'/>
                </Card>
              </Link>
            </Col>
            <Col sm={12} md={4} lg={3} className='py-3'>
              <Link to='/banana'>
                <Card className='card-img-top'>
                  <CardImg src={bananaImg} alt='banana'/>
                </Card>
              </Link>
            </Col>
            <Col sm={12} md={4} lg={3} className='py-3'>
              <Link to='/rice'>
                <Card className='card-img-top'>
                  <CardImg src={riceImg} alt='rice'/>
                </Card>
              </Link>
            </Col>
            <Col sm={12} md={4} lg={3} className='py-3'>
              <Link to='/bread'>
                <Card className='card-img-top'>
                  <CardImg src={avocadoImg} alt='bread'/>
                </Card>
              </Link>
            </Col>
            <Col sm={12} md={4} lg={3} className='py-3'>
              <Link to='/oreo'>
                <Card className='card-img-top'>
                  <CardImg src={coffeeImg} alt='oreo'/>
                </Card>
              </Link>
            </Col>
            <Col sm={12} md={4} lg={3} className='py-3'>
              <Link to='/cocacola'>
                <Card className='card-img-top'>
                  <CardImg src={hamburgerImg} alt='cocacola'/>
                </Card>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

class Sources extends Component {
  render() {
    return (
      <div>
        Avocado sources
        <br></br>
        <a href="https://www.canr.msu.edu/news/avocado_consumption_environmental_and_social_considerations" target="_top">Avocado consumption: environmental and social considerations</a>
        <br></br>
        <a href="https://www.vice.com/en_uk/article/7xm8ab/this-is-how-bad-your-avocado-obsession-is-for-the-world">This Is How Bad Your Avocado Obsession Is for the World</a>
        <br></br>
        <a href="https://e-csr.net/benefits-avocados-production-bad-people-planet-27107/" target="_top">Are Avocados Sustainable? What Are The Consequences Of Avocado Production?</a>
        <br></br>
        <a href="https://www.theguardian.com/commentisfree/2016/aug/12/hispters-handle-unpalatable-truth-avocado-toast" target="_top">Can hipsters stomach the unpalatable truth about avocado toast?</a>
        <br></br>
        <a href="https://www.nytimes.com/2016/11/18/world/americas/ambition-of-avocado-imperils-monarch-butterflies-winter-home.html" target="_top">Avocados Imperil Monarch Butterflies’ Winter Home in Mexico</a>
        <br></br>
        <a href="https://fruitguys.com/almanac/2018/03/09/avocado-addiction" target="_top">4 ways to enjoy avocados more sustainably</a>
        <br></br><br></br>
        Banana sources
        <br></br>
        <a href="https://www.onegreenplanet.org/animalsandnature/the-human-and-environmental-impact-of-bananas/" target="_top">The Human and Environmental Impact of Bananas</a>
        <br></br>
        <a href="http://jrscience.wcp.muohio.edu/fieldcourses07/PapersCostaRicaArticles/BananaPlantationsandtheEn.html" target="_top">Banana Plantations and the Environment</a>
        <br></br>
        <a href="https://www.npr.org/sections/thesalt/2013/09/24/225793450/global-love-of-bananas-may-be-hurting-costa-ricas-crocodiles" target="_top">Global Love Of Bananas May Be Hurting Costa Rica's Crocodiles</a>
        <br></br>
        <a href="https://www.fairtrade.org.uk/Media-Centre/Blog/2018/August/Top-12-Facts-about-Fairtrade-Bananas" target="_top">Top 12 Facts about Fairtrade Bananas</a>
        <br></br><br></br>
        Bread sources
        <br></br>
        <a href="https://www.bbc.com/news/science-environment-39106180" target="_top">Bread's environmental costs are counted</a>
        <br></br>
        <a href="https://www.treehugger.com/green-food/whats-environmental-impact-loaf-bread.html" target="_top">What's the environmental impact of a loaf of bread?</a>
        <br></br>
        <a href="https://phys.org/news/2017-02-environmental-impact-loaf-bread.html" target="_top">How to reduce the environmental impact of a loaf of bread?</a>
        <br></br>
        <a href="https://www.npr.org/sections/thesalt/2017/02/27/517531611/whats-the-environmental-footprint-of-a-loaf-of-bread-now-we-know" target="_top">What's The Environmental Footprint Of A Loaf Of Bread? Now We Know</a>
        <br></br>
        <a href="https://www.cnn.com/2017/03/03/world/cost-of-bread-conversation/index.html" target="_top">We've calculated the environmental cost of a loaf of bread (and what to do about it)</a>
        <br></br>
        <a href="https://www.theguardian.com/environment/2018/mar/22/dead-zone-gulf-of-mexico-decades-recover-study" target="_top">'Dead zone' in Gulf of Mexico will take decades to recover from farm pollution</a>
        <br></br><br></br>
        Coffee sources
        <br></br>
        <a href="https://www.seattletimes.com/life/lifestyle/wake-up-to-coffees-impact/" target="_top">Wake up to coffee’s impact</a>
        <br></br>
        <a href="https://www.theguardian.com/environment/2011/oct/04/green-coffee" target="_top">How green is your coffee?</a>
        <br></br>
        <a href="https://www.onegreenplanet.org/animalsandnature/coffee-and-its-impact-on-people-animals-and-the-planet/" target="_top">Coffee and its Impact on People, Animals and the Planet</a>
        <br></br>
        <a href="https://www.sustainablebusinesstoolkit.com/environmental-impact-coffee-trade/" target="_top">The Environmental Impact of Coffee Production: What’s Your Coffee Costing The Planet?</a>
        <br></br>
        <a href="http://livablefutureblog.com/2017/08/coffee-part-3-how-your-starbucks-cup-can-create-positive-change" target="_top">Coffee Part 3: How Your Starbucks Cup Can Create Positive Change</a>
        <br></br>
        <a href="http://livablefutureblog.com/2017/08/coffee-part-1-environment" target="_top">Coffee Part 1: How Your Cup Affects the Environment</a>
        <br></br>
        <a href="https://kcts9.pbslearningmedia.org/resource/467891618-agriculture-farming-forestry/the-coffee-economy-in-costa-rica-agriculture-and-forestry/" target="_top">The Coffee Economy In Costa Rica | Agriculture and Forestry</a>
        <br></br>
        <a href="https://www.nationalgeographic.com/animals/2019/04/shade-trees-coffee-plantations-effect-bird-biodiversity/" target="_top">How can coffee plantations be more bird-friendly?</a>
        <br></br>
        <a href="https://www.thegoodtrade.com/features/fair-trade-coffee-brands" target="_top">15 Fair Trade Coffee Brands Worth Waking Up For</a>
        <br></br><br></br>
        Fishing sources
        <br></br>
        <a href="https://www.environmentalscience.org/environmental-consequences-fishing-practices " target="_top">What Is The Environmental Impact Of The Fishing Industry?</a>
        <br></br>
        <a href="https://www.worldatlas.com/articles/what-is-the-environmental-impact-of-the-fishing-industry.html" target="_top">Environmental Consequences of Fishing Practices</a>
        <br></br>
        <a href="https://www.msc.org/what-we-are-doing/our-approach/what-is-sustainable-fishing" target="_top">What is sustainable fishing?</a>
        <br></br>
        <a href="https://oceanconservancy.org/sustainable-fisheries/ " target="_top">Sustainable Fisheries</a>
        <br></br>
        <a href="https://oceanservice.noaa.gov/facts/coral-overfishing.html" target="_top">How does overfishing threaten coral reefs?</a>
        <br></br>
        <a href="https://www.houstonpress.com/restaurants/10-fish-youre-eating-that-are-endangered-species-6439972" target="_top">10 Fish You're Eating That Are Endangered Species</a>
        <br></br><br></br>
        Hamburger sources
        <br></br>
        <a href="https://www.npr.org/sections/thesalt/2012/06/27/155527365/visualizing-a-nation-of-meat-eaters" target="_top">A Nation Of Meat Eaters: See How It All Adds Up</a>
        <br></br>
        <a href="https://www.wsj.com/articles/SB120001666638282817" target="_top">How Much Water Goes Into a Burger? Studies Find Different Answers</a>
        <br></br>
        <a href="https://www.pbs.org/newshour/science/the-hidden-costs-of-hamburgers" target="_top">The Hidden Costs of Hamburgers</a>
        <br></br>
        <a href="https://www.independent.co.uk/life-style/food-and-drink/features/why-we-should-be-trying-to-make-the-most-sustainable-burgers-possible-a8243546.html" target="_top">Why we should be trying to make the most of sustainable burgers possible</a>
        <br></br>
        <a href="https://www.ucsusa.org/global-warming/stop-deforestation/beef-deforestation-scorecard" target="_top">Cattle, Cleared Forests, and Climate Change: Scoring Global Companies on their Deforestation-Free Beef Commitments and Practices</a>
        <br></br><br></br>
        Milk sources
        <br></br>
        <a href="https://inhabitat.com/how-to-choose-the-healthiest-most-sustainable-milk-alternative/" target="_top">How to choose the healthiest, most sustainable milk alternative</a>
        <br></br>
        <a href="https://www.sierraclub.org/sierra/got-nondairy-alternative-milk" target="_top">Got Nondairy Alternative Milk?</a>
        <br></br>
        <a href="https://www.planetvision.com/blog/2018/02/28/ask-emily-sustainable-milk" target="_top">Ask Emily! Almond, Soy, or Cow: Which milk is more sustainable?</a>
        <br></br>
        <a href="https://www.nytimes.com/2015/05/04/business/energy-environment/how-growth-in-dairy-is-affecting-the-environment.html" target="_top">How Growth in Dairy Is Affecting the Environment</a>
        <br></br>
        <a href="https://e360.yale.edu/features/as_dairy_farms_grow_bigger_new_concerns_about_pollution" target="_top">As Dairy Farms Grow Bigger, New Concerns About Pollution</a>
        <br></br>
        <a href="https://www.onegreenplanet.org/animalsandnature/the-dairy-industry-and-the-environment/" target="_top">Milk Life? How About Milk Destruction: The Shocking Truth About the Dairy Industry and the Environment</a>
        <br></br>
        <a href="https://www.americandairy.com/dairy-farms/dairy-farming.stml" target="_top">Dairy Farming History</a>
        <br></br><br></br>
        Nutella sources
        <br></br>
        <a href="https://www.planetforward.org/idea/facing-the-facts-about-nutella-palm-oil-the-environment" target="_top">Facing the facts about Nutella, palm oil & the environment</a>
        <br></br>
        <a href="https://www.bbc.com/news/world-europe-33163534 " target="_top">French minister says Nutella spread 'damages environment'</a>
        <br></br>
        <a href="https://www.orangutantrekkingtours.com/orangutan-blog/palm-oil-products-are-killing-orangutans/" target="_top">How Everyday Palm Oil Products Are Killing Orangutans</a>
        <br></br>
        <a href="https://www.epicurious.com/archive/blogs/editor/2014/03/nutella-alternatives.html " target="_top">Move Over, Nutella: Nine Alternative Chocolate-Hazelnut Spreads</a>
        <br></br>
        <a href="https://www.onegreenplanet.org/vegan-food/15-palm-oil-free-products-for-more-eco-friendly-snacking/ " target="_top">15 Palm-Oil Free Products for More Eco-Friendly Snacking</a>
        <br></br><br></br>
        Oreo sources
        <br></br>
        <a href="https://www.sunshineguerrilla.com/2016/06/dont-buy-oreos-instead-try.html" target="_top">Don't Buy Oreos, Instead Try...</a>
        <br></br>
        <a href="https://www.forbes.com/sites/lanabandoim/2018/10/16/mondelez-will-make-all-of-its-packaging-recyclable-by-2025/#57d9d3d87484" target="_top">Mondelēz Will Make All Of Its Packaging Recyclable By 2025</a>
        <br></br>
        <a href="https://slate.com/technology/2014/12/palm-tree-oil-and-the-environment-skip-the-cookies-to-fight-climate-change.html" target="_top">Hold the Cookies, Save the Climate</a>
        <br></br>
        <a href="https://www.bloomberg.com/news/articles/2018-11-14/oreo-cookie-maker-targeted-by-greenpeace-to-save-orangutans" target="_top">Oreo Cookie Maker Targeted by Greenpeace to Save Orangutans</a>
        <br></br>
        <a href="https://www.huffpost.com/entry/oreos-orangutans-and-unin_b_7894" target="_top">Oreos, Orangutans and Unintended Consequences</a>
        <br></br>
        <a href="https://news.mongabay.com/2018/11/oreo-maker-linked-to-destruction-of-orangutan-habitat-in-indonesia/" target="_top">Oreo maker linked to destruction of orangutan habitat in Indonesia</a>
        <br></br>
        <a href="https://www.fastcompany.com/90267040/greenpeace-unveils-a-new-oreo-flavor-deforestation" target="_top">Greenpeace unveils a new Oreo flavor: Deforestation</a>
        <br></br><br></br>
        Rice sources
        <br></br>
        <a href="https://www.wri.org/blog/2014/12/more-rice-less-methane" target="_top">More Rice, Less Methane</a>
        <br></br>
        <a href="https://www.sciencedaily.com/releases/2012/10/121021154455.htm" target="_top">Rice agriculture accelerates global warming: More greenhouse gas per grain of rice</a>
        <br></br>
        <a href="https://www.irri.org/our-work/outcome-themes/developing-environmentally-sustainable-solutions-rice-systems" target="_top">Developing environmentally sustainable solutions for rice systems</a>
        <br></br>
        <a href="https://www.eco-business.com/opinion/in-addressing-climate-change-rice-production-needs-more-attention-and-urgent-action/" target="_top">In addressing climate change, rice production needs more attention and urgent action</a>
        <br></br>
        <a href="https://www.care2.com/greenliving/when-to-avoid-rice-8-alternatives-to-try-instead.html" target="_top">When to Avoid Rice + 8 Healthy Alternatives to Try Instead</a>
        <br></br><br></br>
        Soda sources
        <br></br>
        <a href="https://medium.com/@danielle_67565/is-soda-as-bad-for-the-environment-as-it-is-for-your-health-249ef3e3fa05" target="_top">Is Soda as Bad for the Environment as it is for Your Health?</a>
        <br></br>
        <a href="https://inews.co.uk/news/environment/always-coca-cola-fizzy-drinks-giants-shocking-impact-oceans/" target="_top">Revealed: Coca-Cola sells 3,500 environmentally damaging plastic bottles every second</a>
        <br></br>
        <a href="https://www.theguardian.com/commentisfree/2017/may/02/plastic-bottles-coca-cola-recycling-coke" target="_top">Plastic bottles are a recycling disaster. Coca-Cola should have known better</a>
        <br></br>
        <a href="https://www.greenlivingtips.com/articles/soda-and-the-environment.html" target="_top">Making soda at home – lessening environmental impact</a>
        <br></br>
        <a href="https://vinepair.com/articles/environment-soda-beer/" target="_top">What’s Worse for the Environment, Soda or Beer?</a>
        <br></br>
        <a href="http://woundednature.org/environmental-issues/cola-wars-impact-on-marine-life/" target="_top">Cola Wars Impact on Marine Life</a>
        <br></br><br></br>
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
