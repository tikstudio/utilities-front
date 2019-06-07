import React, {Component} from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Wrapper from "../components/Wrapper";

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uName: '',
            lName: '',
            mName: '',
            address: '',
            passport: '',
            phone: '',
            code: '',
        };
    }

handleChange = (e) => {
    this.setState({
     [e.target.id]: e.target.value,
     });
};

handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    // this.props.fetchTypes(this.state)
};


render() {
    console.log(this.props)

    return (
        <Wrapper title="Main">
        <form onSubmit={this.handleSubmit}>
        <TextField
            id="uName"
            label="User Name"
            margin="normal"
            onChange={this.handleChange}
            />
            <br/>
            <TextField
            id="lName"
            label="Last Name"
            margin="normal"
            onChange={this.handleChange}
         />
            {' '}
<br/>

    <TextField
    id="mName"
    label="Middle Name"
    margin="normal"
    onChange={this.handleChange}
    />
    {' '}
<br/>

    <TextField
    id="address"
    label="Address"
    margin="normal"
    onChange={this.handleChange}
    />
    {' '}
<br/>

    <TextField
    id="passport"
    label="Passport"
    margin="normal"
    onChange={this.handleChange}
    />
    {' '}
<br/>

    <TextField
    id="phone"
    label="Phone Number"
    margin="normal"
    onChange={this.handleChange}
    />
    {' '}
<br/>

    <TextField
    id="code"
    label="Code"
    margin="normal"
    onChange={this.handleChange}
    />
    <div>
    <Button onClick={this.handleSubmit} variant="contained" color="primary">
        check in
        </Button>
        </div>
        </form>
        </Wrapper>
);
}
}
const mapStateToProps = state => ({});

const mapDispatchToProps = {};

const Container = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Registration);

export default Container;

