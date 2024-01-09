import React from "react";
import "./Userinput.css";
import axios from "axios";

async function userData() {
  var userNameInput =
    (document.getElementById("userName") as HTMLInputElement) || null;
  var userLastNameInput =
    (document.getElementById("userLastName") as HTMLInputElement) || null;
  var userEmailInput =
    (document.getElementById("userEmail") as HTMLInputElement) || null;
  var userCpfInput =
    (document.getElementById("userCpf") as HTMLInputElement) || null;
  var newDiv = document.getElementById("newDiv") as HTMLDivElement;
  var userUrl = "http://localhost:9000/api/users";

  //var userDataJason = {
  //"name": userNameInput.value.toString(),
  //"lastname": userLastNameInput.value.toString(),
  //"email": userEmailInput.value.toString(),
  //"cpf": userCpfInput.value.toString(),
  //};

  await axios.get(userUrl, {}).then((response) => {
    const dataUser: Record<
      string,
      { name: string; lastname: string; cpf: string; email: string }
    > = response.data;

    const dataUserArray = Object.entries(dataUser).map(([key, value]) => ({
      key,
      ...value,
    }));
    console.log(dataUserArray);

    //newDiv.innerHTML = `<div>Nome: ${dataUserArray[1].name}<div/>
                        //<div> Sobrenome: ${dataUserArray[1].lastname}<div/>
                        //<div> Cpf:  ${dataUserArray[1].cpf}<div/>
                        //<div> Email: ${dataUserArray[1].email}<div/> `;
    dataUserArray.forEach(i => {
      newDiv.innerHTML = i.name;
      console.log(i.name);
    });
      
  });
  
}

function UserIput() {
  return (
    <div className="userInputMain">
      <div className="userInputBody">
        <label>Nome: </label>
        <input type="text" placeholder="text" id="userName" />
      </div>
      <div className="userInputBody">
        <label>Sobrenome: </label>
        <input type="text" placeholder="text" id="userLastName" />
      </div>
      <div className="userInputBody">
        <label>Email: </label>
        <input type="text" placeholder="text" id="userEmail" />
      </div>
      <div className="userInputBody">
        <label>Cpf: </label>
        <input type="text" placeholder="text" id="userCpf" />
      </div>
      <div className="button">
        <button id="sendBtn" onClick={userData}>
          Enviar
        </button>
      </div>
      <br />
      <br />

      <div id="newDiv"></div>
    </div>
  );
}

export default UserIput;
