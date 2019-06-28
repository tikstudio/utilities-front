import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import Wrapper from '../components/Wrapper';
import {getCalc} from '../store/actions/getCalc';
import {searchCalc} from '../store/actions/searchCalc';
import {destroyCalc} from '../store/actions/destroyCalc';

class Calculators extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchCalculator: '',
    };
  }

  componentDidMount() {
    this.props.getCalc();
  }

  delete = (val) => {
    console.log(val.id);
    this.props.destroyCalc(val.id);
    setTimeout(() => {
        this.props.getCalc();
      },
      100);
  }

  render() {
    const calculators = this.props.calculators;
    return (
      <Wrapper title="Calculators">
        <table>
          <tbody>
          <tr>
            <td>ID</td>
            <td>Type ID</td>
            <td>People ID</td>
            <td>Serial Number</td>
            <td>Address</td>
            <td colSpan="2"><b><Link to="/create-calc">Add</Link></b></td>

          </tr>
          {calculators.map((val, id) => {
            return (
              <tr key={id}>
                <td>{val.id}</td>
                <td>{val.type_id}</td>
                <td>{val.people_id}</td>
                <td>{val.serial_number}</td>
                <td>{val.address}</td>
                <td>
                  <Link to={`/edit-calc/${val.id}`}>
                    Edit
                  </Link>
                </td>
                <td onClick={() => this.delete(val)}>Delete</td>
              </tr>
            )
          })}
          </tbody>
        </table>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  // page: state.getCalc.page,
  // totalPage: state.getCalc.totalPage,
  calculators: state.getCalc.calculators,
});

const mapDispatchToProps = {
  getCalc,
  searchCalc,
  destroyCalc,
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Calculators);

export default Container;
