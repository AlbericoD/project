import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from '@pages/LandingPage';
import AboutPage from '@pages/AboutPage';
import PortfolioPage from '@pages/PortfolioPage';
import ParallaxBackground from '@components/ParallaxBackground';
import ScrollTop from '@components/ScrollTop';
import ThemeSwitcher from '@components/ThemeSwitcher';
import Browser from '@components/Browser';
import Footer from '@components/Footer';
import { Tos, Pp } from './pages/Legal/Legal';
import Fortnite from './pages/Fluxo/Fortnite';
import Fortnite2 from './pages/Fluxo2/Fortnite';
import Fortnite3 from './pages/Fluxo3/Fortnite';
class App extends Component {
  render() {
    return (
      <div className="dev-landing-page">
        <ThemeSwitcher>
          <Browser except firefox>
            <ParallaxBackground />
          </Browser>

          <Switch>
            <Route exact path="/" component={All} />
            <Route path="/twitch-extension/privacy-policy" component={Pp} />
            <Route path="/twitch-extension/terms-of-service" component={Tos} />
            <Route path="/fortnite-jump-poll" component={Fortnite} />
            <Route path="/fortnite-jump-poll-v2" component={Fortnite2} />
            <Route path="/fortnite-jump-poll-v3" component={Fortnite3} />
          </Switch>

          <ScrollTop />
          <Footer />
        </ThemeSwitcher>
      </div>
    );
  }
}

class All extends Component {
  render() {
    return (
      <div>
        {' '}
        <LandingPage />
        <PortfolioPage />
        <AboutPage />
      </div>
    );
  }
}

export default App;
