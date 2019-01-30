const WesterosTour = require('./WesterosTour.class');

let options = {
        onTourStart: function () {
            console.log('King\'s Landing');
        },
        onEntryToAttraction: function () {
            console.log('Winterfell');
        },
        onExitFromAttraction: function () {
            console.log('Mountains of Dorne');
        },
        onTourCompletion: function () {
            console.log('Eyrie');
        }
    };

    let tour = new WesterosTour(options);
    tour.StartTour();