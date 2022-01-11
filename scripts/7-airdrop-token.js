import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

// This is the address to our ERC-1155 membership NFT contract.
const bundleDropModule = sdk.getBundleDropModule(
  "INSERT_DROP_MODULE_ADDRESS",
);

// This is the address to our ERC-20 token contract.
const tokenModule = sdk.getTokenModule(
  "INSERT_TOKEN_MODULE_ADDRESS",
);