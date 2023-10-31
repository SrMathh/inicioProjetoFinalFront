import "./Produtos.css"
import {useEffect}from "react"
import Logica from "../../services/inputoutput";

function Produtos(){
    useEffect(() => {
        var newDiv = document.getElementById("newDiv") as HTMLDivElement;
        Logica.Logica(newDiv);
    },[]);
    

    return(
        <div id = "newDiv" className="Produtos"></div>
        
    )
}
export default Produtos