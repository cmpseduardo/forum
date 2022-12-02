const con = require('./../../index.js');
const Usuario = require('../models/Usuario.js');

const listarUsuarios = (req, res) => {
    con.query(Usuario.toRead(req.params), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end();
        } else {
            res.status(400).json(err).end();
        }
    })
}

const cadastrarUsuarios = (req, res) => {
    con.query(Usuario.toCreate(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const alterarUsuarios = (req, res) => {
    con.query(Usuario.toUpdate(req.body), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(200).end();
            else
                res.status(404).end();
        else
            res.status(500).json(err).end();
    });
}

const excluirUsuarios = (req, res) => {
    con.query(Usuario.toDelete(req.params), (err, result) => {
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
    listarUsuarios,
    cadastrarUsuarios,
    alterarUsuarios,
    excluirUsuarios
}