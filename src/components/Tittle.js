import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Tittle extends Component {
    render() {
        return (
            < div >
            <div className="card mb-4 wow fadeIn">
            <div className="card-body d-sm-flex justify-content-between">
            <h4 className="mb-2 mb-sm-0 pt-1">
            <Link to="/" target="_blank">Home Page</Link>
        <>/</>
        {/*   <p>{
             if(this.props.match.url === "/peoples"){
                "Peoples"
             }else if(this.props.match.url ==="/comunals"){
                 "Comunals"
                }
             else{
                 "Dashboard"
                }
            }
      </p> */}
        </h4>
        </div>
        </div>
            < /div>
    )
        ;
    }
}

export default Tittle;