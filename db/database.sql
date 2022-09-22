CREATE DATABASE IF NO EXISTS companydb;

USE companydb;

CREATE TABLE employee(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    lastname VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE employee;

INSERT INTO employee VALUES
(1, "Ruben", "Guzman", 1300),
(2, "Tito", "El gatito", 800),
(3, "Pepito", "Perez", 900),
(4, "Jhon", "Doe", 500);