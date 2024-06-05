sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'sapbuildcodedemo/Redemptions/test/integration/FirstJourney',
		'sapbuildcodedemo/Redemptions/test/integration/pages/RedemptionsList',
		'sapbuildcodedemo/Redemptions/test/integration/pages/RedemptionsObjectPage'
    ],
    function(JourneyRunner, opaJourney, RedemptionsList, RedemptionsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('sapbuildcodedemo/Redemptions') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRedemptionsList: RedemptionsList,
					onTheRedemptionsObjectPage: RedemptionsObjectPage
                }
            },
            opaJourney.run
        );
    }
);