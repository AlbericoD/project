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

import witchTracker from './utils/witchTracker';

import { Tos, Pp } from './pages/Legal/Legal';
import Fortnite from './pages/Fluxo/Fortnite';
import Fortnite2 from './pages/Fluxo2/Fortnite';
import Fortnite3 from './pages/Fluxo3/Fortnite';
import Fortnite4 from './pages/Fluxo4/Fortnite';
class App extends Component {
  render() {
    return (
      <div className='dev-landing-page'>
        <ThemeSwitcher>
          <Browser except firefox>
            <ParallaxBackground />
          </Browser>

          <Switch>
            <Route exact path='/' component={witchTracker(All)} />
            <Route path='/twitch-extension/privacy-policy' component={witchTracker(Pp)} />
            <Route path='/twitch-extension/terms-of-service' component={witchTracker(Tos)} />
            <Route path='/fortnite-jump-poll' component={witchTracker(Fortnite)} />
            <Route path='/fortnite-jump-poll-v2' component={witchTracker(Fortnite2)} />
            <Route path='/fortnite-jump-poll-v3' component={witchTracker(Fortnite3)} />
            <Route path='/fortnite-jump-poll-v4' component={witchTracker(Fortnite4)} />
          </Switch>

          <ScrollTop />
          <Footer />
        </ThemeSwitcher>
      </div>
    );
  }
}

const All = () => (
  <React.Fragment>
    <LandingPage />
    <PortfolioPage />
    <AboutPage />
  </React.Fragment>
);

export default App;
