var countTo10 = function() {
  var arr = [];
  var i = 1;
  for (i = 1; i <= 10; i++) { arr.push(i) }
  return arr; 
};

var express = require('express');

var buf;
var app = express.createServer(express.logger());

var contents;
var fs = require('fs');

app.get('/', function(request, response) {
  buf = fs.readFileSync('index.html');
  contents = buf.toString();
  response.send(contents);
});

app.get('/count', function(request, response) {
  var arr = countTo10();
  response.send(arr.join(" "));
});

app.get('/tamil', function(request, response) {
  buf = fs.readFileSync('tamil.html');
  contents = buf.toString();
  response.send(contents);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
