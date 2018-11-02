const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database-mongo');
const app = express();
const _ = require('underscore');
const cors = require('cors')


app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());
app.use(cors())

app.get('/buy/:productname/reviews', (req, res) => {
  let name = req.params.productname
  db.selectAll(name)
  .then(reviews => {
    res.status(200).send(reviews)
  })
  .catch(err => {
    console.log(err, ' error in get reviews in server')
  })
});

app.post('/buy/:productname/reviews/search', (req, res) => {
  let name = req.body.name
  let term = req.body.term.toLowerCase()

  db.selectAll(name)
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

  db.selectAll(req.body.name)
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
  let name = req.body.name
  let userId = req.body.userId
  db.updateLikes(name, newLikes, userId)
  .then(reviews => {
    res.status(200).send(reviews)
  })
  .catch(err => {
    console.log(err, ' error in get reviews in server')
  })
})

app.post('/buy/:productname/reviews/replies', (req, res) => {
  let userId = req.body.userId;
  let reply = req.body.reply;
  let name = req.body.name;
  db.addReplytoReview(name, userId, reply)
  .then(success => { res.status(201).send()})
  .catch(err => { console.log(err, ' error in post to replies')})

})



app.listen(3002, function(err) {
  if (err) { db.close()}
  else console.log('listening on port 3002!');
});

