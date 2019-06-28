import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import SignIn from './pages/SignIn';
import Admin from './pages/Admin';
import Manager from './pages/Manager';
import LogOut from './pages/LogOut';
import Peoples from './pages/Peoples';
import Comunals from './pages/Comunals';
import PayManager from "./pages/PayManager";


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
                    <Route exact path="/paymanager" component={PayManager}/>
                    <Route component={Admin}/>
                </Switch>
            </BrowserRouter>
        );
    }
}


export default App;
