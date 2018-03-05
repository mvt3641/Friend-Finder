var friends = require('../data/friends');


module.exports = function(app) {

  app.get('/api/friends', function(req, res) {

    res.json(friends)
  })


  app.post('/api/friends', function(req, res) {

    //Capture user input from survey
    var userData = req.body;
    //Capture user scores
    var userResponses = userData.scores.map(Number);

    var matchName = '';
    var matchImg = '';
    var totalDifference = 10000;
    for (var i = 0; i < friends.length; i++) {

      //  console.log(friends[i].scores);
      //console.log(req.body);

      for (var j = 0; j < userResponses.length; j++) {

        var diff = Math.abs(friends[i].scores[j] - userResponses[j]);
         //console.log('diff = ' + diff);

      }


      if (diff < totalDifference) {
        totalDifference = diff;
        matchName = friends[i].name;
        matchImg = friends[i].photo;
        // console.log(matchName);
        // console.log(matchImg);
      }
    }
    console.log(matchName);
    console.log(matchImg);


    // Add new user

    friends.push(userData);
    //res.json(friends)

     // Send response
    res.json({
      // status: 'OK',
      matchName: matchName,
      matchImg: matchImg
    });
  })

  // app.post('/api/survey', function(req,res){
  //   res.json(match);
  //
  // })

}
