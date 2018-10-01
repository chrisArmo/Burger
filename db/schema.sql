-- Burger Database
CREATE DATABASE burger_www
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE burger_www;

-- Burger Table
CREATE TABLE burger (
	id INT(11) PRIMARY KEY AUTO_INCREMENT,
	burger_name VARCHAR(70) NOT NULL,
	devoured BOOL DEFAULT false
);

-- Index burger_name
ALTER TABLE burger
ADD INDEX(burger_name);