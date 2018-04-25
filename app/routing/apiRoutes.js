// ===============================================================================
// LOAD DATA
// We are linking our routes to our "data" sources.
// These data sources hold arrays of information on friends and their choices
// ===============================================================================

var friends = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================



module.exports = function (app) {
    //a GET route that displays JSON of all possible friends
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });



    app.post('/api/friends', function (req, res) {
        //compares new friends score with stored friends
        var newFriends = req.body.scores;
        var scoresArray = [];
        var friendMatch = 0;

        //runs through all current friends in list
        for (var i = 0; i < friends.length; i++) {
            var scoresDiff = 0;
            //run through scores to compare friends
            for (var j = 0; j < newFriends.length; j++) {
                scoresDiff += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(newFriends[j])));
            }

            //push results into scoresArray
            scoresArray.push(scoresDiff);
        }

        //after all friends are compared, find best match
        for (var i = 0; i < scoresArray.length; i++) {
            if (scoresArray[i] <= scoresArray[friendMatch]) {
                friendMatch = i;
            }
        }

        //return friendMatch data
        var bff = friends[friendMatch];
        res.json(bff);

        //pushes new submission into the friends array
        friends.push(req.body);
    });
};