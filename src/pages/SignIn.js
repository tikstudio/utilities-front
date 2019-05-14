import React, {Component} from 'react';
import {signIn} from "../store/actions";
import {connect} from "react-redux";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password:''
        };
    }

    handleChange= (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })

    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        // this.props.signIn(this.state)
    };


    render() {


        return (
            <div className='container' >
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        id="login"
                        label="Enter your login"
                        placeholder="login"
                        margin="normal"
                        onChange={this.handleChange}
                    />
                    <br/>
                    <TextField
                        id="password"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        onChange={this.handleChange}
                    />


                    <div>
                        <Button onClick={this.handleSubmit} variant="contained" color="primary" >
                            Sign In
                        </Button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    usersData: state.usersData,
});

const mapDispatchToProps = {
    signIn,
};

const SignInContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignIn);

export default SignInContainer;


