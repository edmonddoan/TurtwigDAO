import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0x988DBd98a3854acc81004739DC7C090Aa93C4117");

(async () => {
  try {
    const bundleDropModule = await app.deployBundleDropModule({
  
      name: "TurtwigDAO Membership",
    
      description: "DAO for the pokemon turtwig",

      image: readFileSync("scripts/assets/turtwig.jpg"),

      primarySaleRecipientAddress: ethers.constants.AddressZero,
    });
    
    console.log(
      "✅ Successfully deployed bundleDrop module, address:",
      bundleDropModule.address,
    );
    console.log(
      "✅ bundleDrop metadata:",
      await bundleDropModule.getMetadata(),
    );
  } catch (error) {
    console.log("failed to deploy bundleDrop module", error);
  }
})()