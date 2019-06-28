import React, {Component} from 'react';
import {pay} from "../store/actions/pay";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Helmet from "react-helmet"
import {Textbox} from 'react-inputs-validation'
import {string} from "prop-types";
import {getPeoples} from "../store/actions/peoples";
import {searchPeoples} from "../store/actions/searchPeople";
import {searchCalc} from "../store/actions/searchCalc";
import {payerInfo} from "../store/actions/info";


class PayManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gas: null,
            light: null,
            water: null,
            pays: this.props.pays
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
    componentDidMount() {
        this.props.searchPeoples();
        this.props.getPeoples();
        this.props.info();
    }
    handleSend = () => {
        this.props.pay(this.state.pays);
    };
    render() {
        const array = [];
        array.push(this.props.info);
        const people = this.props.peoples;
        console.log(this.state);
        return (
            <div>
                <Helmet>
                    <title>PayManager</title>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
                </Helmet>
                <div>
                    <button className="button">
                        <Link to='/manager'>Go To Manager</Link>
                    </button>
                    <h1 className="managerpay">Pay Manager</h1>
                </div>
                {people.map((values, id) => (
                    <h1 style={{textAlign: 'center',}}>{values.name}</h1>
                ))}
                <div className="row">
                    <div className="block col-sm-3 col-md-6 col-lg-4">
                        <h2>Gas</h2>
                        <Textbox type='number' inputMode="numeric" pattern="[0-9]*" id="uName" className="hajox" onBlur={(e) => this.inputpays(e, 'gas')} placeholder="write your gas pay money"/>
                        {array.map((value, id) => (
                            <div key={id}>
                                <p>{value.calc_id}</p>
                                <p>{value.number}</p>
                                <p>{value.debt}</p>
                                <p>{value.create_date}</p>
                                <p>{value.pay_date}</p>
                                <p>{value.paid_price}</p>
                                <p>{value.create_user_id}</p>
                                <p>{value.payed_user_id}</p>
                            </div>
                        ))}
                        <button style={{marginTop: "25px"}} className="button" onClick={this.handleSend}>
                            send
                        </button>
                    </div>
                    {/*<div className="block col-sm-3 col-md-6 col-lg-4">*/}
                    {/*    <h2>light</h2>*/}
                    {/*    <TextField type='text' id="uName" className="hajox" onBlur={(e) => this.inputpays(e, 'light')} placeholder="write your light pay money"/>*/}
                    {/*</div>*/}
                    {/*<div className="block col-sm-3 col-md-6 col-lg-4">*/}
                    {/*    <h2>water</h2>*/}
                    {/*    <TextField type='text' id="uName" className="hajox" onBlur={(e) => this.inputpays(e, 'water')} placeholder="write your water pay money"/>*/}
                    {/*</div>*/}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    peoples: state.peoples.peoples,
    pay: state.pays,
    info: state.info
});

const mapDispatchToProps = {
    pay,
    getPeoples,
    searchPeoples,
    searchCalc,
    payerInfo
};

const PayManagerContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(PayManager);

export default PayManagerContainer;
