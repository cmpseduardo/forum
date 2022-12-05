const express = require('express')
const router = express.Router()

const Usuario = require("../controllers/usuarios.controller")

router.get("/read", Usuario.listarUsuarios)
router.post("/create", Usuario.cadastrarUsuarios)
router.put("/update", Usuario.alterarUsuarios)
router.delete("/delete/:id_usuario", Usuario.excluirUsuarios)

module.exports = router