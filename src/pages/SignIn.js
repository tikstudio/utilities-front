import React, {Component} from 'react';
import {signIn} from "../store/actions/user";
import {connect} from "react-redux";

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password:''
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
        this.props.signIn(this.state)
    };


    render() {

        return (
            <div className='container' >
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='login'>login</label>
                        <input type="text" id='login' onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor='password'>password</label>
                        <input type="text" id='password' onChange={this.handleChange}/>
                    </div>
                    <div>
                       <button>LogIn</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    usersData: state.usersData,
});

const mapDispatchToProps = {
    signIn,
};

const SignInContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignIn);

export default SignInContainer;


