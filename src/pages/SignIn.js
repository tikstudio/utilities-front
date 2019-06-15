import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Button} from '@material-ui/core';
import {Field, reduxForm} from 'redux-form';
import {Redirect} from 'react-router-dom';
import {login} from '../store/actions/users';
import Input from '../components/form/Input';
import Auth from "../helpers/Auth";


class SignIn extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    authError: PropTypes.string,
  }

  static defaultProps = {
    authError: '',
  }

  handleSubmit = (values) => {
    this.props.login(values);
  }

  render() {
    const {handleSubmit, submitting, authError} = this.props;
    if (Auth.getToken()) {
      return <Redirect to="/"/>;
    }
    return (
      <div className="signIn">
        {authError ? <div>{authError}</div> : null}
        <form onSubmit={handleSubmit(this.handleSubmit)}>
          <Field
            name="username"
            label="Login"
            component={Input}
          />
          <Field
            name="password"
            type="password"
            label="Password"
            component={Input}
          />
          <Button type="submit" disabled={submitting} variant="contained" color="primary">
            Sign In
          </Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authError: state.users.authError,
  user: state.users.user,
});

const mapDispatchToProps = {
  login,
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignIn);

export default reduxForm({
  form: 'login',
})(Container);
