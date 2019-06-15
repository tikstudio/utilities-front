import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import Auth from '../helpers/Auth';

class LogOut extends Component {
  render() {
    Auth.removeToken();
    return (
      <Redirect to="/login"/>
    );
  }
}

export default LogOut;
