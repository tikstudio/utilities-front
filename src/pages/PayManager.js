import React, {Component} from 'react';
import {manager} from "../store/actions/manager";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Helmet from "react-helmet"
import {string} from "prop-types";


class PayManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gas: null,
            light: null,
            water: null,
            peoples: this.props.peoples
        }
    }
    inputpays = (e, inputpay) => {
        const value = e.target.value;
        switch (inputpay) {
            case 'gas':
                this.setState({gas: value});
                break;
            case 'light':
                this.setState({light: value});
                break;
            case 'water':
                this.setState({water: value});
                break;
            default:
                break
        }
    };
    keypress = (e,ev) => {
        if (ev.target.value === (/^[a-zA-Z]$/)){
            console.log('false')
        }else {
            console.log('true')
        }

    }
    render() {
        console.log(this.state)
        return (
            <div>
                <Helmet>
                    <title>PayManager</title>
                </Helmet>
                <div>
                    <button className="button">
                        <Link to='/manager'>Go To Manager</Link>
                    </button>
                    <h1 className="managerpay">Pay Manager</h1>
                </div>
                <h1 style={{textAlign: 'center',}}>Pashik Poxosyan Gvidoni</h1>
                <div className="row">
                    <div className="block">
                        <h2>gas</h2>
                        <TextField type='text'  onKetPress={this.keypress} id="uName" className="hajox" onBlur={(e) => this.inputpays(e, 'gas')} placeholder="write your gas pay money"/>
                    </div>
                    <div className="block">
                        <h2>light</h2>
                        <TextField type='text' id="uName" className="hajox" onBlur={(e) => this.inputpays(e, 'light')} placeholder="write your light pay money"/>
                    </div>
                    <div className="block">
                        <h2>water</h2>
                        <TextField type='text' id="uName" className="hajox" onBlur={(e) => this.inputpays(e, 'water')} placeholder="write your water pay money"/>
                    </div>
                </div>
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

const PayManagerContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(PayManager);

export default PayManagerContainer;
