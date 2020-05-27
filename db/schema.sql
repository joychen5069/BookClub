DROP DATABASE IF EXISTS book_club;

CREATE DATABASE book_club;

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