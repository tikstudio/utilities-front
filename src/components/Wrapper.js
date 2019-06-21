import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Auth from '../helpers/Auth';
import Header from './Header';
import Menu from './Menu';

class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ['Peoples', 'Dashboard', 'Comunals']
    };
  }

  render() {
    if (!Auth.getToken()) {
      return <Redirect to="/login"/>;
    }
    return (
      <div>
        <Header/>
        <Menu/>
        <main className="pt-5 mx-lg-5">
          <div className="container-fluid mt-5">
            <div className="card mb-4 wow fadeIn">
              <div className="card-body d-sm-flex justify-content-between">
                <h4 className="mb-2 mb-sm-0 pt-1">
                  <Link to="/" target="_blank">Home Page</Link>
                  <>/</>
                  <>Dashboard</>
                </h4>
              </div>
            </div>
            <div className="row wow fadeIn">
              <div className="col-md-9 mb-4">
                <div className="card">
                  <div className="card-body">
                    {this.props.children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Wrapper;