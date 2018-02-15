// *** main dependencies *** //
var express = require('express');
var http = require('http');
var bodyParser = require('body-parser')

// *** express instance *** //
var app = express();
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/fetch-rooms/:societyid', function(req, res, next){
  var response = [
  {
    "wingName": "A",
    "rooms": [
      "A-101",
      "A-102",
      "A-103"
    ]
  },
  {
    "wingName": "B",
    "rooms": [
      "B-101",
      "B-102",
      "B-103"
    ]
  }
];
  res.send(response);
});

app.listen(process.env.PORT || 3000);

