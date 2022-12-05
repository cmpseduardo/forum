const con = require('./../models/DAO');
const Subcomentario = require('../models/Subcomentario.js');

const listarSubcomentarios = (req, res) => {
    con.query(Subcomentario.toRead(req.params), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end();
        } else {
            res.status(400).json(err).end();
        }
    })
}

const cadastrarSubcomentarios = (req, res) => {
    con.query(Subcomentario.toCreate(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const alterarSubcomentarios = (req, res) => {
    con.query(Subcomentario.toUpdate(req.body), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(200).end();
            else
                res.status(404).end();
        else
            res.status(500).json(err).end();
    });
}

const excluirSubcomentarios = (req, res) => {
    con.query(Subcomentario.toDelete(req.params), (err, result) => {
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
    listarSubcomentarios,
    cadastrarSubcomentarios,
    alterarSubcomentarios,
    excluirSubcomentarios
}