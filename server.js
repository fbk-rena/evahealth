var express = require('express');
var app = express();

app.use("/static", express.static(__dirname + '/node_modules'));
app.use("/assets", express.static(__dirname + '/assets'));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html")
});

app.listen(1506);
