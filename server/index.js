const express = require('express');
const bodyParser = require('body-parser');
const {selectAll, addReplytoReview} = require('../database-mongo');
const app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());

app.get('/reviews', function (req, res) {
  selectAll()
  .then(reviews => {
    res.status(200).send(reviews)
  })
  .catch(err => {
    console.log(err, ' error in get reviews')
  })
});

app.post('/replies', function (req, res){
  console.log(req.body);
  var id = req.body.id;
  var reply = req.body.reply
  addReplytoReview(id, reply)
  .then(success => { res.status(201).send()})
  .catch(err => { console.log(err, ' error in post to replies')})

})


app.listen(3002, function() {
  console.log('listening on port 3002!');
});

