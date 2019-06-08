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
                    function(values, id){
                        console.log(Object.keys(people));
                        return <table  key={id}>
                          <tbody>
                                <tr className={"row"} key={id}>
                                    <td>{values.id}</td>
                                    <td>{values.name}</td>
                                    <td key={id}>{values.l_name}</td>
                                    <td>{values.m_name}</td>
                                    <td>{values.address}</td>
                                    <td>{values.phone}</td>
                                    <td><Link to="/edit">Edit</Link></td>
                                    <td><Link to="/delete">Delete</Link></td>
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
