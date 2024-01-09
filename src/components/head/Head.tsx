import axios from "axios";
// import logo from "../../img/logo.png";
import "./Head.css"
import {Link} from "react-router-dom"

function Head(){
    return(
    <div className="Head">
        <div className="Logo">
        {/* <img src={logo} alt="" /> */}
        </div>
        <div className="button">
        <Link to= "/users" rel="nooper noreferrer" >
            <input type="button" value="Log In!" />
        </Link>
        </div>
    </div>
    )
}
export default Head