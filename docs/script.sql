DROP DATABASE IF EXISTS forum;
CREATE DATABASE forum charset=UTF8 collate utf8_general_ci;

USE forum;

CREATE TABLE usuarios(
    id_usuario INTEGER PRIMARY KEY AUTO_INCREMENT,
    tipo VARCHAR(15) NOT NULL,
    email VARCHAR(50) NOT NULL,
    senha VARCHAR(100) NOT NULL,
    nome VARCHAR(50) NOT NULL,
    nome_usuario VARCHAR(50) NOT NULL,
    biografia VARCHAR(600) NOT NULL
);

CREATE TABLE categorias(
    id_categoria INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome_categoria VARCHAR(30) NOT NULL
);

CREATE TABLE postagens(
    id_postagem INTEGER PRIMARY KEY AUTO_INCREMENT,
    id_usuario INTEGER NOT NULL,
    titulo VARCHAR(200) NOT NULL,
    conteudo VARCHAR(1000) NOT NULL,
    id_categoria INTEGER NOT NULL,
    curtidas INTEGER NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

CREATE TABLE respostas(
    id_resposta INTEGER PRIMARY KEY AUTO_INCREMENT,
    id_postagem INTEGER NOT NULL,
    comentario VARCHAR(1000),
    FOREIGN KEY (id_postagem) REFERENCES postagens(id_postagem)
);

CREATE TABLE subcomentarios(
    id_subcomentario INTEGER PRIMARY KEY AUTO_INCREMENT,
    id_postagem INTEGER NOT NULL,
    id_resposta INTEGER NOT NULL,
    subcomentario VARCHAR(1000) NOT NULL,
    FOREIGN KEY (id_resposta) REFERENCES respostas(id_resposta),
    FOREIGN KEY (id_postagem) REFERENCES postagens(id_postagem)
);

DESCRIBE usuarios;
DESCRIBE categorias;
DESCRIBE postagens;
DESCRIBE respostas;
DESCRIBE subcomentarios;
SHOW TABLES;


LOAD DATA INFILE 'C:/Users/campo/Desktop/forum-main/docs/dados/usuarios.csv'
INTO TABLE usuarios
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/campo/Desktop/forum-main/docs/dados/categorias.csv'
INTO TABLE categorias
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/campo/Desktop/forum-main/docs/dados/postagens.csv'
INTO TABLE postagens
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/campo/Desktop/forum-main/docs/dados/postagens.csv'
INTO TABLE respostas
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/campo/Desktop/forum-main/docs/dados/subcomentarios.csv'
INTO TABLE subcomentarios
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

CREATE VIEW vw_respostas AS 
SELECT p.id_postagem AS id_post, p.titulo, p.conteudo, r.id_resposta AS id_resp, r.comentario, s.id_subcomentario, s.subcomentario
FROM respostas r
INNER JOIN postagens p ON p.id_postagem = r.id_postagem
INNER JOIN subcomentarios s on s.id_resposta = r.id_resposta;