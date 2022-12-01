const express = require('express')
const router = express.Router()

const Categoria = require("../controllers/categorias.controller")

router.get("/read", Categoria.readAll)
router.post("/create", Categoria.create)
router.put("/update", Categoria.update)
router.delete("/delete/:id", Categoria.del)

module.exports = router