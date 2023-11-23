 import "./CadastroProduto.css";
import Head from "../head/Head";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";

function CadastroProduto() {
  return (
    <div>
      <Head />
      <NavBar />
      <div className="janelaproduto">
        <div className="nome">
          Nome do Produto <br />
         <input type="text" id="nomeproduto" />
        </div>
        <div className="factory">
          Factory <br />
          <input type="text" id="factory" />
        </div>
        <div className="qualidade">
            Qualidade <br />
            <input type="text" id="qualidade" />
        </div>
        <div className="butao">
          <input type="button" value="Enviar" />
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default CadastroProduto;
