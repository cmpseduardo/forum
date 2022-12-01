const express = require('express')
const router = express.Router()

const Usuario = require("../controllers/usuarios.controller")

router.get("/read", Usuario.readAll)
router.post("/create", Usuario.create)
router.put("/update", Usuario.update)
router.delete("/delete/:id", Usuario.del)

module.exports = router