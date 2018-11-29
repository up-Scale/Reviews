var db = require('./index.js')
var faker = require('faker');


// var counterUsers = 1;

// function getRandomUsers() {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//     	var usersArr = [];
// 			for(var i = 0; i < 10000; i++){
// 				var obj = {
// 					ID: counterUsers,
// 					userName: faker.internet.userName() + counterUsers,
// 					avatarURL:faker.internet.avatar(),
// 					verifiedUser: faker.random.boolean(),
// 					userEndorsements: faker.random.number(),
// 				}
// 				usersArr.push(obj)
// 			 	counterUsers++;
// 			}
// 			console.log(usersArr)
// 			db.User.insertMany(usersArr, function(err, res) {
// 		    if(err){
// 		    	console.log(err);
// 		    } else{
// 		    	console.log(counterUsers);
// 		    	resolve();
// 		    }
// 		  })
//     }, 1000);
//   }); 
// }


// async function populateUsers() {
//   for (let x = 0; x < 100; x++) {
//     console.log(await getRandomUsers());
//   }
// }

// populateUsers();

// function randUser(){
// 	return new Promise((resolve, reject) => {
// 		db.User.count().exec(function (err, count) {
// 	  var random = Math.floor(Math.random() * count)
// 	  db.User.findOne().skip(random).exec(
// 	    function (err, result) {
// 	      resolve(result)
// 	    })
// 		})
// 	})
// }

// var counterReviews = 1;

// function getRandomReviews(id) {
//   return new Promise(function(resolve, reject) {

//   	var reviewsArr = [];
// 		for(var i = 0; i < 1000; i++){
// 			var obj = {
// 				ID: counterReviews,
// 				review: faker.lorem.sentences(),
// 				stars: Math.floor(Math.random() * 6),
// 				reviewDate: faker.date.recent(),
// 				user: Math.floor(Math.random() * 1000001) 
// 			}
// 			reviewsArr.push(obj)
// 		 	counterReviews++;
// 		}
// 		console.log(reviewsArr)
// 		db.Review.insertMany(reviewsArr, function(err, res) {
// 	    if(err){
// 	    	console.log(err);
// 	    } else{
// 	    	console.log(counterReviews);
// 	    	resolve();
// 	    }
// 	  }) 
//   }); 
// }


// async function populateReviews() {
//   for (let x = 0; x < 25000; x++) {
//     await getRandomReviews();
//   }
// }

// populateReviews();

// var counterProduct = 1;

// function getRandomProducts(id) {
//   return new Promise(function(resolve, reject) {

//   	var productsArr = [];
// 		for(var i = 0; i < 1000; i++){
// 			var ReviewsID = [Math.floor(Math.random() * 25000001), Math.floor(Math.random() * 25000001), Math.floor(Math.random() * 25000001), Math.floor(Math.random() * 25000001) ];
// 			var obj = {
// 				productName: faker.commerce.product() + counterProduct,
// 				reviews: ReviewsID
// 			}
// 			productsArr.push(obj)
// 		 	counterProduct++;
// 		}
// 		db.Product.insertMany(productsArr, function(err, res) {
// 	    if(err){
// 	    	console.log(err);
// 	    } else{
// 	    	resolve();
// 	    }
// 	  }) 
//   }); 
// }


// async function populateProducts() {
// 	console.time('Start')
//   for (let x = 0; x < 10000; x++) {
//     await getRandomProducts();
//   }
//   console.timeEnd('Start')
// }

// populateProducts();



