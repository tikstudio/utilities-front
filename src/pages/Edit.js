import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Wrapper from "../components/Wrapper";
import {connect} from 'react-redux';
import {editPeople} from '../store/actions/edit';
import {getPeoples} from '../store/actions/peoples';

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      l_name: '',
      m_name: '',
      address: '',
      passport: '',
      phone: '',
      region_id: '',
    };
  }

  changeVal = (values) => {
    console.log(values.id)
    this.setState({
      id: values.id,
    });
  }

  componentWillMount() {
    this.props.editPeople();
  }

  componentDidMount() {
    this.props.getPeoples();
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.props);
    this.props.editPeople(this.state);
  }

  render() {
    const people = this.props.peoples;
    console.log(people);
    return (
      <Wrapper title="Main">
        <form onSubmit={this.handleSubmit}>
          {people.map((values, id) => {
            return (
              <TextField
                key={id}
                value={values.id}
                id="name"
                margin="normal"
                onChange={this.handleChange}
              />
            );
          })}
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

const mapStateToProps = (state) => ({
  peoples: state.peoples.peoples,
  id: state.peoples.peoples.id,
});
const mapDispatchToProps = {
  editPeople,
  getPeoples,
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Edit);

export default Container;

