var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reviews')
mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var reviewSchema = mongoose.Schema({
  productId: Number,
  avatarUrl: String,
  username: String,
  userEndorsements: Number,
  verifiedUser: Boolean,
  reviewDate: Date, // might need to look up moment js or convert this to BSON, look at mongo docs.
  stars: Number,
  review: String,
  likes: Number,
  replies: Array,
});

var Review = mongoose.model('Review', reviewSchema);

var Luffy1 = Review.find({username: 'StrawHatCaptain1'}, (err, docs) =>{
  if (docs.length === 0 || err){
    new Review({
      productId: 1,
      avatarUrl: 'https://myanimelist.cdn-dena.com/images/characters/9/310307.jpg',
      username: 'StrawHatCaptain1',
      userEndorsements: 54,
      verfiedUser: true,
      reviewDate: new Date(),
      stars: 1,
      review: 'NOT Very Useful for my rubbery texture, was able to get gear 4 off and conquer opposing pirates. My crew also seem to enjoy it. Made it much easier for us to locate the one piece.',
      likes: 121,
      replies: [],
    })
    .save((err)=> {
      if (err) console.log(err, 'error in creating dummy Luffy1 data')
      else console.log('Luffy1 review saved.')
    })
  } else {
    console.log('Luffy1 was already created')
  }
})

var Luffy2 = Review.find({username: 'StrawHatCaptain2'}, (err, docs) =>{
  if (docs.length === 0 || err){
    new Review({
      productId: 2,
      avatarUrl: 'https://myanimelist.cdn-dena.com/images/characters/9/310307.jpg',
      username: 'StrawHatCaptain2',
      userEndorsements: 55,
      verfiedUser: true,
      reviewDate: new Date(),
      stars: 2,
      review: 'NOT Very Useful for my rubbery texture, was able to get gear 4 off and conquer opposing pirates. My crew also seem to enjoy it. Made it much easier for us to locate the one piece.',
      likes: 122,
      replies: [],
    })
    .save((err)=> {
      if (err) console.log(err, 'error in creating dummy Luffy2 data')
      else console.log('Luffy2 review saved.')
    })
  } else {
    console.log('Luffy2 was already created')
  }
})

var Luffy3 = Review.find({username: 'StrawHatCaptain3'}, (err, docs) =>{
  if (docs.length === 0 || err){
    new Review({
      productId: 3,
      avatarUrl: 'https://myanimelist.cdn-dena.com/images/characters/9/310307.jpg',
      username: 'StrawHatCaptain3',
      userEndorsements: 56,
      verfiedUser: true,
      reviewDate: new Date(),
      stars: 3,
      review: ' SEMI Useful for my rubbery texture, was able to get gear 4 off and conquer opposing pirates. My crew also seem to enjoy it. Made it much easier for us to locate the one piece.',
      likes: 123,
      replies: [],
    })
    .save((err)=> {
      if (err) console.log(err, 'error in creating dummy Luffy3 data')
      else console.log('Luffy3 review saved.')
    })
  } else {
    console.log('Luffy3 was already created')
  }
})

var Luffy4 = Review.find({username: 'StrawHatCaptain4'}, (err, docs) =>{
  if (docs.length === 0 || err){
    new Review({
      productId: 4,
      avatarUrl: 'https://myanimelist.cdn-dena.com/images/characters/9/310307.jpg',
      username: 'StrawHatCaptain4',
      userEndorsements: 57,
      verfiedUser: true,
      reviewDate: new Date(),
      stars: 4,
      review: 'Useful for my rubbery texture, was able to get gear 4 off and conquer opposing pirates. My crew also seem to enjoy it. Made it much easier for us to locate the one piece.',
      likes: 124,
      replies: [],
    })
    .save((err)=> {
      if (err) console.log(err, 'error in creating dummy Luffy4 data')
      else console.log('Luffy4 review saved.')
    })
  } else {
    console.log('Luffy4 was already created')
  }
})

var Luffy5 = Review.find({username: 'StrawHatCaptain5'}, (err, docs) =>{
  if (docs.length === 0 || err){
    new Review({
      productId: 5,
      avatarUrl: 'https://myanimelist.cdn-dena.com/images/characters/9/310307.jpg',
      username: 'StrawHatCaptain5',
      userEndorsements: 58,
      verfiedUser: true,
      reviewDate: new Date(),
      stars: 5,
      review: 'Very Useful for my rubbery texture, was able to get gear 4 off and conquer opposing pirates. My crew also seem to enjoy it. Made it much easier for us to locate the one piece.',
      likes: 125,
      replies: [],
    })
    .save((err)=> {
      if (err) console.log(err, 'error in creating dummy Luffy5 data')
      else console.log('Luffy5 review saved.')
    })
  } else {
    console.log('Luffy5 was already created')
  }
})



