var countTo10 = function() {
  var arr = [];
  var i = 1;
  for (i = 1; i <= 10; i++) { arr.push(i) }
  return arr; 
};

var express = require('express');

var app = express.createServer(express.logger());

var buf;

app.get('/', function(request, response) {
  fs.readFile('index.html', function(err, data) {
    if (err) throw err;
    buf = new Buffer(256);
    len = buf.write(data, 0);
    console.log(len);
  });
  //response.send('Welcome to my humble abode, suburls: count, tamil');
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
