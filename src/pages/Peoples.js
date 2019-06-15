import React, {Component} from 'react';
import Wrapper from '../components/Wrapper';
import TextField from '@material-ui/core/TextField';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {getPeoples} from '../store/actions/peoples';
import {destroyPeoples} from '../store/actions/destroy';
import {editPeople} from '../store/actions/edit';
import {searchPeoples} from '../store/actions/search';


class Peoples extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      search: '',
    };
  }

  componentDidMount() {
    this.props.getPeoples();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.search)
    this.props.searchPeoples(this.state.search);
    console.log(this.state.search)
  }
  // selectPeople =(values)=>{
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  delete = (values) => {
    this.props.destroyPeoples(values.id);
    setTimeout(() => {
        this.props.getPeoples();
      },
      100);
  }
  //
  // }
  edit = (values) => {
    console.log(this.props);
    this.props.editPeople(values.id);
    this.setState({
      redirect: true,
    });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to='./Edit'/>
    }
    const totalPage = this.props.totalPage;
    const countPages = [];
    for (let i = 1; i <= totalPage; i++) {
      countPages.push(i)
    }
    const filterPeople = this.props.people;
    const people = this.props.peoples;
    console.log(this.props.people.length);
    return (
      <Wrapper>
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="search"
            label="search"
            margin="normal"
            onChange={this.handleChange}
          />
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
                  <td onClick={() => this.edit(values)}>Edit</td>
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
                  <td onClick={() => this.edit(values)}>Edit</td>
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
  peoples: state.peoples.peoples,
  page: state.peoples.page,
  totalPage: state.peoples.totalPage,
  search: state.search,
  people: state.search.people,
});

const mapDispatchToProps = {
  getPeoples,
  destroyPeoples,
  editPeople,
  searchPeoples,
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Peoples);

export default Container;
