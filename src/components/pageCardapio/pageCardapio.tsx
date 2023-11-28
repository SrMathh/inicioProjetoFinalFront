import "./pageCardapio.css";
import imgLogo1 from "../../assets/img/logo-1.png";
import pizza from "../../assets/img/pizza.jpg";
import { Avatar } from 'primereact/avatar';

function PageCardapio() {
  return (
    <>
      <div className="navbar">
        <div className="left-section">
          <img className="imgLogo1" src={imgLogo1} alt="Imagem de logo" />
        </div>
        <div className="center-section">
          <h1>Crie seu cardápio</h1>
        </div>
        <div className="right-section">
            Sair
        <Avatar label="A" size="xlarge" style={{ backgroundColor: '#cccccc', color: '#90908e' }} shape="circle" />
        </div>
      </div>
      <div className="card-cardapio">
        <div className="card-img">
          <img src={pizza} alt="" />
        </div>
        <div>
          <form className="form-cardapio">
            <div>
              <label className="label-cardapio" htmlFor="nome">Nome:</label>
              <input
                className="input-cardapio"
                type="text"
                name="nome"
                id="nome"
              />
            </div>
            <div>
              <label className="label-cardapio" htmlFor="descricao">Descrição:</label>
              <textarea
                className="input-cardapio"
                name="descricao"
                id="descricao"
              />
            </div>
            <div>
              <label className="label-cardapio" htmlFor="price">Preço:</label>
              <input
                className="input-cardapio"
                type="number"
                name="price"
                id="price"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default PageCardapio;