var Naruto1 = Review.find({username: 'HiddenLeafHokage7'}, (err, docs) =>{
  if (docs.length === 0 || err){
    new Review({
      productId: 1,
      avatarUrl: 'https://occ-0-990-987.1.nflxso.net/art/29105/05d2c6d0d5d613e28e8dd02baec10a7298729105.jpg',
      username: 'HiddenLeafHokage7',
      userEndorsements: 9,
      verfiedUser: true,
      reviewDate: new Date(),
      stars: 3.5,
      review: 'Not Very Useful for my village, and for Kurama the nine-tail fox, he was pretty upset about it, more than he originally is. Sasuke saw it and disappeared again and Sakura almost hit me for getting this. All in all not the best purchase I made, but I\'m satisfied.',
      likes: 99,
      replies: [],
    })
    .save((err)=> {
      if (err) console.log(err, 'error in creating dummy Naruto1 data')
      else console.log('Naruto1 review saved.')
    })
  } else {
    console.log('Naruto1 was already created')
  }
})

var Naruto2 = Review.find({username: 'HiddenLeafHokage8'}, (err, docs) =>{
  if (docs.length === 0 || err){
    new Review({
      productId: 2,
      avatarUrl: 'https://occ-0-990-987.1.nflxso.net/art/29105/05d2c6d0d5d613e28e8dd02baec10a7298729105.jpg',
      username: 'HiddenLeafHokage8',
      userEndorsements: 10,
      verfiedUser: true,
      reviewDate: new Date(),
      stars: 2.5,
      review: 'Not Very Useful for my village, and for Kurama the nine-tail fox, he was pretty upset about it, more than he originally is. Sasuke saw it and disappeared again and Sakura almost hit me for getting this. All in all not the best purchase I made, but I\'m satisfied.',
      likes: 100,
      replies: [],
    })
    .save((err)=> {
      if (err) console.log(err, 'error in creating dummy Naruto2 data')
      else console.log('Naruto2 review saved.')
    })
  } else {
    console.log('Naruto2 was already created')
  }
})

var Naruto3 = Review.find({username: 'HiddenLeafHokage9'}, (err, docs) =>{
  if (docs.length === 0 || err){
    new Review({
      productId: 3,
      avatarUrl: 'https://occ-0-990-987.1.nflxso.net/art/29105/05d2c6d0d5d613e28e8dd02baec10a7298729105.jpg',
      username: 'HiddenLeafHokage9',
      userEndorsements: 11,
      verfiedUser: true,
      reviewDate: new Date(),
      stars: 4.5,
      review: 'Not Very Useful for my village, and for Kurama the nine-tail fox, he was pretty upset about it, more than he originally is. Sasuke saw it and disappeared again and Sakura almost hit me for getting this. All in all not the best purchase I made, but I\'m satisfied.',
      likes: 101,
      replies: [],
    })
    .save((err)=> {
      if (err) console.log(err, 'error in creating dummy Naruto3 data')
      else console.log('Naruto3 review saved.')
    })
  } else {
    console.log('Naruto3 was already created')
  }
})


var Midoriya = Review.find({username: 'MyHeroMidoriya'}, (err, docs) =>{
  if (docs.length === 0 || err){
      new Review({
      productId: 1,
      avatarUrl: 'http://st.cdjapan.co.jp/pictures/l/06/48/THCA-60099.jpg',
      username: 'MyHeroMidoriya',
      userEndorsements: 20,
      verfiedUser: true,
      reviewDate: new Date(),
      stars: 1.5,
      review: 'Not Useful for my class 1-A, and sensei was pretty upset about it, more than he originally is. Bakugo saw it and started blowing things up again and Uraraka almost floated me towards the moon for even thinking about purchasing this. Not the best purchase I made, and I\'ll never make this mistake again, sorry All Might!',
      likes: 20,
      replies: [],
    })
    .save((err)=> {
      if (err) console.log(err, 'error in creating dummy Midoriya data')
      else console.log('Midoriya review saved.')
    })
  } else {
    console.log('Midoriya was already created')
  }
})

var selectAll = function(id) {
  return Review.find({productId: id}) 
  .then(reviews => {
    return reviews
  })
  .catch(err => {
    console.log(err, 'error in selectAll function in db')
  })
};

var addReplyToReview = function (userId, reply){
  return Review.findOneAndUpdate({
    _id: userId,
    productId: 1,
  }, {
    $push: {
      replies: reply,
    }
  })
  .then(()=> {
    console.log('Reply added!')
  })
  .catch(err => { console.log(err, ' err in addReplytoReview')}) 
};

var updateLikes = function (id, newLikes, userId){
  return Review.findOneAndUpdate({
    _id: userId,
    productId: id,
  }, {
    $set: {
      likes: newLikes
    }
  })
  .catch(err => console.log(err, ' err in updateLikes db'))
}

module.exports = {
  selectAll : selectAll,
  addReplytoReview: addReplyToReview,
  updateLikes: updateLikes,
  db: db 
}

