var mysql = require('mysql');
var aws = require('../config.js');

var pool = mysql.createPool({
  connectionLimit: 40,
  host     : aws.amazonHost,
  user     : 'root',
  password : aws.amazonPass,
  database : 'reviews'
});



var findReviews = function(pid, callback) {

  pool.getConnection(function(err, connection){
    if(err){
      callback(err)
    }else{
      var sql =  'SELECT* from allReview INNER JOIN users ON allReview.user_id = users.id WHERE product_id = ?'
      connection.query(sql, [pid], function(err, results) {
        if(err) {
          callback(err, null);
        } else {
          callback(null, results);
        }
        connection.release();
      });
    }
  })
};


module.exports.pool = pool;
module.exports.findReviews = findReviews;


// var interstProductName = function(randProductName, callback) {
//   var sql =  'INSERT INTO products (productName) VALUES ?'
//   connection.query(sql, [randProductName], function(err, results) {
//     if(err) {
//       throw new Error("Error in DB insert", err)
//     } else {
//       callback(null, results);
//     }
//   });
// };

// var interstReview = function(reviewArr, callback) {
//   var sql =  'INSERT INTO allReview (review, reviewDate, stars, likes ,user_id, product_id) VALUES ?'
//   connection.query(sql, [reviewArr], function(err, results) {
//     if(err) {
//       callback(err, null);
//     } else {
//       callback(null, results);
//     }
//   });
// };


// var interstUsers = function(userArr, callback) {
//   var sql =  'INSERT INTO users (userName, avatarURL, verifiedUser, userEndorsements) VALUES ?'
//   connection.query(sql, [userArr], function(err, results) {
//     if(err) {
//       callback(err, null);
//     } else {
//       callback(null, results);
//     }
//   });
// };

// module.exports.interstProductName = interstProductName;
// module.exports.interstReview = interstReview;
// module.exports.interstUsers = interstUsers;