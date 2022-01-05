import {useEffect, useMemo, useState } from "react";

import { useWeb3 } from "@3rdweb/hooks";

const App = () => {
  //retrieve connectWallet hook from thirdweb import
  const { connectWallet, address, error, provider } = useWeb3();
  console.log("Address", address)

  //Allow User to connect wallet through calling connectWallet

  if(!address) {
    return(
      <div className="landing">
        <h1>Welcome to TurtwigDAO</h1>
        <button onClick={() => connectWallet("injected")} className="btn-hero">
          Connect Wallet
        </button>
      </div>
    )
  }

  //Confirm User has address connected
  return (
    <div className="landing">
      <h1>👀 wallet connected, now what!</h1>
    </div>
  );
};

export default App;
