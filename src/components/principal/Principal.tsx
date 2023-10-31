import axios from "axios";
import "./Principal.css";
import logo from "../../img/logo.png";


function Principal(){
    return(
    <div>
        <div className="Principal">
        <img src={logo} alt="" className="img"/>
        <label className="titulo" >Produto principal ! </label>
      </div>
    </div>
    )
}
export default Principal