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
    nome_categoria VARCHAR(30) NOT NULL,
    curtidas INTEGER NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

CREATE TABLE respostas(
    id_resposta INTEGER NOT NULL PRIMARY KEY,
    id_postagem INTEGER NOT NULL,
    comentario VARCHAR(1000),
    FOREIGN KEY (id_postagem) REFERENCES postagens(id_postagem)
);

CREATE TABLE subcomentarios(
    id_subcomentario INTEGER NOT NULL PRIMARY KEY,
    id_postagem INTEGER NOT NULL,
    id_resposta INTEGER NOT NULL,
    subcomentario VARCHAR(1000) NOT NULL,
    FOREIGN KEY (id_resposta) REFERENCES respostas(id_resposta)
);

DESCRIBE usuarios;
DESCRIBE categorias;
DESCRIBE postagens;
DESCRIBE respostas;
DESCRIBE subcomentarios;
SHOW TABLES;

CREATE VIEW vw_respostas AS 
SELECT * FROM respostas r
INNER JOIN postagens p ON p.id_postagem = r.id_postagem
INNER JOIN subcomentarios s ON r.id_resposta = s.id_resposta;

CREATE VIEW vw_respostas AS 
SELECT p.id_postagem AS id_post, p.titulo, p.conteudo, r.id_resposta AS id_resp, r.comentario, s.id_subcomentario, s.subcomentario
FROM respostas r
INNER JOIN postagens p ON p.id_postagem = r.id_postagem
INNER JOIN subcomentarios s on s.id_resposta = r.id_resposta;