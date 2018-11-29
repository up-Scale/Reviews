DROP DATABASE IF EXISTS reviews;

CREATE DATABASE  

USE reviews;

CREATE TABLE products (
	id INT(11) AUTO_INCREMENT NOT NULL, 
	productName VARCHAR(50) UNIQUE,
	PRIMARY KEY(`id`)
);

CREATE TABLE users (
	id INT(11) AUTO_INCREMENT NOT NULL,
	userName VARCHAR(50),
	avatarURL VARCHAR(100),
	verifiedUser INT(11),
	userEndorsements INT(11),
	PRIMARY KEY(`id`)
);

CREATE TABLE allReview (
	id INT(11) AUTO_INCREMENT NOT NULL, 
	review VARCHAR(5000),
	reviewDate DATE,
	stars INT(11),
	likes INT(11),
	user_id INT(11),
	product_id INT(11),
	PRIMARY KEY(`id`)
);


ALTER TABLE `allReview` ADD INDEX `product_id`(`product_id`);
ALTER TABLE `allReview` ADD FOREIGN KEY(user_id) REFERENCES `users`(`id`);
ALTER TABLE `allReview` ADD FOREIGN KEY(product_id) REFERENCES `products`(`id`);


 -- mysql -u root -p -h ec2-3-16-167-188.us-east-2.compute.amazonaws.com reviews


