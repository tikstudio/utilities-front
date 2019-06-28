import React, {Component} from 'react';
import Wrapper from '../components/Wrapper';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getPeoples} from '../store/actions/peoples';
import {searchPeoples} from '../store/actions/searchPeople';
import {searchCalc} from '../store/actions/searchCalc';


class Peoples extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      searchCalculator: '',
    };
  }

  componentDidMount() {
    this.props.searchPeoples();
    this.props.getPeoples();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.searchPeoples(this.state.search);
    this.props.searchCalc(this.state.searchCalculator);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {


    const totalPage = this.props.totalPage;
    const countPages = [];
    for (let i = 1; i <= totalPage; i++) {
      countPages.push(i)
    }
    const filterPeople = this.props.people;
    const people = this.props.peoples;
    console.log(this.props.people.length);
    console.log(this.props);

    return (
      <Wrapper>
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="search"
            label="search"
            margin="normal"
            onChange={this.handleChange}
          />
          <TextField
            id="searchCalculator"
            label="searchCalculator"
            margin="normal"
            onChange={this.handleChange}
          />
          <Button onClick={this.handleSubmit} variant="contained" color="primary">
            check in
          </Button>
        </form>
        <table>
          <tbody>

          {this.props.people.length > 0 ?
            filterPeople.map((values) => {
              return (
                <tr key={values.id}>
                  <td>{values.id}</td>
                  <td>{values.name}</td>
                  <td>{values.l_name}</td>
                  <td>{values.m_name}</td>
                  <td>{values.address}</td>
                  <td>{values.phone}</td>
                  <td>
                    <Link to={`/edit/${values.id}`}>
                      Edit
                    </Link>
                  </td>
                  <td onClick={() => this.delete(values)}>Delete</td>
                </tr>)
            }) :
            people.map((values, id) => {
              return (
                <tr className={"row"} key={values.id}>
                  <td>{values.id}</td>
                  <td>{values.name}</td>
                  <td>{values.l_name}</td>
                  <td>{values.m_name}</td>
                  <td>{values.address}</td>
                  <td>{values.phone}</td>
                  <td>
                    <Link to={`/edit/${values.id}`}>
                      Edit
                    </Link>
                  </td>
                  <td onClick={() => this.delete(values)}>Delete</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  peoples: state.  peoples.peoples,
  page: state.peoples.page,
  totalPage: state.peoples.totalPage,
  people: state.searchPeople.people,
  peopleData: state.searchCalc.peopleData,
});

const mapDispatchToProps = {
  getPeoples,
  searchPeoples,
  searchCalc,
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Peoples);

export default Container;
