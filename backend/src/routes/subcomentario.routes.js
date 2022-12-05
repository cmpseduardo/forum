const express = require('express')
const router = express.Router()

const Subcomentario = require("../controllers/subcomentarios.controller")

router.get("/read", Subcomentario.listarSubcomentarios)
router.post("/create", Subcomentario.cadastrarSubcomentarios)
router.put("/update", Subcomentario.alterarSubcomentarios)
router.delete("/delete/:id_subcomentario", Subcomentario.excluirSubcomentarios)

module.exports = router