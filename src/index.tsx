import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Head from './components/head/Head';
import NavBar from './components/navbar/NavBar';
import Principal from './components/principal/Principal';
import Produtos from './components/produtos/Produtos';
import CadastroProduto from './components/cadastroproduto/CadastroProduto';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CadastroUsuarios from './components/cadastrousuarios/CadastroUsuarios';
import CadastroVendas from './components/cadastrovenda/CadastroVendas';
import PageHome from './components/pagehome/PageHome';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/projeto'>
      <Routes>
        <Route path='/'element = {<PageHome/>}/>
        <Route path='/users'element = {<CadastroUsuarios/>}/>
        <Route path='/sales'element = {<CadastroVendas/>}/>
        <Route path='/products'element = {<CadastroProduto/>}/>    
      </Routes>
    </BrowserRouter>  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
