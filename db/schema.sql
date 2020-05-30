DROP DATABASE IF EXISTS book_club;

CREATE DATABASE book_club;

USE book_club; 

CREATE TABLE clubs (
id int AUTO_INCREMENT NOT NULL,
clubName VARCHAR(30) NOT NULL,
PRIMARY KEY(id)
);

INSERT INTO clubs (clubName)
VALUES ("Club One");
INSERT INTO clubs (clubName)
VALUES ("Club Two");
INSERT INTO clubs (clubName)
VALUES ("Club Three");

CREATE TABLE books (
id int AUTO_INCREMENT NOT NULL,
clubId Int(15) NOT NULL,
currentRank Int(25) NOT NULL,
amazonURL VARCHAR(100) NOT NULL,
title VARCHAR(100) NOT NULL,
author VARCHAR(50) NOT NULL,
description VARCHAR(25) NOT NULL,
image VARCHAR(200) NOT NULL,
PRIMARY KEY(id)
);
