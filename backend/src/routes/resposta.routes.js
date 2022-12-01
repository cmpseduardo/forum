const express = require('express')
const router = express.Router()

const Resposta = require("../controllers/respostas.controller")

router.get("/read", Resposta.readAll)
router.post("/create", Resposta.create)
router.put("/update", Resposta.update)
router.delete("/delete/:id", Resposta.del)

module.exports = router