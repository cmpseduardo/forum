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

CREATE TABLE seguidores(
    seguindo INTEGER NOT NULL,
    seguido INTEGER NOT NULL
);

CREATE TABLE categorias(
    id_categoria INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome_categoria VARCHAR(30) NOT NULL
);

CREATE TABLE subcategorias(
    id_categoria INTEGER NOT NULL,
    id_subcategoria INTEGER PRIMARY KEY AUTO_INCREMENT,
    
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

CREATE TABLE curtidas_postagens(
    id_postagem INTEGER NOT NULL,
    id_usuario INTEGER NOT NULL,
    FOREIGN KEY (id_postagem) REFERENCES postagens(id_postagem),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

CREATE TABLE respostas(
    id_resposta INTEGER PRIMARY KEY AUTO_INCREMENT,
    id_postagem INTEGER NOT NULL,
    id_usuario INTEGER NOT NULL,
    comentario VARCHAR(1000),
    FOREIGN KEY (id_postagem) REFERENCES postagens(id_postagem),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

CREATE TABLE curtidas_respostas(
    id_resposta INTEGER NOT NULL,
    id_usuario INTEGER NOT NULL,
    FOREIGN KEY (id_resposta) REFERENCES respostas(id_resposta),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

CREATE TABLE subcomentarios(
    id_subcomentario INTEGER PRIMARY KEY AUTO_INCREMENT,
    id_resposta INTEGER NOT NULL,
    id_usuario INTEGER NOT NULL,
    subcomentario VARCHAR(1000) NOT NULL,
    FOREIGN KEY (id_resposta) REFERENCES respostas(id_resposta),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);


CREATE TABLE curtidas_subcomentarios(
    id_subcomentario INTEGER NOT NULL,
    id_usuario INTEGER NOT NULL,
    FOREIGN KEY (id_subcomentario) REFERENCES subcomentarios(id_subcomentario),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

DESCRIBE usuarios;
DESCRIBE categorias;
DESCRIBE postagens;
DESCRIBE respostas;
DESCRIBE subcomentarios;
DESCRIBE curtidas_postagens;
DESCRIBE curtidas_respostas;
DESCRIBE curtidas_subcomentarios;
SHOW TABLES;


LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/forum-main/docs/dados/usuarios.csv'
INTO TABLE usuarios
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/forum-main/docs/dados/categorias.csv'
INTO TABLE categorias
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/forum-main/docs/dados/postagens.csv'
INTO TABLE postagens
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/forum-main/docs/dados/respostas.csv'
INTO TABLE respostas
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/forum-main/docs/dados/subcomentarios.csv'
INTO TABLE subcomentarios
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

CREATE VIEW vw_respostas
AS
SELECT respostas.*, usuarios.nome, nova.nome as nome_sub, nova.subcomentario FROM respostas
INNER JOIN usuarios ON respostas.id_usuario = usuarios.id_usuario
INNER JOIN (SELECT subcomentarios.*, usuarios.nome FROM subcomentarios INNER JOIN usuarios ON subcomentarios.id_usuario = usuarios.id_usuario) AS nova ON nova.id_resposta = respostas.id_resposta;

