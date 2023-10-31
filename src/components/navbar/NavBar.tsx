import axios from "axios";
import logo from "../../img/logo.png";
import "./NavBar.css"
import CadastroProduto from "../cadastroproduto/CadastroProduto"
import React, { useEffect, useRef } from "react";
import {Link} from "react-router-dom";

function NavBar() {
  return (
    <div className="NavBar">
      <div className="Itens">
        <Link to="/" target="blank" rel="nooper noreferrer">
          Home
        </Link>
        <Link to= "/users" target="blank" rel="nooper noreferrer">
          Cadastro Usuarios
        </Link>
        <Link to="/sales" target="blank" rel="nooper noreferrer">
          Vendas
        </Link>
        <Link to="/products" target="blank" rel="nooper noreferrer">
          Cadastro Produtos
        </Link>
      </div>
    </div>
  );
}
export default NavBar;
