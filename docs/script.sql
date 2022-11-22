DROP DATABASE IF EXISTS forum;
CREATE DATABASE forum charset=UTF8 collate utf8_general_ci;

USE forum;

CREATE TABLE usuarios(
    id_usuario INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    nome_usuario VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    biografia VARCHAR(600) NOT NULL,
    foto_perfil LONGBLOB NOT NULL
);

CREATE TABLE categorias(
    id_categoria INTEGER NOT NULL,
    nome_categoria VARCHAR(30) NOT NULL
);

CREATE TABLE postagens(
    id_postagem INTEGER PRIMARY KEY AUTO_INCREMENT,
    id_usuario INTEGER NOT NULL,
    titulo VARCHAR(200) NOT NULL,
    conteudo VARCHAR(1000) NOT NULL,
    imagem LONGBLOB NOT NULL,
    id_categoria INTEGER NOT NULL,
    nome_categoria VARCHAR NOT NULL,
    curtidas INTEGER NOT NULL,
);

CREATE TABLE respostas(
    id_postagem INTEGER NOT NULL,
    id_resposta INTEGER NOT NULL PRIMARY KEY,
    comentario VARCHAR(1000),
);

CREATE TABLE subcomentarios(
    id_postagem INTEGER NOT NULL,
    id_resposta INTEGER NOT NULL,
    subcomentario VARCHAR(1000)
);

DESCRIBE usuarios;
DESCRIBE categorias;
DESCRIBE postagens;
DESCRIBE respostas;
DESCRIBE subcomentarios;
SHOW TABLES;