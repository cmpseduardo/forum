const express = require('express')
const router = express.Router()

const Postagem = require("../controllers/postagens.controller")

router.get("/read", Postagem.listarPostagens)
router.post("/create", Postagem.cadastrarPostagens)
router.put("/update", Postagem.alterarPostagens)
router.delete("/delete/:id_postagem", Postagem.excluirPostagens)

module.exports = router