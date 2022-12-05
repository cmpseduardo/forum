const express = require('express')
const router = express.Router()

const Resposta = require("../controllers/respostas.controller")

router.get("/read", Resposta.listarRespostas)
router.post("/create", Resposta.cadastrarRespostas)
router.put("/update", Resposta.alterarRespostas)
router.delete("/delete/:id_resposta", Resposta.excluirRespostas)

module.exports = router