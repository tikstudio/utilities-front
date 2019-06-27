import React, {Component} from 'react';
import Wrapper from '../components/Wrapper';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getPeoples} from '../store/actions/peoples';
import {destroyPeoples} from '../store/actions/destroy';
import {editPeople} from '../store/actions/edit';
import {searchPeoples} from '../store/actions/searchPeople';


class Peoples extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  componentDidMount() {
    this.props.getPeoples();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.searchPeoples(this.state.search);
  }

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


  render() {
    const people = this.props.peoples;
    const totalPage = this.props.totalPage;
    const countPages = [];
    for (let i = 1; i <= totalPage; i++) {
      countPages.push(i)
    }
    const filterPeople = this.props.people;


    return (
      <Wrapper title="Peoples">
        <form  onSubmit={this.handleSubmit}>
          <TextField
            style={{position: 'relative', left: 24, width:800}}
            id="search"
            label="search"
            margin="normal"
            onChange={this.handleChange}
          />
        </form>
        <table>
          <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Last Name</td>
            <td>Middle Name</td>
            <td>Address</td>
            <td>Phone</td>
            <td colSpan="2"><b><Link to="/registration">Add</Link></b></td>
          </tr>
          </thead>
          <tbody>

          {this.props.people.length !== 0 ?
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
                    <Link to={`edit/${values.id}`}>
                      Edit
                    </Link>
                  </td>
                  <td onClick={() => this.delete(values)}>Delete</td>
                </tr>)
            }) :
            people.map((values) => {
              return (
                <tr  key={values.id}>
                  <td>{values.id}</td>
                  <td>{values.name}</td>
                  <td>{values.l_name}</td>
                  <td>{values.m_name}</td>
                  <td>{values.address}</td>
                  <td>{values.phone}</td>
                  <td>
                    <Link to={`edit/${values.id}`}>
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
  peoples: state.peoples.peoples,
  page: state.peoples.page,
  totalPage: state.peoples.totalPage,
  people: state.searchPeople.people,
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
