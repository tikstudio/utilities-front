import React, {Component} from 'react';
import Wrapper from '../components/Wrapper';
import {connect} from 'react-redux';
import {searchCalc} from '../store/actions/searchCalc';
import {getCalc} from '../store/actions/getCalc';
import {destroyCalc} from '../store/actions/destroyCalc';
import {Link} from "react-router-dom";

class Calculators extends Component {
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
    console.log(val.id);
    this.props.destroyCalc(val.id);
  }

  render() {
    const totalPage = this.props.totalPage;
    const countPages = [];
    for (let i = 1; i <= totalPage; i++) {
      countPages.push(i)
    }
    // const calc = this.props.peopleData;
    const calculators = this.props.calculators;
    return (
      <Wrapper title="Calculators">
        <table>
          <tbody>
          <tr>
            <td>Type ID</td>
            <td>People ID</td>
            <td>Serial Number</td>
            <td>Address</td>
            <td colSpan="2"><b><Link to="/create-calc">Add</Link></b></td>

          </tr>
          {calculators.map((val, id) => {
            return (
              <tr key={id}>
                <td>{val.type_id}</td>
                <td>{val.people_id}</td>
                <td>{val.serial_number}</td>
                <td>{val.address}</td>
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
)(Calculators);

export default Container;
