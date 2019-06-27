import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Wrapper from "../components/Wrapper";
import {connect} from 'react-redux';
import {createCalc} from "../store/actions/createCalc";

class CreateCalc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type_id: '',
      serial_number: '',
      address: '',
      people_id: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    this.props.createCalc(this.state);
    console.log(this.state)
  };

  render() {
    return (
      <Wrapper title="Create calculator">
        <form onSubmit={this.handleSubmit}>

          <TextField
            className="input-field"
            id="type_id"
            label="Type ID"
            margin="normal"
            onChange={this.handleChange}
          />
          <br/>
          <TextField
            className="input-field"
            id="serial_number"
            label="Serial Number"
            margin="normal"
            onChange={this.handleChange}
          />
          {' '}
          <br/>

          <TextField
            className="input-field"
            id="address"
            label="Address"
            margin="normal"
            onChange={this.handleChange}
          />
          {' '}
          <br/>

          <TextField
            className="input-field"
            id="people_id"
            label="People ID"
            margin="normal"
            onChange={this.handleChange}
          />
          {' '}
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

const mapStateToProps = state => ({

});
const mapDispatchToProps = {
  createCalc,
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateCalc);

export default Container;

