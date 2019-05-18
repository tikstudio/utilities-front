import React, {Component} from 'react';
import {manager} from "../store/actions/manager";
import {connect} from "react-redux";
import TextField from '@material-ui/core/TextField';

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
        console.log(this.props.peoples);
        return (
            <div className='background'>
                <h2 className="manager">Manager</h2>
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
                <button className="button"  onClick={this.send}>
                    send
                    <div className="button__horizontal"/>
                    <div className="button__vertical"/>
                </button>
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