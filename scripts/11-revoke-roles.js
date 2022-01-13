import sdk from "./1-initialize-sdk.js";

const tokenModule = sdk.getTokenModule(
    "0x4DF91FCb950985Cd62b59A9873eA16ba56266871",
);

(async () => {
    try{
        console.log("Roles that exist right now:", await tokenModule.getAllRoleMembers());

        await tokenModule.revokeAllRolesFromAddress(process.env.WALLET_ADDRESS);

        console.log("Roles after revoking ourselves", await tokenModule.getAllRoleMembers());
        console.log("✅ Successfully revoked our superpowers from the ERC-20 contract");

    } catch (error) {
        console.error("Failed to revoke ourselves from the DAO", error);
    }
})();