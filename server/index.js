const express = require('express');
const bodyParser = require('body-parser');
const {selectAll} = require('../database-mongo');
const app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());

app.get('/items', function (req, res) {
  selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(3002, function() {
  console.log('listening on port 3002!');
});

