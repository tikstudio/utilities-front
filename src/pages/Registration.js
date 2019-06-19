import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Wrapper from "../components/Wrapper";
import {connect} from 'react-redux';
import {registrationPeople} from '../store/actions/registration';
import {getRegions} from "../store/actions/regions";

class Registration extends Component {
  componentWillMount() {
    this.props.registrationPeople();
  }

  componentDidMount() {
    this.props.getRegions();
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
    console.log(this.state)
  };

  render() {
    const regions = this.props.regions;
    console.log(regions)
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
            <select className="select">
              {regions.map((values) => {
                return (
                  <option onChange={this.handleChange} id="phone" key={values.id}>{values.region_name}</option>
                )
              })}
            </select>
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
  regions: state.regions.regions,
});
const mapDispatchToProps = {
  registrationPeople,
  getRegions,
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Registration);

export default Container;

