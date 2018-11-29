var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/productReviews');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var usersSchema = mongoose.Schema({
	ID: {
		type: Number,
		unique: true,
		index: true,
	},
	userName: String,
	avatarURL: String,
	verifiedUser: Number,
	userEndorsements: Number
});

var User = mongoose.model('user', usersSchema);

var reviewsSchema = mongoose.Schema({
	ID: {
		type: Number,
		unique: true,
		index: true,
	},
	review: String,
	stars: Number,
	reviewDate: Date,
	user: { type: Number, field: "ID", ref: 'User' }
});

var Review = mongoose.model('Reviews', reviewsSchema);

var productsSchema = mongoose.Schema({
	productName: String,
	reviews: [{ type: Number, field: "ID", ref: 'Reviews' }]
});

var Product = mongoose.model('product', productsSchema);



var getProducts = function(pName, cb){
  Product.findOne({ productName: pName }).populate({path: 'reviews', model: 'Reviews' })
  .exec(function(err, results){
  	if(err){
      console.log(err);
    } else{
        cb(err, results);
    }
  })

}

module.exports.db = db;
module.exports.User = User 
module.exports.Review = Review 
module.exports.Product = Product 
module.exports.getProducts = getProducts 


