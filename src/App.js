import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import SignIn from './pages/SignIn.js'
import Admin from "./pages/Admin";
import Manager from "./pages/Manager";
import PayManager from "./pages/PayManager";




class App extends Component {
  render() {
      return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact  path="/admin" component={Admin} />
            <Route exact  path="/manager" component={Manager} />
            <Route exact  path="/paymanager" component={PayManager} />
          </Switch>
        </BrowserRouter>
    );
  }
}



export default App;
