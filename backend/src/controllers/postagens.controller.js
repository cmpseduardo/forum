const con = require('./../models/DAO');
const Postagem = require('../models/Postagem.js');

const listarPostagens = (req, res) => {
    con.query(Postagem.toRead(req.params), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end();
        } else {
            res.status(400).json(err).end();
        }
    })
}

const cadastrarPostagens = (req, res) => {
    con.query(Postagem.toCreate(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const alterarPostagens = (req, res) => {
    con.query(Postagem.toUpdate(req.body), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(200).end();
            else
                res.status(404).end();
        else
            res.status(500).json(err).end();
    });
}

const excluirPostagens = (req, res) => {
    con.query(Postagem.toDelete(req.params), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(204).json(req.params).end();
            else
                res.status(404).end();
        else
            res.status(400).json(err).end();
    })
}

module.exports = {
    listarPostagens,
    cadastrarPostagens,
    alterarPostagens,
    excluirPostagens
}