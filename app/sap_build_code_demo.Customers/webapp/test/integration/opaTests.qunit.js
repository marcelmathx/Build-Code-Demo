sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'sapbuildcodedemo/Customers/test/integration/FirstJourney',
		'sapbuildcodedemo/Customers/test/integration/pages/CustomersList',
		'sapbuildcodedemo/Customers/test/integration/pages/CustomersObjectPage'
    ],
    function(JourneyRunner, opaJourney, CustomersList, CustomersObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('sapbuildcodedemo/Customers') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCustomersList: CustomersList,
					onTheCustomersObjectPage: CustomersObjectPage
                }
            },
            opaJourney.run
        );
    }
);