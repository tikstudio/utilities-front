import React, {Component} from 'react';
import Wrapper from '../components/Wrapper'
import { connect } from 'react-redux';
import { getPeoples } from '../store/actions/peoples';

class Peoples extends Component {
    componentDidMount() {
        this.props.getPeoples();
    }
    render() {
        const peoples = this.props.peoples;
        console.log(peoples);
        // const poeplesInfo = peoples.map(key,val) => console.log(key);
        // const doubled = numbers.map((number) => number * 2);
        // const listItems =

        return (
            <Wrapper>
                // {peoples.map((id) => <li>{id[0]}</li>)}
            </Wrapper>
    )
        ;
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
)(Peoples);

export default Container;
