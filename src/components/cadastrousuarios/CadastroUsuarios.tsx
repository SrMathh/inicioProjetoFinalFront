import "./CadastroUsuarios.css"
import Head from "../head/Head";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";

function CadastroUsuarios(){
    return(
    <div>
        
        <NavBar />
        <div className="janelaUsuario">
            <div className="nome">
              Nome Completo: <br />  <input type="text" id="nome"/>
            </div>
            <div className="email">
              Email: <br /> <input type="text" id="email"/>
            </div>
            <div className="senha">
               Senha: <br /> <input type="text" id="senha"/>
            </div>
            <div className="butao">
                <input type="button" value="Enviar" />
            </div>
        </div>
        <Footer/>
    </div>
    )
}
export default CadastroUsuarios