sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'sapbuildcodedemo/Purchases/test/integration/FirstJourney',
		'sapbuildcodedemo/Purchases/test/integration/pages/PurchasesList',
		'sapbuildcodedemo/Purchases/test/integration/pages/PurchasesObjectPage'
    ],
    function(JourneyRunner, opaJourney, PurchasesList, PurchasesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('sapbuildcodedemo/Purchases') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePurchasesList: PurchasesList,
					onThePurchasesObjectPage: PurchasesObjectPage
                }
            },
            opaJourney.run
        );
    }
);