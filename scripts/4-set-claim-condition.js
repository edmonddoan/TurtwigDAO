import sdk from "./1-initialize-sdk";

const bundleDrop = sdk.getBundleDropModule("0x0171A069310ed313d21046Fb2a1eB1BBA9875D2a",);


(async () => {
    try{
        const claimconditionFactory = bundleDrop.getClaimConditionFactory();
        claimconditionFactory.newClaimPhase({
            startTime: new Date(),
            maxQuantity: 10_000,
            maxQuantityPerTransaction: 1,
        });
    
        await bundleDrop.setClaimCondition(0, ClaimConditionFactory);
        console.log("✅ Successfully set claim condition on bundle drop:", bundleDrop.address);
    }   catch (error) {
        console.error("Failed to set claim condition", error);
    }
}) ()