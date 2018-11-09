var faker = require('faker');
var db = require('./index.js');

var counter = 1;
var counterReivew = 1;

// function getRandomProducts() {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//     	var nameArr= [];
// 			for(var i = 0; i < 50000; i++){
// 				var randomProduct = faker.commerce.product() + counter;
// 				var miniArr = [randomProduct]
// 				nameArr.push(miniArr)
// 			 	counter++;
// 			}

// 			db.interstProductName(nameArr, function(err, result){
// 				if(err){
// 					console.log(err)
// 				}else {
// 					console.log(counter)
//         	resolve();
//       	}
// 			})
//     }, 1000);
//   }); 
// }

// async function populateProducts() {
//   for (let x = 0; x < 200; x++) {
//     console.log(await getRandomProducts());
//   }
// }

// populateProducts();

function getRandomReviews() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
    	var reviewArr = [];
			for(var i = 0; i < 10000; i++){
				var randomReview = faker.lorem.sentences();
				var randomDate = faker.date.recent();
				var randomStars = Math.floor(Math.random() * 6);
				var randomLikes = Math.floor(Math.random() * 100);
				var randomUserID = Math.floor(Math.random() * 30000000) + 1;
				var randomProductID = Math.floor(Math.random() * 10000000) + 1;
				reviewArr.push([randomReview, randomDate, randomStars, randomLikes, randomUserID, randomProductID])
			 	counterReivew++;
			}
			db.interstReview(reviewArr, function(err, result){
				if(err){
					console.log(err)
				}else {
					console.log(counterReivew)
        	resolve();
      	}
			})
    }, 1000);
  }); 
}

async function populateReviews() {
  for (let x = 0; x < 1000; x++) {
    console.log(await getRandomReviews());
  }
}

populateReviews();