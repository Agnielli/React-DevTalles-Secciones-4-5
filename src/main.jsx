import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import { FirsApp } from "./FirsApp.jsx";
import { CounterApp } from "./CounterApp";
import './styles.css'

ReactDOM.createRoot( document.getElementById('root') ).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <FirsApp  subTitle = 'La tierra explota'/> */}
    <CounterApp value={20} />
  </React.StrictMode>
)