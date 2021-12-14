import React from "react";
import ReactDOM from "react-dom";
import Game from "./Game.js";
import reportWebVitals from "./reportWebVitals";



ReactDOM.render(
  <React.StrictMode>
    <Game user="Aakash Dinkar" />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your Game, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
