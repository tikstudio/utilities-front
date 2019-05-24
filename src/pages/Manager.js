import React, {Component} from 'react';
import {manager} from "../store/actions/manager";
import {connect} from "react-redux";
import TextField from '@material-ui/core/TextField';
import {Link} from "react-router-dom";
import Helmet from "react-helmet"

class Manager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            lName: null,
            mName: null,
            peoples: this.props.peoples
        }
    }

    inputs = (e, input) => {
        const value = e.target.value;
        switch (input) {
            case 'name':
                this.setState({name: value});
                break;
            case 'lName':
                this.setState({lName: value});
                break;
            case 'mName':
                this.setState({mName: value});
                break;
            default:
                break
        }
    };
    send = () => {
        this.props.manager(this.state)
    };
    render() {
        const array = [];
        array.push(this.props.peoples);
        console.log(array);
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
                    <TextField type='text' id="lName" onBlur={(e) => this.inputs(e, 'lName')} placeholder="lName"/>
                </div>
                <br/>
                <div className='inputs'>
                    <label htmlFor="uName">mName</label>
                    <br/>
                    <TextField type='text' id="mName" onBlur={(e) => this.inputs(e, 'mName')} placeholder="mName"/>
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
                    { array.map((value, index) => (
                        <tr key={index}>
                            <td>{value.name}</td>
                            <td>{value.lName}</td>
                            <td>{value.mName}</td>
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
    peoples: state.manager.peoples,
});

const mapDispatchToProps = {
    manager,
};

const ManagerContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Manager);

export default ManagerContainer;