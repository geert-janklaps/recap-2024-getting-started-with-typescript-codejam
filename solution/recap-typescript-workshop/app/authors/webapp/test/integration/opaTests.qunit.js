sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'authors/test/integration/FirstJourney',
		'authors/test/integration/pages/AuthorsList',
		'authors/test/integration/pages/AuthorsObjectPage'
    ],
    function(JourneyRunner, opaJourney, AuthorsList, AuthorsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('authors') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheAuthorsList: AuthorsList,
					onTheAuthorsObjectPage: AuthorsObjectPage
                }
            },
            opaJourney.run
        );
    }
);