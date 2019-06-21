import React, {Component} from 'react';
import Wrapper from '../components/Wrapper';
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux';
import {searchCalc} from '../store/actions/searchCalc';
import {Link} from "react-router-dom";

class Comunals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      searchCalculator: '',
    };
  }
  //
  // componentDidMount() {
  //
  // }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.searchCalc(this.state.searchCalculator);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  // delete = (values) => {
  //   this.props.destroyPeoples(values.id);
  //   setTimeout(() => {
  //       this.props.getPeoples();
  //     },
  //     100);
  // }

  render() {


    const totalPage = this.props.totalPage;
    const countPages = [];
    for (let i = 1; i <= totalPage; i++) {
      countPages.push(i)
    }
    const calc = this.props.peopleData;
    console.log(this.props.peopleData)
    return (
      <Wrapper>
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="searchCalculator"
            label="searchCalculator"
            margin="normal"
            onChange={this.handleChange}
          />
        </form>
        <table>
          <tbody>
          <tr>
            <td>calc_id</td>
            <td>create_date</td>
            <td>create_user_id</td>
            <td>debt</td>
            <td>number</td>
            <td>pay_date</td>
            <td>payed</td>
            <td>payed_user_id</td>
            <td></td>
            <td></td>
          </tr>
          {calc.map((values,id) => {
              return (
                <tr key={id}>
                  <td>{values.calc_id}</td>
                  <td>{values.create_date}</td>
                  <td>{values.create_user_id}</td>
                  <td>{values.debt}</td>
                  <td>{values.number}</td>
                  <td>{values.pay_date}</td>
                  <td>{values.payed}</td>
                  <td>{values.payed_user_id}</td>
                  <td>
                    <Link to={`/edit/${values.id}`}>
                      Edit
                    </Link>
                  </td>
                  <td onClick={() => this.delete(values)}>Delete</td>
                </tr>
              )})
           }
          </tbody>
        </table>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.peoples.page,
  totalPage: state.peoples.totalPage,
  peopleData: state.searchCalc.peopleData,
});

const mapDispatchToProps = {
  searchCalc,
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Comunals);

export default Container;
