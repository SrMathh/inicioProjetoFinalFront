import imgLogo from "../../assets/img/logo-2.png";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./PageLogin.css";
import { Navigate } from "react-router-dom";
import axios from "axios";

function PageLogin() {
  const [valueUser, setValueUser] = useState("");
  const [valuePassword, setValuePassword] = useState("");
  const [openEye, setOpenEye] = useState(false);
  const [isUser, setIsUser] = useState(false);

  function pageCadastro(e:any) {
    setIsUser(true)
  }

  const response =  {
    name: 'nicole',
    password: '123456',
    email: "asas"
  }
  const url = "http://localhost:9000/api/users"

  function responseJson() {
    axios.post (url, response)
    console.log (response)
  }

  return (
    <>
    {/* {
      isUser ? <Navigate to="/pageCardapio" replace={true} /> : <></>
    } */}
      <div className="page-login">
        <div className="div-imgLogo">
          <img src={imgLogo} className="imgLogo" alt="Logo" />
        </div>
        <div className="card">
          {/* <form onSubmit={(url:string,response:Object)=>{axios.post (url, response).catch((e)=>{
            console.log(e)
          })
    console.log (response)
    console.log("e")}}> */}
          <div className="form-group">
            <span className="p-float-label">
              <InputText
                id="username"
                value={valueUser}
                onChange={(e) => setValueUser(e.target.value)}
              />
              <label htmlFor="username">Usuário</label>
            </span>
          </div>
          <div className="form-group">
            <span className="p-float-label">
              <InputText
                type={openEye ? "text" : "password"}
                id="username"
                value={valuePassword}
                onChange={(e) => setValuePassword(e.target.value)}
              />
              {openEye ? (
                <FontAwesomeIcon
                  icon={faEye}
                  onClick={() => setOpenEye(!openEye)}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  onClick={() => setOpenEye(!openEye)}
                />
              )}

              <label htmlFor="username">Senha</label>
            </span>
          </div>
          <div className="forgot-password">Esqueceu sua senha?</div>
          <div className="login">
            <button type="submit" className="buttonAcess" onClick={responseJson}>
              Acessar
            </button>
          </div>
          {/* </form>  */}
        </div>
      </div>
    </>
  );
}

export default PageLogin;
