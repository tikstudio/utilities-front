import React, {Component} from 'react';
import Wrapper from '../components/Wrapper';
import { connect } from 'react-redux';
import { getPeoples } from '../store/actions/peoples';
import { Link } from 'react-router-dom';

class Peoples extends Component {
    componentDidMount(data,page,totalPage) {
        this.props.getPeoples(data,page,totalPage);
    }

    render() {
        const totalPage = this.props.totalPage;
        const countPages = [];
        for(let i = 1; i<= totalPage; i++){
            countPages.push(i)
        }
        console.log(countPages);
        console.log(this.props.totalPage)
        const people = this.props.peoples;

        return (
            <Wrapper>
                <form className="d-flex justify-content-center">
                    <input type="search" placeholder="Type your query" aria-label="Search" className="form-control"/>
                    <button className="btn btn-primary btn-sm my-0 p" type="submit">
                        <i className="fas fa-search"></i>
                         <img src="search.png" alt="альтернативный текст" />

            </button>
                </form>
                {people.map((values, id)=>{
                   return <table key={id}>
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
    );}}

const mapStateToProps = (state) => ({
    peoples: state.peoples.peoples,
    page: state.peoples.page,
    totalPage: state.peoples.totalPage,
});

const mapDispatchToProps = {
    getPeoples,
};

const Container = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Peoples);

export default Container;
