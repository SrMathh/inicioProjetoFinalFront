import "./CadastroVendas.css";
// import Head from "../head/Head";
// import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";

function CadastroVendas(){
    return(
        <div>
            {/* <Head />
            <NavBar /> */}
            <div className="janelavendas">
                <div>
                    Nome do Pedido <br />   <input type="text" id="nome" />
                </div>
                <div>
                    Categoria <br /> <input type="text" id = "categoria"/>
                </div>
                <div>
                    Preço <br /> <input type="text" id = "preco"/>
                </div>
                <div>
                    Quantidade <br /> <input type="text" id="quantidade" />
                </div>
                <div>
                    Data do Pedido <br /> <input type="date" name="pedido" id="pedido" />
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default CadastroVendas