import React, {Component} from 'react';
import { Link,Redirect } from 'react-router-dom';
import Auth from '../helpers/Auth';
import Header from './Header';
import Menu from './Menu';
import Tittle from './Tittle';

class Wrapper extends Component {
    render() {
        if (!Auth.getToken()) {
        return <Redirect to="/login" />;
        }
    return (
        <div>
            <Header/>
            <Menu/>
            <main className="pt-5 mx-lg-5">
                <div className="container-fluid mt-5">
            <Tittle/>
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