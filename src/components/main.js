import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import LandingPage from './landingpage';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';
import Articles from './articles'






const Main = () => (
 
    <Switch>
        
      
        <Route exact path="/" component={LandingPage} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/articles" component={Articles} />
        <Route path="/resume" component={Resume} />

    </Switch>
 );

export default Main;