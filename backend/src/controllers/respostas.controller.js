const con = require('./../models/DAO');
const Resposta = require('../models/Resposta.js');

const listarRespostas = (req, res) => {
    con.query(Resposta.toRead(req.params), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end();
        } else {
            res.status(400).json(err).end();
        }
    })
}

const cadastrarRespostas = (req, res) => {
    con.query(Resposta.toCreate(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const alterarRespostas = (req, res) => {
    con.query(Resposta.toUpdate(req.body), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(200).end();
            else
                res.status(404).end();
        else
            res.status(500).json(err).end();
    });
}

const excluirRespostas = (req, res) => {
    con.query(Resposta.toDelete(req.params), (err, result) => {
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
    listarRespostas,
    cadastrarRespostas,
    alterarRespostas,
    excluirRespostas
}