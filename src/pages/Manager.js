import React, {Component} from 'react';
import {connect} from "react-redux";
import TextField from '@material-ui/core/TextField';
import {Link} from "react-router-dom";
import Helmet from "react-helmet"
import {getPeoples} from '../store/actions/peoples';
import {searchCalc} from '../store/actions/searchCalc';
import {searchPeoples} from "../store/actions/searchPeople";

class Manager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            l_name: null,
            m_name: null,
            peoples: this.props.peoples
        }
    }

    inputs = (e, input) => {
        const value = e.target.value;
        switch (input) {
            case 'name':
                this.setState({name: value});
                break;
            case 'l_name':
                this.setState({l_name: value});
                break;
            case 'm_name':
                this.setState({m_name: value});
                break;
            default:
                break
        }
    };
    send = (e) => {
        e.preventDefault();
        this.props.searchPeoples(this.state.peoples);
    };

    render() {
        const people = this.props.peoples;
        return (
            <div className='background'>
                <Helmet>
                    <title>Manager</title>
                </Helmet>
                <h2 className="manager">Manager</h2>
                <h3 className="peo">peoples</h3>
                <br/>
                <div className='inputs'>
                    <label htmlFor="uName">Name</label>
                    <br/>
                    <TextField type='text' id="uName" onBlur={(e) => this.inputs(e, 'name')} placeholder="Name"/>
                </div>
                <br/>
                <div className='inputs'>
                    <label htmlFor="uName">lName</label>
                    <br/>
                    <TextField type='text' id="lName" onBlur={(e) => this.inputs(e, 'l_name')} placeholder="lName"/>
                </div>
                <br/>
                <div className='inputs'>
                    <label htmlFor="uName">mName</label>
                    <br/>
                    <TextField type='text' id="mName" onBlur={(e) => this.inputs(e, 'm_name')} placeholder="mName"/>
                </div>
                <br/>
                <button className="button" onClick={this.send}>
                    send
                </button>
                <table className="flat-table flat-table-1">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>L_Name</th>
                        <th>M_Name</th>
                        <th>To Pay</th>
                    </tr>
                    </thead>
                    <tbody>
                    {people.map((values, id) => (
                        <tr className={"row"} key={values.id}>
                            <td>{values.name}</td>
                            <td>{values.l_name}</td>
                            <td>{values.m_name}</td>
                            <td>{values.address}</td>
                            <td>{values.phone}</td>
                            <td>
                                <button className="butpay"><Link to="/paymanager" style={{textDecoration: 'none',}}>Pay</Link></button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    peoples: state.peoples.peoples,
    people: state.searchPeople.people,
});

const mapDispatchToProps = {
    getPeoples,
    searchPeoples,
    searchCalc,
};

const ManagerContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Manager);

export default ManagerContainer;