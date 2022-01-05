import { ThirdwebSDK } from "@3rdweb/sdk";
import ethers from "ethers";

//import .env file to get environment variables
import dotenv from "dotenv";

dotenv.config();

//Check if .env is working.

if(!process.env.PRIVATE_KEY || process.env.PRIVATE_KEY == "") {
    console.log("🛑 Private key not found.")
}

if(!process.env.ALCHEMY_API_URL || process.env.ALCHEMY_API_URL == "") {
    console.log("🛑 Alechemy API URL not found.")
}

if(!process.env.WALLET_ADDRESS || process.env.WALLET_ADDRESS == "") {
    console.log("🛑 Wallet Address not found.")
}

const sdk = new ThirdwebSDK(
    new ethers.Wallet(
        //Private Key to Wallet
        process.env.PRIVATE_KEY,
        //RPC URL, using Alchemy API URL
        ethers.getDefaultProvider(process.env.ALCHEMY_API_URL), 
    ),
);

(async () =>   {
    try {
        const apps = await sdk.getApps();
        console.log("Your app address is: ", apps[0].address);
    }
    catch (err) {
        console.error("failed to get apps from sdk", err);
        process.exit(1);
    }
}) ()

//Export thirdweb SDK allowing access in other scripts
export default sdk;