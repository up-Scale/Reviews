var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'reviews'
});

var interstProductName = function(randProductName, callback) {
	console.log(randProductName)
  var sql =  'INSERT INTO products (productName) VALUES ?'
  connection.query(sql, [randProductName], function(err, results) {
    if(err) {
      throw new Error("Error in DB insert", err)
    } else {
      callback(null, results);
    }
  });
};

var interstReview = function(reviewArr, callback) {
	console.log(reviewArr)
  var sql =  'INSERT INTO allReview (review, reviewDate, stars, likes ,user_id, product_id) VALUES ?'
  connection.query(sql, [reviewArr], function(err, results) {
    if(err) {
    	callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports.connection = connection;
module.exports.interstProductName = interstProductName;
module.exports.interstReview = interstReview;