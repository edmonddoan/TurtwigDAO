import {useEffect, useMemo, useState } from "react";
import { useWeb3 } from "@3rdweb/hooks";
import { BundleDropModule, ThirdWebSDK } from "@3rdweb/sdk";


const sdk = new ThirdwebSDK("rinkeby");
cons BundleDropModule = sdk.getBundleDropModule("0x0171A069310ed313d21046Fb2a1eB1BBA9875D2a",);

const App = () => {
  //retrieve connectWallet hook from thirdweb import
  const { connectWallet, address, error, provider } = useWeb3();
  console.log("Address", address)

  //check if user has nft
  const [hasclaimedNFT, setHasClaimedNFT] = useState(false);

  useEffect(() => {
    if(!address)
    {
      return;
    }
  }
  
  
  return BundleDropModule
    .balanceof(address, "0"
    .then((balance) => {
      setHasClaimedNFT(true);
      console.log("User has a membership with an NFT!")
    }
    else{
      setHasClaimedNFT(false);
      console.log("NFT doesn't exist for")
    }
    ))
  )
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
