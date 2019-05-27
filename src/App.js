import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Admin from './pages/Admin';
import Manager from './pages/Manager';
import LogOut from './pages/LogOut';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={SignIn} />
          <Route path="/log-out" component={LogOut} />
          <Route path="/manager" component={Manager} />
          <Route component={Admin} />
        </Switch>
      </BrowserRouter>
    );
  }
}


export default App;
