import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import HomeRoute from './Home';
import Signup from '../components/Signup';
import Signin from '../components/Signin';
import NavBar from '../components/NavBar';

// import Notfound from '../components/NotFound';


import '../styles/index.scss';

export default class App extends Component {
  render () {
    return (
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={HomeRoute} />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          {/* <Route component={Notfound} /> */}
        </Switch>
      </Router>
    );
  }
}
