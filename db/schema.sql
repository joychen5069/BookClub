DROP DATABASE IF EXISTS book_club;

CREATE DATABASE book_club;

USE book_club; 

CREATE TABLE clubs (
id int AUTO_INCREMENT NOT NULL,
clubName VARCHAR(30) NOT NULL,
clubCreator VARCHAR(30) NOT NULL,
description VARCHAR (500) NOT NULL,
currentlyReading VARCHAR (30),
PRIMARY KEY(id)
);

INSERT INTO clubs (clubName, clubCreator, description, currentlyReading)
VALUES ("Club One", "Joy Chen", "This is a really cool club", "Big Little Lies");
INSERT INTO clubs (clubName, clubCreator, description, currentlyReading)
VALUES ("Club Two", "Lauren Cameron", "This is an awesome club", "Little Fires Everywhere");
INSERT INTO clubs (clubName, clubCreator, description, currentlyReading)
VALUES ("Club Three", "Cate Dunn", "This is a fun club", "Where the Crawdads Sing");
INSERT INTO clubs (clubName, clubCreator, description, currentlyReading)
VALUES ("Club Four", "Tiffany Casey", "This is an amazing club", "Untamed");

CREATE TABLE books (
id int AUTO_INCREMENT NOT NULL,
clubId Int(15) NOT NULL,
nytRank Int(25) NOT NULL,
amazon VARCHAR(100) NOT NULL,
title VARCHAR(100) NOT NULL,
author VARCHAR(50) NOT NULL,
description VARCHAR(25) NOT NULL,
img VARCHAR(200) NOT NULL,
PRIMARY KEY(id)
);
