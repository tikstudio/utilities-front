import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Menu extends Component {
  render() {
    return (
      <div className="sidebar-fixed position-fixed">
        <Link to="/" className="logo-wrapper waves-effect">
          <img src="https://kinsta.com/wp-content/uploads/2018/02/g-suite-admin.png" width="250px" className="img-fluid"
               alt="imgFluid"/>
        </Link>
        <div className="list-group list-group-flush">
          <Link to="/" style={{color: '#585858'}} className="list-group-item  waves-effect">
            <i className="fas fa-chart-pie mr-3">Dashboard</i>
          </Link>
          <Link to="/peoples" className="list-group-item list-group-item-action waves-effect">
            <i className="fas fa-user mr-3">Peoples</i>
          </Link>
          <Link to="/registration" className="list-group-item list-group-item-action waves-effect">
            <i className="fas fa-table mr-3">Registration</i>
          </Link>
          <Link to="/comunals" className="list-group-item list-group-item-action waves-effect">
            <i className="fas fa-table mr-3">Comunals</i>
          </Link>
          <Link to="/create-calc" className="list-group-item list-group-item-action waves-effect">
            <i className="fas fa-table mr-3">Create calculator</i>
          </Link>
        </div>
      </div>

    )
      ;
  }
}

export default Menu;