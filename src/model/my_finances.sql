DROP DATABASE IF EXISTS my_finances;
CREATE DATABASE my_finances;
USE my_finances;

CREATE TABLE tbUser
(user_id INT,
user_name VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL,
password VARCHAR(100) NOT NULL,
PRIMARY KEY (user_id)
);