// import React, {Component} from 'react';
// import Wrapper from '../components/Wrapper';
// import TextField from '@material-ui/core/TextField';
// import {connect} from 'react-redux';
// import {searchCalc} from '../store/actions/searchCalc';
// import {getCalc} from '../store/actions/getCalc';
// import {Link} from "react-router-dom";
//
// class Comunals extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       search: '',
//       searchCalculator: '',
//     };
//   }
//
//   componentDidMount() {
//     this.props.getCalc();
//   }
//
//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.searchCalc(this.state.searchCalculator);
//   }
//
//   handleChange = (e) => {
//     this.setState({
//       [e.target.id]: e.target.value,
//     });
//   };
//
//   // delete = (values) => {
//   //   this.props.destroyPeoples(values.id);
//   //   setTimeout(() => {
//   //       this.props.getPeoples();
//   //     },
//   //     100);
//   // }
//
//   render() {
//     console.log(this.props)
//     const totalPage = this.props.totalPage;
//     const countPages = [];
//     for (let i = 1; i <= totalPage; i++) {
//       countPages.push(i)
//     }
//     const calc = this.props.peopleData;
//     console.log(this.props.peopleData)
//     return (
//       <Wrapper title="Comunals">
//         <form onSubmit={this.handleSubmit}>
//           <TextField
//             id="searchCalculator"
//             label="searchCalculator"
//             margin="normal"
//             onChange={this.handleChange}
//           />
//         </form>
//         <table>
//           <tbody>
//           <tr>
//             <td>calc_id</td>
//             <td>create_date</td>
//             <td>create_user_id</td>
//             <td>debt</td>
//             <td>number</td>
//             <td>pay_date</td>
//             <td>payed</td>
//             <td>payed_user_id</td>
//             <td></td>
//             <td></td>
//           </tr>
//           {this.props.peopleData.length > 0 ?
//             calc.map((values,id) => {
//               return (
//                 <tr key={id}>
//                   <td>{values.calc_id}</td>
//                   <td>{values.create_date}</td>
//                   <td>{values.create_user_id}</td>
//                   <td>{values.debt}</td>
//                   <td>{values.number}</td>
//                   <td>{values.pay_date}</td>
//                   <td>{values.payed}</td>
//                   <td>{values.payed_user_id}</td>
//                   <td>
//                     <Link to={`/edit/${values.id}`}>
//                       Edit
//                     </Link>
//                   </td>
//                   <td onClick={() => this.delete(values)}>Delete</td>
//                 </tr>
//               )}):
//             this.props.calculators.map((values,id) => {
//               return (
//                 <tr key={id}>
//                   <td>{values.address}</td>
//                   <td>{values.create_date}</td>
//                   <td>{values.create_user_id}</td>
//                   <td>{values.debt}</td>
//                   <td>{values.number}</td>
//                   <td>{values.pay_date}</td>
//                   <td>{values.payed}</td>
//                   <td>{values.payed_user_id}</td>
//                   <td>
//                     <Link to={`/edit/${values.id}`}>
//                       Edit
//                     </Link>
//                   </td>
//                   <td onClick={() => this.delete(values)}>Delete</td>
//                 </tr>
//               )})
//           }
//           </tbody>
//         </table>
//       </Wrapper>
//     );
//   }
// }
//
// const mapStateToProps = (state) => ({
//   page: state.getCalc.page,
//   totalPage: state.getCalc.totalPage,
//   peopleData: state.searchCalc.peopleData,
//   calculators:state.getCalc.calculators,
// });
//
// const mapDispatchToProps = {
//   searchCalc,
//   getCalc,
// };
//
// const Container = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(Comunals);
//
// export default Container;
