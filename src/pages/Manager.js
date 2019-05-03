import React, {Component} from 'react';
// import data from '../data'
import {manager} from "../store/actions/manager";
import {connect} from "react-redux";

class Manager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            lName: null,
            mName: null,
            peoples: this.props.peoples
        }
    }

    inputs = (e, input) => {
        const value = e.target.value;
        switch (input) {
            case 'name':
                this.setState({name: value});
                break;
            case 'lName':
                this.setState({lName: value});
                break;
            case 'mName':
                this.setState({mName: value});
                break;
            default:
                break
        }
    };


    send = () => {
        this.props.manager(this.state)
    };

    render() {
        console.log(this.props.peoples);
        // {
        //     const people =  data.map((value) => {
        //         if (this.state.name !== null && this.state.surname !== null && this.state.mName !== null){
        //             if (this.state.name === value.name && this.state.surname === value.surname && this.state.mName === value.mName) {
        //                 return true
        //             } else {
        //                 return false
        //             }
        //         }
        //
        //     })
        //
        // }
        return (
          <div>
              <h2>Manager</h2>
              <br/>
              <input type="text" onBlur={(e) => this.inputs(e, 'name')} placeholder="name"/>
              <br/>
              <input type="text" onBlur={(e) => this.inputs(e, 'lName')} placeholder="lName"/>
              <br/>
              <input type="text" onBlur={(e) => this.inputs(e, 'mName')} placeholder="mName"/>
              <br/>
              <button onClick={this.send}>save</button>
          </div>
        );
    }
}
const mapStateToProps = (state) => ({
    peoples: state.manager.peoples,
});

const mapDispatchToProps = {
    manager,
};

const ManagerContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Manager);

export default ManagerContainer;