DROP DATABASE IF EXISTS adaptive_traveler;
CREATE DATABASE adaptive_traveler;

USE adaptive_traveler;

CREATE TABLE user (
`user_id` int (20) NOT NULL AUTO_INCREMENT,
`user_email` varchar(255) NOT NULL,
`user_password` varchar(255) NOT NULL,
`user_firstname` text NOT NULL,
`user_lastname` text NOT NULL,
`user_avatar` varchar(255) NOT NULL,
`user_bio` text,
`user_username` varchar(255) NOT NULL,
`user_country` varchar(255) DEFAULT NULL,
PRIMARY KEY (`user_id`),
UNIQUE KEY `user_email` (`user_email`),
UNIQUE KEY `user_username` (`user_username`)                                                       

) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1480 ;

CREATE TABLE locations (
city_id INT AUTO_INCREMENT NOT NULL,
city_name varchar(50) NOT NULL,
state_name varchar(50) NOT NULL,
country_name varchar(50) NOT NULL,
PRIMARY KEY (`city_id`)
);

INSERT INTO locations (city_id, city_name, state_name, country_name)
VALUES 	(001, 'Berlin', 'Berlin', 'Germany'),
		(002, 'Hangzhou', 'Zhejiang', 'China'),
		(003, 'Topeka', 'Kansas', 'USA'),
		(004, 'Tokyo', 'Tokyo', 'Japan'),
		(005, 'Bangkok', 'Bangkok', 'Thailand'),
		(006, 'Manila', 'Manila Metropolitan Region', 'Philippines'),
		(007, 'Paris', 'Ile-de-France', 'France'),
		(008, 'Rome', 'Lazio', 'Italy'),
		(009, 'Los Angeles', 'California', 'USA'),
		(0010, 'Amsterdam', 'North Holland', 'Netherlands')






