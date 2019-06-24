import React, {Component} from 'react';
import Wrapper from '../components/Wrapper';
import {connect} from 'react-redux';
import {searchCalc} from '../store/actions/searchCalc';
import {getCalc} from '../store/actions/getCalc';
import {destroyCalc} from '../store/actions/destroyCalc';
import {Link} from "react-router-dom";

class Comunals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      searchCalculator: '',
    };
  }

  componentDidMount() {
    this.props.getCalc();
  }

  delete = (val) => {
    this.props.destroyCalc(val);
  }

  render() {
    const totalPage = this.props.totalPage;
    const countPages = [];
    for (let i = 1; i <= totalPage; i++) {
      countPages.push(i)
    }
    // const calc = this.props.peopleData;
    const calculators = this.props.calculators;
    const type = [];
    const id = [];
    calculators.map((value) => {
      id.push(value.people_id);
      type.push(value.type);
      return (value);
    })

    // console.log(id)
    console.log(calculators)
    return (
      <Wrapper title="Comunals">
        <table>
          <tbody>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Short name</td>
            <td>Price</td>
            <td>Unit</td>
            <td></td>
            <td></td>
          </tr>
          {type.map((val, id) => {
            return (
              <tr key={id}>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.short_name}</td>
                <td>{val.price}</td>
                <td>{val.unit}</td>
                <td>
                  <Link to={`/edit/${val.id}`}>
                    Edit
                  </Link>
                </td>
                <td onClick={() => this.delete(val)}>Delete</td>
              </tr>

            )
          })}

          {/*{id.map((val,id) => {*/}
          {/*  */}
          {/*    */}
          {/*}*/}
          {/*)}*/}

          </tbody>
        </table>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.getCalc.page,
  totalPage: state.getCalc.totalPage,
  peopleData: state.searchCalc.peopleData,
  calculators: state.getCalc.calculators,
});

const mapDispatchToProps = {
  searchCalc,
  getCalc,
  destroyCalc,
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Comunals);

export default Container;
