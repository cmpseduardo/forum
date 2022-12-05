const express = require("express")
const cors = require("cors")

const Usuario = require("./src/routes/usuario.routes")
const Categoria = require("./src/routes/categoria.routes")
const Postagem = require("./src/routes/postagem.routes")
const Resposta = require("./src/routes/resposta.routes")
const Subcomentario = require("./src/routes/subcomentario.routes")

const app = express()
    .use(express.json())
    .use(cors())
    .use("/usuarios", Usuario)
    .use("/categorias", Categoria)
    .use("/postagens", Postagem)
    .use("/respostas", Resposta)
    .use("/subcomentarios", Subcomentario)

app.listen(3000, () => {
    console.log("Respondendo na porta 3000")
})

