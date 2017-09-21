var express = require('express');

var app = express();
// Looks for port in the enviroment defaults to 3000 if not found.
var port = process.env.PORT || 3000;


app.get('/',function(req, res){
  res.send('Welcome to my API!');
});

app.listen(port, function(){
  console.log('Running on PORT: ' + port);
});
