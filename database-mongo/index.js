var mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost/test', {
  useMongoClient: true,
});

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var reviewSchema = mongoose.Schema({
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

var Luffy = new Review({
  avatarUrl: 'https://myanimelist.cdn-dena.com/images/characters/9/310307.jpg',
  username: 'StrawHatCaptain1',
  userEndorsements: 54,
  verfiedUser: true,
  reviewDate: new Date(),
  stars: 5,
  review: 'Very Useful for my rubbery texture, was able to get gear 4 off and conquer opposing pirates. My crew also seem to enjoy it. Made it much easier for us to locate the one piece.',
  likes: 124,
  replies: [],
})

Luffy.save((err)=> {
  if (err) console.log(err, 'error in creating dummy Luffy data')
  else console.log('Luffy review saved.')
})

var Naruto = new Review({
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

Naruto.save((err)=> {
  if (err) console.log(err, 'error in creating dummy Naruto data')
  else console.log('Naruto review saved.')
})

var Midoriya = new Review({
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

Midoriya.save((err)=> {
  if (err) console.log(err, 'error in creating dummy Midoriya data')
  else console.log('Midoriya review saved.')
})

var selectAll = function() {
  Review.find({}) 
  .then(reviews => {
    return reviews
  })
  .catch(err => {
    console.log(err, 'error in selectAll function in db')
  })
};

var addReplyToReview = function (id, reply){
  Review.findOneAndUpdate({
    id: id,
  }, {
    $push: {
      replies: reply,
    }
  })
  .save()
  .then(()=> {
    console.log('Reply added!')
  })
  .catch(err => { console.log(err, ' err in addReplytoReview')}) 
};

module.exports = {
  selectAll : selectAll,
  addReplytoReview: addReplyToReview
}