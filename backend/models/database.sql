CREATE DATABASE order_task;
use order_task;

CREATE TABLE task(
	id_task INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    id_category INT NOT NULL,
    description VARCHAR(120)
);

CREATE TABLE category(
	id_category INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

ALTER TABLE task ADD CONSTRAINT fk_task_category FOREIGN KEY (id_category) REFERENCES category (id_category) ON DELETE CASCADE ON UPDATE CASCADE;