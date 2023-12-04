import imgLogo from "../../assets/img/logo-2.png";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./PageLogin.css";
import { Navigate } from "react-router-dom";

function PageLogin() {
  const [valueUser, setValueUser] = useState("");
  const [valuePassword, setValuePassword] = useState("");
  const [openEye, setOpenEye] = useState(false);
  const [isUser, setIsUser] = useState(false);

  function pageCadastro(e:any) {
    setIsUser(true)
  }

  return (
    <>
    {
      isUser ? <Navigate to="/pageCardapio" replace={true} /> : <></>
    }
      <div className="page-login">
        <div className="div-imgLogo">
          <img src={imgLogo} className="imgLogo" alt="Logo" />
        </div>
        <div className="card">
          <form onSubmit={(e)=> pageCadastro(e)}>
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
            <button type="submit" className="buttonAcess">
              Acessar
            </button>
          </div>
          </form> 
        </div>
      </div>
    </>
  );
}

export default PageLogin;
