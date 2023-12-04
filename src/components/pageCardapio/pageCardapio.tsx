import "./pageCardapio.css";
import imgLogo1 from "../../assets/img/logo-1.png";
import pizza from "../../assets/img/pizza.jpg";
import { Avatar } from "primereact/avatar";
import { Navigate } from "react-router-dom";
import { useState } from "react";

function PageCardapio() {
  const [isLogout, setLogout] = useState(false);

  const handleLogout = () => {
    setLogout(true);
  };
  return (
    <>
      {isLogout ? <Navigate to="/pageLogin" replace={true} /> : <></>}
      <div className="navbar">
        <div className="left-section">
          <img className="imgLogo1" src={imgLogo1} alt="Imagem de logo" />
        </div>
        <div className="center-section">
          <h1 className="mb-0">Crie seu cardápio</h1>
        </div>
        <div className="right-section">
          <button onClick={handleLogout} className="button-sair">
            Sair
          </button>
          <Avatar
            label="A"
            size="xlarge"
            className="avatar"
            shape="circle"
          />
        </div>
      </div>
      <div className="card-cardapio col-12">
        <div className="card-img col-6">
          <div>
          <img src={pizza} alt="" />
          </div>
          <div className="button-btn-save mt-2">
            <button className="btn-save">
             <i className="pi pi-check"/> Salvar item 
            </button>
          </div>
        </div>
        <div className="col-6">
          <form className="form-cardapio">
            <div>
              <label className="label-cardapio" htmlFor="nome">
                Nome:
              </label>
              <input
                className="input-cardapio"
                type="text"
                name="nome"
                id="nome"
              />
            </div>
            <div>
              <label className="label-cardapio" htmlFor="descricao">
                Descrição:
              </label>
              <textarea
                name="descricao"
                style={{minHeight: '3rem'}}
                className="input-cardapio"
                id="descricao"
              />
            </div>
            <div>
              <label className="label-cardapio" htmlFor="price">
                Preço:
              </label>
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
