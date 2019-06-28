import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Wrapper from '../components/Wrapper';
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux';
import {editPeople} from '../store/actions/edit';
import {getPeopleById} from '../store/actions/peoples';

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      name: '',
      l_name: '',
      m_name: '',
      address: '',
      passport: '',
      phone: '',
      region_id: '',
      redirect: false,
    };
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.getPeopleById(id);
  }

  componentWillReceiveProps(nextProps) {
    const {id, name, l_name, m_name, address, passport, phone, region_id} = nextProps.people || {};
    console.log(nextProps.people,54989654);
    if (!this.props.people.id && id) {
      this.setState(
        {id, name, l_name, m_name, address, passport, phone, region_id})
      ;
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.editPeople(this.state);
    this.setState({
      redirect: true,
    })
    // regex:"[A-Z]+\d{7}"
  }


  render() {
    console.log(this.props)
    if (this.state.redirect) {
      return <Redirect to='/peoples'/>
    }
    return (
      <Wrapper title="Edit people">
        <form onSubmit={this.handleSubmit}>
          <TextField
            type="hidden"
            id="id"
            margin="normal"
            value={this.state.id}
            onChange={this.handleChange}
          />
          <TextField
            id="name"
            label="User Name"
            margin="normal"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br/>
          <TextField
            id="l_name"
            label="Last Name"
            margin="normal"
            value={this.state.l_name}
            onChange={this.handleChange}
          />
          {' '}
          <br/>

          <TextField
            id="m_name"
            label="Middle Name"
            margin="normal"
            value={this.state.m_name}
            onChange={this.handleChange}
          />
          {' '}
          <br/>

          <TextField
            id="address"
            label="Address"
            margin="normal"
            value={this.state.address}
            onChange={this.handleChange}
          />
          {' '}
          <br/>

          <TextField
            id="passport"
            label="Passport"
            margin="normal"
            value={this.state.passport}
            onChange={this.handleChange}
          />
          {' '}
          <br/>

          <TextField
            id="phone"
            label="Phone Number"
            margin="normal"
            value={this.state.phone}
            onChange={this.handleChange}
          />
          {' '}
          <br/>

          <TextField
            id="region_id"
            label="Region ID"
            margin="normal"
            value={this.state.region_id}
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
  people: state.peoples.people,
  id: state.peoples.peoples.id,
});
const mapDispatchToProps = {
  editPeople,
  getPeopleById,
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Edit);

export default Container;
