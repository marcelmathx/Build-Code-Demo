/**
 * 
 * @On(event = { "CREATE" }, entity = "sap_build_code_demoSrv.Purchases")
 * @param {Object} request - User information, tenant-specific CDS model, headers and query parameters
*/
module.exports = async function(request) {
    // Calculate reward points
    const rewardPoints = Math.floor(request.data.purchaseValue / 10);
    request.data.rewardPoints = rewardPoints;

    // Fetch the related customer
    const customer = await SELECT.one('sap_build_code_demoSrv.Customers')
        .where({ ID: request.data.customer_ID });

    // Update the total purchase value and total reward points of the customer
    await UPDATE('sap_build_code_demoSrv.Customers')
        .set({
            totalPurchaseValue: { '+=': request.data.purchaseValue },
            totalRewardPoints: { '+=': rewardPoints }
        })
        .where({ ID: customer.ID });
}