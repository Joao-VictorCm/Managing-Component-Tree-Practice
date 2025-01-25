import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./../public/styles.css";

ReactDOM.render(<App />, document.getElementById("root"));

//DESAFIO: Extraí a área de entrada, incluindo <input> e
//<button> elementos em um componente separado chamado InputArea.
//Seu trabalho é fazer o aplicativo funcionar como antes, mas desta vez com o
//InputArea como um componente separado.

// NÃO: Modifique o ToDoItem.jsx
// NÃO: Mova os elementos de entrada/botão de volta para App.jsx

//Dica 1: você precisará pensar em como gerenciar o estado do elemento de entrada
//em InputArea.jsx.
//Dica 2: você precisará pensar em como passar o valor de entrada de volta para
//a função addItem() em App.jsx.
