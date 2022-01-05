import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";

// Render the App component to the DOM

//Import  ThirdWeb
import { ThirdwebWeb3Provider } from '@3rdweb/hooks';


//Add Rinkby TestNet
const supportedChainIds = [4]; //4 = Rinkeby

//Wallet Support thorugh Metamask an "injected wallet"
const connectors = {
  injected: {},
};

ReactDOM.render(
  <React.StrictMode>
    <ThirdwebWeb3Provider
      connectors={connectors}
      supportedChainIds={supportedChainIds}
    >
      <App />
    </ThirdwebWeb3Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
