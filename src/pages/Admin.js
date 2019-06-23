import React, {Component} from 'react';
import {connect} from 'react-redux';
import Wrapper from "../components/Wrapper";
import PieChart from 'react-minimal-pie-chart';

class Admin extends Component {

  render() {
    return (
      <Wrapper title="Dashboard">
        <PieChart
          data={[
            {title: 'One', value: 60, color: '#E38627'},
            {title: 'Two', value: 30, color: '#C13C37'},
            {title: 'Three', value: 10, color: '#6A2135'},
          ]}
          style={
            {
              margin: 'auto',
              width: 300,
            }
          }
        />
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

const AdminContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Admin);

export default AdminContainer;
