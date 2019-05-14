import React, {Component} from 'react';
import {saveUsers} from "../store/actions/save";
import {connect} from "react-redux";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
        console.log(this.state);
        // this.props.saveUsers(this.state)
    };


    render() {



        return (
            <div className='container' >
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        id="uName"
                        label="User Name"
                        margin="normal"
                        onChange={this.handleChange}
                    />

                    <TextField
                        id="lName"
                        label="Last Name"
                        margin="normal"
                        onChange={this.handleChange}
                    />
                    <TextField
                        id="mName"
                        label="Middle Name"
                        margin="normal"
                        onChange={this.handleChange}
                    />
                    <TextField
                        id="address"
                        label="Address"
                        margin="normal"
                        onChange={this.handleChange}
                    />
                    <TextField
                        id="passport"
                        label="Passport"
                        margin="normal"
                        onChange={this.handleChange}
                    />
                    <TextField
                        id="phone"
                        label="Phone Number"
                        margin="normal"
                        onChange={this.handleChange}
                    />
                    <TextField
                        id="code"
                        label="Code"
                        margin="normal"
                        onChange={this.handleChange}
                    />
                    <div>
                        <Button onClick={this.handleSubmit} variant="contained" color="primary" >
                            Sign In
                        </Button>
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


