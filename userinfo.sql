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