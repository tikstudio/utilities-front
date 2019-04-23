import React, {Component} from 'react';
import data from '../data'

class Manager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            surname: null,
            mName: null,
            peoples: null
        }
    }

    handleClick = () => {

        // const {name, surname, mName} = this.state;
        // const peoples = data.filter((value) => {
        //     return (value.name === name || name === null) && (value.surname === surname || surname === null) && (value.mName === mName || mName === null) ? true : false
        // })
        // console.log(peoples)
        // this.setState({peoples})
    }

    inputs = (e, input) => {
        const value = e.target.value;
        switch (input) {
            case 'name':
                this.setState({name: value});
                break;
            case 'surname':
                this.setState({surname: value});
                break;
            case 'mName':
                this.setState({mName: value});
                break;
            default:
                break
        }
    };

    render() {
        const {peoples} = this.state;
        return (
            <div>
                <h2>Manager</h2>
                <br/>
                <input type="text" onBlur={(e) => this.inputs(e, 'name')} placeholder="name"/>
                <br/>
                <input type="text" onBlur={(e) => this.inputs(e, 'surname')} placeholder="surname"/>
                <br/>
                <input type="text" onBlur={(e) => this.inputs(e, 'mName')} placeholder="mName"/>
                <br/>
                <button onClick={this.handleClick}>save</button>
                {peoples ?
                    <table>
                        <tbody>
                        {peoples.map((value)=>(
                        <tr>
                            <td>{value.name}</td>
                            <td>{value.surname}</td>
                            <td>{value.mName}</td>
                            <td>{value.address}</td>
                        </tr>
                        ))}
                        </tbody>
                    </table>
                    : null}
            </div>
        );
    }
}

export default Manager;