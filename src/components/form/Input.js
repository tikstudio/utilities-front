import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

class Input extends Component {
  static propTypes = {
    label: PropTypes.string,
    input: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
  }

  static defaultProps = {
    label: '',
  }

  render() {
    const {
      label,
      input,
      meta: { touched, invalid, error },
      ...custom
    } = this.props;
    return (
      <TextField
        label={label}
        placeholder={label}
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...custom}
      />
    );
  }
}

export default Input;
