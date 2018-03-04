var friends = require('../data/friends');


module.exports = function(app) {

  app.get('/api/friends', function(req,res){

    res.json(friends)
  })


app.post('/api/friends', function(req,res,){

  //Capture user input from survey
   var userData = req.body;
    //Capture user scores
  var userResponses = userData;
  var matchName = '';
  var matchImg = '';
  var totalDifference = 10000;


  //  console.log(friends[i].scores);
    //console.log(req.body);

       // for (var j=0;j < userResponses.length; j++){
       //  diff += Math.abs(friends[i].scores[j] - userResponses[j]);
       // console.log(diff);
      // friends.push(userData);
      // res.json(friends)
  //  friends.push(userData);
  console.log(userResponses)
    console.log(userData);
    // console.log(friends);

      //
      //   if (diff< totalDifference){
      //     totalDifference = diff;
			// 	  matchName = friends[i].name;
			// 	  matchImage = friends[i].photo;
      //   }



// Add new user
		// friends.push(userData);
    //
		// // Send appropriate response
		// res.json({status: 'OK', matchName: matchName, matchImg: matchImg});
})
  }
