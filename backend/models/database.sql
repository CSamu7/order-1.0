CREATE DATABASE order_task;
use order_task;

CREATE TABLE `user` (
  `id_user` int NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` tinyblob NOT NULL,
  `id_role` int NOT NULL,
  PRIMARY KEY (`id_user`),
  KEY `fk_user_role` (`id_role`),
  CONSTRAINT `fk_user_role` FOREIGN KEY (`id_role`) REFERENCES `role` (`id_role`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `role` (
  `id_role` int NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  PRIMARY KEY (`id_role`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `category` (
  `id_category` int NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  PRIMARY KEY (`id_category`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `task` (
  `id_task` int NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL,
  `id_category` int NOT NULL,
  `id_user` int NOT NULL,
  `description` varchar(120) DEFAULT NULL,
  PRIMARY KEY (`id_task`),
  KEY `fk_task_category` (`id_category`),
  KEY `fk_task_user` (`id_user`),
  CONSTRAINT `fk_task_category` FOREIGN KEY (`id_category`) REFERENCES `category` (`id_category`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_task_user` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*DATA*/

use order_task;

INSERT INTO role (name) VALUES ("user");
INSERT INTO role (name) VALUES ("admin");

INSERT INTO user (username, email, password, id_role) 
	VALUES ("csamu", "samuel.pdg@hotmail.com", aes_encrypt("123", "rootuser12$"), 2);
    
INSERT INTO user (username, email, password, id_role) 
	VALUES ("juanito", "juanito@hotmail.com", aes_encrypt("1234", "rootuser12$"), 1);
    
INSERT INTO category(name) VALUES ("Personal");
INSERT INTO category(name) VALUES ("Escuela");

INSERT INTO task(title, id_category, id_user, description) 
	VALUES ("Estudiar Node", 1, 1, "Estudiar como autenticar personas");
    
INSERT INTO task(title, id_category, id_user, description) 
	VALUES ("Realizar la tarea de ingles", 2, 1, "Ver en plataforma");	
    
INSERT INTO task(title, id_category, id_user, description) 
	VALUES ("Realizar la tarea de mate", 2, 2, "Ver en plataforma");	   