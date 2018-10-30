const express = require('express');
const bodyParser = require('body-parser');
const {selectAll, addReplytoReview, updateLikes, db} = require('../database-mongo');
const app = express();
const _ = require('underscore');


app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());

app.get('/buy/:productname/reviews', (req, res) => {
  let id = req.query['0']
  selectAll(id)
  .then(reviews => {
    res.status(200).send(reviews)
  })
  .catch(err => {
    console.log(err, ' error in get reviews in server')
  })
});

app.post('/buy/:productname/reviews/search', (req, res) => {
  let id = req.body.id
  let term = req.body.term.toLowerCase()

  selectAll(id)
  .then(reviews => {
    results = [];
    reviews.forEach(review => {
      if (review.review.toLowerCase().includes(term)){
        results.push(review);
      }
    })
    res.status(200).send(results);
  })
  .catch(err => {
    console.log(err, ' error in post reviews by search in server')
  })
});

app.post('/buy/:productname/reviews/sort', (req, res) => {

  selectAll(req.body.id)
  .then(reviews => {
    if(req.body.option === 'NEWEST'){
      res.status(200).send(_.sortBy(reviews, 'reviewDate').reverse())
  
    }
    if(req.body.option === 'HIGHEST RATED'){
      res.status(200).send(_.sortBy(reviews, 'stars').reverse())
    }
    if(req.body.option === 'LOWEST RATED'){
      res.status(200).send(_.sortBy(reviews, 'stars'))
    }
    if(req.body.option === 'TOP REVIEWS'){
      res.status(200).send(_.sortBy(reviews, 'likes').reverse())
    }
  })
  .catch(err => { console.log(err, ' error in post to sort')})
})

app.put('/buy/:productname/reviews', (req, res) => {
  let newLikes = req.body.likes
  let id = req.body.id
  let userId = req.body.userId
  updateLikes(id, newLikes, userId)
  .then(reviews => {
    res.status(200).send(reviews)
  })
  .catch(err => {
    console.log(err, ' error in get reviews in server')
  })
})

app.post('/buy/:productname/replies', (req, res) => {
  console.log(req.body);
  var id = req.body.id;
  var reply = req.body.reply
  addReplytoReview(id, reply)
  .then(success => { res.status(201).send()})
  .catch(err => { console.log(err, ' error in post to replies')})

})



app.listen(3002, function(err) {
  if (err) { db.close()}
  else console.log('listening on port 3002!');
});

