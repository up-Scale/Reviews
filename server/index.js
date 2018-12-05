import express from 'express';
import bodyParser from 'body-parser';
import db from '../database-mysql/index.js';
import _ from 'underscore'
import cors from 'cors'
import path from 'path'
import React from 'react'
import { renderToString } from 'react-dom/server'

const app = express();

import App from '../react-client/src/index.jsx'


app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());
app.use(cors())

app.get('/buy/:productName', (req, res) => {
  //res.sendFile(path.resolve('react-client/dist/index.html'))
  var id = Number(req.params.productName)

  db.findReviews(id, function(err, result){
    if(err){
      console.log(err)
    }else{
      var reviews = JSON.parse(JSON.stringify(result))

      const html = renderToString(<App data={reviews} productName={id}/>);

      const initialState = {reviews, productName: id}
      var template = `<!DOCTYPE html>
<html>

<head>
  <title>DeltaDrop</title>
</head>
<body>
<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
<script>window.__initialState__ = ${JSON.stringify(initialState)}</script>

<div id="reviews">${html}</div>

<script src="/bundle.js"></script>
</body>
</html>`

      res.status(200).send(template)
    }
  })

})


//Fetch all the reviews for a productName
app.get('/api/:productName/reviews', (req, res) => {
  var id = Number(req.params.productName)
  db.findReviews(id, function(err, result){
    if(err){
      console.log(err)
    }else{
      var reviews = JSON.parse(JSON.stringify(result))
      res.status(200).send(reviews)
    }
  })

});

app.get('/buy1/:productName', (req, res) => {
  console.log(' im here ')
  //res.sendFile(path.resolve('react-client/dist/index.html'))
  var id = Number(req.params.productName)

  db.findReviews(id, function(err, result){
    if(err){
      console.log(err)
    }else{
      var reviews = JSON.parse(JSON.stringify(result))

      const html = renderToString(<App data={reviews} productName={id}/>);

      const initialState = {reviews, productName: id}
      res.status(200).send({initialState, html})
    }
  })

})


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

//Kennys DB CALL
  // db.selectAll(name)
  // .then(reviews => {
  //   console.log(reviews)
  //   res.status(200).send(reviews)
  // })
  // .catch(err => {
  //   console.log(err, ' error in get reviews in server')
  // })


