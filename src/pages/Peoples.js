import React, {Component} from 'react';
import Wrapper from '../components/Wrapper';
import { connect } from 'react-redux';
import { getPeoples } from '../store/actions/peoples';
import { Link } from 'react-router-dom';



class Peoples extends Component {
    componentDidMount(data) {
        this.props.getPeoples(data);
    }
    render() {
        console.log(this.props.location.pathname)
        const people = this.props.peoples;
        console.log(people);



        return (
            <Wrapper>
                {people.map(
                    function(object, i){
                        return <table  key={i}>
                            <tbody>
                                <tr className={"row"} key={i}>
                                    <td>{object.id}</td>
                                    <td>{object.name}</td>
                                    <td key={i}>{object.l_name}</td>
                                    <td>{object.m_name}</td>
                                    <td>{object.address}</td>
                                    <td>{object.phone}</td>
                                    <td><Link to="/">Edit</Link></td>
                                    <td><Link to="/">Delete</Link></td>

                                </tr>
                            </tbody>
                            </table>;
                    })}

            </Wrapper>
    )
        ;
    }
}

const mapStateToProps = (state) => ({
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
