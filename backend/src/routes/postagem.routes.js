const express = require('express')
const router = express.Router()

const Postagem = require("../controllers/postagens.controller")

router.get("/read", Postagem.readAll)
router.post("/create", Postagem.create)
router.put("/update", Postagem.update)
router.delete("/delete/:id", Postagem.del)

module.exports = router