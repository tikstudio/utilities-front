import React, {Component} from 'react';
import Wrapper from '../components/Wrapper'
import { connect } from 'react-redux';
import { getPeoples } from '../store/actions/peoples';
import _ from 'lodash';

class Peoples extends Component {
    componentDidMount(data) {
        this.props.getPeoples(data);
    }
    render() {
        const obj = [
            { 'id':1455},
            { 'id':454}
        ]
        const object = _.map(obj, 'id');
        console.log(object);
          const people = this.props.peoples;


        return (
            <Wrapper>
                {people.map(
                    function(object, i){
                        return <table  key={i}>
                            <tbody>
                                <tr  className={"row"} key={i}>
                                    <td>{object.id}</td> ,
                                    <td key={i}>{object.m_name}</td>,
                                    <td>{object.name}</td>

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
