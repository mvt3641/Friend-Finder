// var path = require('path');
// var express = require('express');



exports.htmlRoutes = function(){

  app.get('/home', function(req,res){
    res.send("testing");
    res.sendFile(path.join(__dirname, "..app/public/home.html"));
  })

app.get('/survey', function(req, res){
  res.sendFile(path.join(__dirname, "..app/public/survey.html"))
})
};
