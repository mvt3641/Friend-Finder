var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


//Creating an express server
var app = express();

var PORT = process.env.PORT || 4100;


//Sets up express to handle data parsing
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

  // require('./app/routing/apiRoutes')
  // require('./app/routing/htmlRoutes')
  // var apiRoutes = require('./app/routing/apiRoutes');
   var htmlRoutes = require('./app/routing/htmlRoutes');
   app.use(htmlRoutes, '/htmlRoutes');

 //Listener

 app.listen(PORT,function(){
   console.log("App listening on PORT: " +PORT)
 })
