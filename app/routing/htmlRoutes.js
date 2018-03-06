 var path = require('path');
// var express = require('express');



module.exports = function(app){

  app.get('/', function(req, res){
    //res.send("Home Page");
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

app.get('/survey', function(req, res){
  //res.send("Survey Page");
  res.sendFile(path.join(__dirname, "../public/survey.html"))
})

app.get('*', function(req,res){
  res.sendFile(path.join(__dirname,"../public/home.html"));
})
};
