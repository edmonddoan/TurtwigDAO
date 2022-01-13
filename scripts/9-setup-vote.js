import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

// This is our governance contract.
const voteModule = sdk.getVoteModule(
  "0x4EEbAc519De6e2CF3fec9da722c4f19cfB9AA5dB",
);

// This is our ERC-20 contract.
const tokenModule = sdk.getTokenModule(
  "0x4DF91FCb950985Cd62b59A9873eA16ba56266871",
);

(async () => {
    try {
        await tokenModule.grantRole("minter", voteModule.address);

        console.log(
            "Successfully gave vote module permissions to act on token module"
          );
        } catch (error) {
          console.error(
            "failed to grant vote module permissions on token module",
            error
          );
          process.exit(1);
        }
      
        try {
          // Grab our wallet's token balance, remember -- we hold basically the entire supply right now!
          const ownedTokenBalance = await tokenModule.balanceOf(
            // The wallet address stored in your env file or Secrets section of Repl
            process.env.WALLET_ADDRESS
          );
      
          // Grab 90% of the supply that we hold.
          const ownedAmount = ethers.BigNumber.from(ownedTokenBalance.value);
          const percent90 = ownedAmount.div(100).mul(90);
      
          // Transfer 90% of the supply to our voting contract.
          await tokenModule.transfer(
            voteModule.address,
            percent90
          );
      
          console.log("✅ Successfully transferred tokens to vote module");
        } catch (err) {
          console.error("failed to transfer tokens to vote module", err);
        }
      })();