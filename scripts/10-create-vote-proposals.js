import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

const voteModule = sdk.getVoteModule(
    "0x4EEbAc519De6e2CF3fec9da722c4f19cfB9AA5dB"
);


const tokenModule = sdk.getTokenModule(
    "0x4DF91FCb950985Cd62b59A9873eA16ba56266871",
  );


(async () => {
    try{
        const amount  = 420_000;
        await voteModule.propose(
            "Should the DAO mint an additional " + amount + " tokens into the treasury?",
            [
                {
                    nativeTokenValue: 0,
                    transactionData: tokenModule.contract.interface.encodeFunctionData(
                        "mint",
                        [
                            voteModule.address,
                            ethers.utils.parseUnits(amount.toString(),18),
                        ]
                    ),
                    toAddress: tokenModule.address,
                },
            ]
        );
    console.log("Successfully created proposal to mint tokens");
    }
    catch(error)
    {
        console.error("failed to create first proposal", error);
        process.exit(1);
    }


    try{
        const amount = 6_900;

        await voteModule.propose(
            "Should the DAO transfer " + amount + " tokens from the treasury to " + process.env.WALLET_ADDRESS + " for being awesome?",
            [
                {
                    nativeTokenValue: 0,
                    transactionData: tokenModule.contract.interface.encodeFunctionData(
                        "transfer",
                        [
                            process.env.WALLET_ADDRESS,
                            ethers.utils.parseUnits(amount.toString(), 18),
                        ]
                    ),

                    toAddress: tokenModule.address,
                },
            ]
        );

        console.log("Successfully created proposal to reward ourselves from the treasury, let's hope people vote for it!");

    }
    catch(error) {
        console.error("failed to create second proposal", error);
    }
}) ();