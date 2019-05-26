import React, { Component } from 'react';
import { signIn } from "../store/actions";
import { connect } from "react-redux";
import {Button, TextField} from '@material-ui/core';
import { getPeoples } from "../api";


class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })

  };

  componentDidMount() {

  }


  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.signIn(this.state)
  };


  render() {


    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit}>
          <TextField
            name="username"
            label="Enter your login"
            placeholder="login"
            margin="normal"
            onChange={this.handleChange}
          />
          <br/>
          <TextField
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            margin="normal"
            onChange={this.handleChange}
          />


          <div>
            <Button onClick={this.handleSubmit} variant="contained" color="primary">
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


