import React, {Component} from 'react';
import {saveUsers} from "../store/actions/save";
import {connect} from "react-redux";

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uName:'',
            lName:'',
            mName:'',
            address:'',
            passport:'',
            phone:'',
            code:''
        };
    }

    handleChange= (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })

    };

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.saveUsers(this.state)
    };


    render() {



        return (
            <div className='container' >
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='uName'>User Name</label>
                        <input type="text" id='uName' onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor='lName'>Last Name</label>
                        <input type="text" id='lName' onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor='mName'>Middle Name</label>
                        <input type="text" id='mName' onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor='address'>Address</label>
                        <input type="text" id='address' onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor='passport'>Passport</label>
                        <input type="text" id='passport' onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor='phone'>Phone Number</label>
                        <input type="text" id='phone' onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor='code'>Code</label>
                        <input type="text" id='code' onChange={this.handleChange}/>
                    </div>

                    <div>
                        <button>Save</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    saveUsers: state.saveUsers,
});

const mapDispatchToProps = {
    saveUsers,
};

const AdminContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Admin);

export default AdminContainer;


