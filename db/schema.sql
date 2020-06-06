DROP DATABASE IF EXISTS book_club;

CREATE DATABASE book_club;

USE book_club; 

CREATE TABLE clubs (
id int AUTO_INCREMENT NOT NULL,
clubName VARCHAR(30) NOT NULL,
clubCreator VARCHAR(30) NOT NULL,
description VARCHAR (500) NOT NULL,
currentlyReading VARCHAR (30),
currentImgUrl VARCHAR (500),
currentAuthor VARCHAR (30),
PRIMARY KEY(id)
);

INSERT INTO clubs (clubName, clubCreator, description, currentlyReading, currentImgUrl, currentAuthor)
VALUES ("Club One", "Joy Chen", "This club reads mostly science fiction and fantasy books! If you like a good adventure, this club would be the one to join. We meet every Thursday at 7pm.", "The Girl With All The Gifts","http://books.google.com/books/content?id=PYCxAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api","M. R. Carey");
INSERT INTO clubs (clubName, clubCreator, description, currentlyReading, currentImgUrl, currentAuthor)
VALUES ("Club Two", "Lauren Cameron", "This club reads adult fiction books. If you enjoy realistic stories and curling up with a good book, this would be the club to join. We meet every Tuesday at 5pm.", "Little Fires Everywhere", "http://books.google.com/books/content?id=GI-RDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api", "Celeste Ng");
INSERT INTO clubs (clubName, clubCreator, description, currentlyReading, currentImgUrl, currentAuthor)
VALUES ("Club Three", "Cate Dunn", "This club reads a lot of mystery and thrillers. If you enjoy books that keep you on the edge of your seat, this is the club for you. We meet every Monday at 6pm.", "The Girl on the Train", "http://books.google.com/books/content?id=Udv-AwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api", "Paula Hawkins");
INSERT INTO clubs (clubName, clubCreator, description, currentlyReading, currentImgUrl, currentAuthor)
VALUES ("Club Four", "Tiffany Casey", "This club explores the romantic in everyone with the next new romance. If you enjoy falling in love over and over again, this is the club for you. We meet every Wednesday at 7pm.", "Red Lily","http://books.google.com/books/content?id=1ejJBbmGtvAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api","Nora Roberts");



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