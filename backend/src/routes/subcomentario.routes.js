const express = require('express')
const router = express.Router()

const Subcomentario = require("../controllers/subcomentarios.controller")

router.get("/read", Subcomentario.readAll)
router.post("/create", Subcomentario.create)
router.put("/update", Subcomentario.update)
router.delete("/delete/:id", Subcomentario.del)

module.exports = router