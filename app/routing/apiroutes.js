//this 'connects' to the friends.js file to read the data
const friends = require('../data/friends');

//wrapping these routes in module.exports allows us to export it back to server.js
module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function (req, res) {
        var user = req.body;
        var userScores = user.scores;

        var bestMatchName = '';
        var totalDifference = 10000;
        //this first loop reads each friend in the array
        for (var i = 0; i < friends.length; i++) {
            //this dif variable will the differance of each friends score
            var dif = 0;
            //this second loop will loop through the scores of the user and friend and do the math
            for (var j = 0; j < userScores.length; j++) {
                dif += Math.abs(friends[i].scores[j] - userScores[j])
            }
                
            if (dif < totalDifference) {
                totalDifference = dif;
                bestMatchName = friends[i].name;
                console.log('bestMatchName: ' + bestMatchName);
                
            }
            
        }
        res.send({bestyName:bestMatchName});
        friends.push(user);

    });
};