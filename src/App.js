import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import SignIn from './pages/SignIn';
import Admin from './pages/Admin';
import Manager from './pages/Manager';
import LogOut from './pages/LogOut';
import Peoples from './pages/Peoples';
import Comunals from './pages/Comunals';
import Registration from './pages/Registration';
import Edit from './pages/Edit';
import CreateCalc from './pages/CreateCalc';
import Calculators from './pages/Calculators';
import EditCalc from './pages/EditCalc';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={SignIn}/>
          <Route path="/log-out" component={LogOut}/>
          <Route path="/manager" component={Manager}/>
          <Route path="/peoples" component={Peoples}/>
          <Route path="/comunals" component={Comunals}/>
          <Route path="/registration" component={Registration}/>
          <Route path="/edit/:id" component={Edit}/>
          <Route path="/create-calc" component={CreateCalc}/>
          <Route path="/calculators" component={Calculators}/>
          <Route path="/edit-calc/:id" component={EditCalc}/>
          <Route component={Admin}/>
        </Switch>
      </BrowserRouter>
    );
  }
}


export default App;
