import axios from "axios";
// import logo from "../../img/logo.png";
import "./NavBar.css"
import CadastroProduto from "../cadastroproduto/CadastroProduto"
import React, { useEffect, useRef } from "react";
import {Link} from "react-router-dom";

function NavBar() {
  return (
    <div className="NavBar">
      <div className="Head">
        <div className="Logo">
        {/* <img src={logo} alt="" /> */}
        </div>
    </div>
      <div className="Itens">
        <div className="links">
        <Link to="/"  rel="nooper noreferrer">
          Home
        </Link>
        </div>
        <div className="links">
        <Link to= "/users"  rel="nooper noreferrer">
          Cadastro Usuarios
        </Link>
        </div>
        <div className="links">
        <Link to="/sales"  rel="nooper noreferrer">
          Vendas
        </Link>
        </div>
        <div className="links">
        <Link to="/products"  rel="nooper noreferrer">
          Cadastro Produtos
        </Link>
        </div>
        <div className="button">
        </div>
      </div>
    </div>
  );
}
export default NavBar;
