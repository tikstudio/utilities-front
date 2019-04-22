import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import SignIn from './pages/SignIn.js'
import Admin from "./pages/Admin";
import Manager from "./pages/Manager";




class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route  path="/admin" component={Admin} />
            <Route  path="/morqur" component={Manager} />
          </Switch>
        </BrowserRouter>
    );
  }
}



export default App;
