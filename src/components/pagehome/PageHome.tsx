import React from "react";
import "./PageHome.css";
import Head from "../head/Head";
import NavBar from "../navbar/NavBar";
import Principal from "../principal/Principal";
import Produtos from "../produtos/Produtos";
import Footer from "../footer/Footer";

function PageHome() {
  return (
    <div>
      <div className="principal">
          <Head/>
          <NavBar/>
          <Principal/>
          <Produtos/>
      </div>
      <Footer/>
    </div>
  );
}

export default PageHome;