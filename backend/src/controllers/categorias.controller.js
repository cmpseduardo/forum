const con = require('./../models/DAO');
const Categoria = require('../models/Categoria.js');

const listarCategorias = (req, res) => {
    con.query(Categoria.toRead(req.params), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end();
        } else {
            res.status(400).json(err).end();
        }
    })
}

const cadastrarCategorias = (req, res) => {
    con.query(Categoria.toCreate(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const alterarCategorias = (req, res) => {
    con.query(Categoria.toUpdate(req.body), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(200).end();
            else
                res.status(404).end();
        else
            res.status(500).json(err).end();
    });
}

const excluirCategorias = (req, res) => {
    con.query(Categoria.toDelete(req.params), (err, result) => {
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
    listarCategorias,
    cadastrarCategorias,
    alterarCategorias,
    excluirCategorias
}