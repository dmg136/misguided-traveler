var countTo10 = function() {
  var arr = [];
  var i = 1;
  for (i = 1; i <= 10; i++) { arr.push(i) }
  return arr; 
};

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Welcome to my humble abode');
});

app.get('/count', function(request, response) {
  var arr = countTo10();
  response.send(arr.join(" "));
});

app.get('/tamil', function(request, response) {
  response.write("Hello!");
  response.end();
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
