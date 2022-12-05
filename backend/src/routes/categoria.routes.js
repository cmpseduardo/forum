const express = require('express')
const router = express.Router()

const Categoria = require("../controllers/categorias.controller")

router.get("/read", Categoria.listarCategorias)
router.post("/create", Categoria.cadastrarCategorias)
router.put("/update", Categoria.alterarCategorias)
router.delete("/delete/:id_categoria", Categoria.excluirCategorias)

module.exports = router