import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule("0x0171A069310ed313d21046Fb2a1eB1BBA9875D2a",);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Grass Pokeball",
        description: "Exclusive Access to TurtwigDAO",
        image: readFileSync("scripts/assets/grassball.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()