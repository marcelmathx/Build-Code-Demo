/**
 * 
 * @On(event = { "CREATE" }, entity = "sap_build_code_demoSrv.Redemptions")
 * @param {Object} req - User information, tenant-specific CDS model, headers and query parameters
*/
module.exports = async function(req) {
    const { redeemedAmount, customer } = req.data;
    const tx = cds.transaction(req);

    // Get the customer's current total reward points and total redeemed reward points
    const [{ totalRewardPoints, totalRedeemedRewardPoints }] = await tx.run(
        SELECT.from('sap_build_code_demoSrv.Customers')
            .where({ ID: customer })
            .columns(['totalRewardPoints', 'totalRedeemedRewardPoints'])
    );

    // Check if the customer has enough reward points to redeem
    if (totalRewardPoints < redeemedAmount) {
        req.error(400, 'Insufficient reward points');
        return;
    }

    // Deduct the redeemed amount from the customer's total reward points
    // and add that to their total redeemed reward points
    await tx.run(
        UPDATE('sap_build_code_demoSrv.Customers')
            .set({
                totalRewardPoints: totalRewardPoints - redeemedAmount,
                totalRedeemedRewardPoints: totalRedeemedRewardPoints + redeemedAmount
            })
            .where({ ID: customer })
    );
}