import React, {Component} from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
import Wrapper from "../components/Wrapper";
import { getPeoples } from '../store/actions/peoples';

class Edit extends Component {
    componentDidMount(data) {
        this.props.getPeoples(data);
    }
    constructor(props) {
        super(props);
        this.state = {
            uName: '',
            lName: '',
            mName: '',
            address: '',
            passport: '',
            phone: '',
            code: '',
        };
    }

handleChange = (e) => {
    this.setState({
       [e.target.id]: e.target.value,
    });
};

handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    // this.props.fetchTypes(this.state)
};



render(object) {
    const people = this.props.peoples;
    console.log(people)

return (
    <Wrapper title="Main">
       <TextField
        className="TextField"
        key={'i'}
        id="uName"
        label="User Name"
        margin="normal"
        value={'object'[0].name}
        onChange={this.handleChange}
             />

         <TextField
            className="TextField"
            key={'id'}
            id="lName"
            label="Last Name"
            margin="normal"
            value={'object'.l_name}
            onChange={this.handleChange}
            />
             {' '}

        <TextField
            className="TextField"
            key={'i'}
            id="mName"
            label="Middle Name"
            margin="normal"
            value={'object'.m_name}
            onChange={this.handleChange}
            />
</Wrapper>
);
}
}
const mapStateToProps = state => ({
    peoples: state.peoples.peoples,
});

const mapDispatchToProps = {
    getPeoples,
};

const Container = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Edit);

export default Container;

