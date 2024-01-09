import React from "react";
import axios from "axios";
import logo from "../img/logo.png"
import { error } from "console";
import { url } from "inspector";

//var newDiv = document.getElementById("newDiv") as HTMLDivElement;

async function Logica(newDiv: HTMLDivElement){
  const userUrl = "http://localhost:9000/api/users"
    await axios.get(userUrl).then((response) => {
        const dataUser: Record<
          string,
          {name: string; lastname: string; cpf: string; email: string}
        > = response.data;
          // name vai ter a url, lastname vai conter o titulo, cps vai ter o sub titulo 
        const dataUserArray = Object.entries(dataUser).map(([key, value]) => ({
          key,
          ...value,
        }));
    
        dataUserArray.forEach((i) => {
          //var newDiv= document.createElement("div") ;

         newDiv.innerHTML += `<div className="newDiv">
          <div className="contender">
              <img src=${i.name} alt="" className="img"/>
          </div>
          <div className="Produtos">
              <label className="titulos">${i.lastname} !</label>
          </div>
          <div className="Produtos">
              <label className="titulos">${i.cpf} !</label>
          </div>
          </div>`
        })     
      })
      .catch((error)=>{console.log("O erro ocorrido foi:  ", error)
    })
}

function PostLogica(){
  console.log("teste")
}
export default {Logica, PostLogica}