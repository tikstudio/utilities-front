import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Wrapper from '../components/Wrapper';
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux';
import {editCalc} from '../store/actions/editCalc';
import {getCalcById} from '../store/actions/getCalc';

class EditCalc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      type_id: '',
      serial_number: '',
      address: '',
      people_id: '',
      redirect: false,
    };
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.getCalcById(id);
  }

  componentWillReceiveProps(nextProps) {
    const {id, type_id, serial_number, address, people_id} = nextProps.calculator || {};
    console.log(nextProps.calculator, 11111111111);
    if (!this.props.calculator.id && id) {
      this.setState(
        {id, type_id, serial_number, address, people_id})
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
    this.props.editCalc(this.state);
    // this.setState({
    //   redirect: true,
    // })
    // regex:"[A-Z]+\d{7}"
  }


  render() {
    console.log(this.props)
    if (this.state.redirect) {
      return <Redirect to='/calculators'/>
    }
    return (
      <Wrapper title="Edit people">
        <form onSubmit={this.handleSubmit}>
          <TextField
            type="hidden"
            id="id"
            margin="normal"
            value={this.props.match.params.id}
            onChange={this.handleChange}
          />
          <TextField
            className="input-field"
            id="type_id"
            label="Type ID"
            value={this.state.type_id}
            margin="normal"
            onChange={this.handleChange}
          />
          <br/>
          <TextField
            className="input-field"
            id="serial_number"
            label="Serial Number"
            value={this.state.serial_number}
            margin="normal"
            onChange={this.handleChange}
          />
          {' '}
          <br/>

          <TextField
            className="input-field"
            id="address"
            label="Address"
            value={this.state.address}
            margin="normal"
            onChange={this.handleChange}
          />
          {' '}
          <br/>

          <TextField
            className="input-field"
            id="people_id"
            label="People ID"
            value={this.state.people_id}
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
  calculator: state.calculator,
  id: state.id,
});
const mapDispatchToProps = {
  editCalc,
  getCalcById,
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditCalc);

export default Container;
