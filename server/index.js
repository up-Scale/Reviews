const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database-mongo');
const app = express();
const _ = require('underscore');
const cors = require('cors')
const path = require('path')


app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());
app.use(cors())

app.get('/buy/:productName', (err, res) => {
  res.sendFile(path.resolve('react-client/dist/index.html'))
})


//Fetch all the reviews for a productName
app.get('/api/:productName/reviews', (req, res) => {
  var name = req.params.productName
  db.selectAll(name)
  .then(reviews => {
    res.status(200).send(reviews)
  })
  .catch(err => {
    console.log(err, ' error in get reviews in server')
  })
});


//Search specific terms in all the reviews for a productName
app.post('/api/:productName/reviews/search', (req, res) => {
  var name = req.body.name
  var term = req.body.term.toLowerCase()

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

app.post('/api/:productname/reviews/sort', (req, res) => {

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

app.put('/api/:productname/reviews', (req, res) => {
  var newLikes = req.body.likes
  var name = req.body.name
  var userId = req.body.userId
  db.updateLikes(name, newLikes, userId)
  .then(reviews => {
    res.status(200).send(reviews)
  })
  .catch(err => {
    console.log(err, ' error in get reviews in server')
  })
})

app.post('/api/:productname/reviews/replies', (req, res) => {
  var userId = req.body.userId;
  var reply = req.body.reply;
  var name = req.body.name;
  db.addReplytoReview(name, userId, reply)
  .then(success => { res.status(201).send()})
  .catch(err => { console.log(err, ' error in post to replies')})

})



app.listen(3002, function(err) {
  if (err) {console.log(err, 'error in listen')}
  else console.log('listening on port 3002!');
});

