import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Wrapper from "../components/Wrapper";
import {connect} from 'react-redux';
import {registrationPeople} from '../store/actions/registration';

class Registration extends Component {
  componentWillMount() {
    this.props.registrationPeople();
  }

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      l_name: '',
      m_name: '',
      address: '',
      passport: '',
      phone: '',
      region_id: '',
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
    this.props.registrationPeople(this.state);
  };

  render() {
    return (
      <Wrapper title="Main">
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="name"
            label="User Name"
            margin="normal"
            onChange={this.handleChange}
          />
          <br/>
          <TextField
            id="l_name"
            label="Last Name"
            margin="normal"
            onChange={this.handleChange}
          />
          {' '}
          <br/>

          <TextField
            id="m_name"
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
            id="region_id"
            label="Region ID"
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

const mapStateToProps = state => ({
  people: state.people,
});
const mapDispatchToProps = {
  registrationPeople,
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Registration);

export default Container;

