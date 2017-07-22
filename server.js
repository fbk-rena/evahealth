var express = require('express');
var app = express();

app.use("/static", express.static(__dirname + '/node_modules'));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/public/index.html")
});

app.listen(1506);
