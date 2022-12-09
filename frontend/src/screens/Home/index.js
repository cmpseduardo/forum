//PEGAR NOME DE USUÁRIO DO LOCALSTORAGE
let olaUser = document.querySelector("#ola-user")
const info = JSON.parse(localStorage.getItem("info"))
olaUser.innerHTML = `Olá, ${info.nome_usuario}!`

//LISTAR PUBLICAÇÕES
var postUsuario = document.querySelector(".post")
function carregar() {
    // categoria = document.querySelector("#categoria")
    // usuarioUser = document.querySelector("#usuario-user")
    // conteudo = document.querySelector("#conteudo")

    fetch("http://localhost:3000/postagens/read")
    .then((response) => {
        return response.json()
    })
    .then((data)=> {
        data.forEach(banco => {
            let novoPost = postUsuario.cloneNode(true)
            novoPost.classList.remove("model")

            let categoria = novoPost.querySelector("#categoria")
            let usuarioUser = novoPost.querySelector("#usuario-user")
            let conteudo = novoPost.querySelector("#conteudo")
            let tituloPostagem = novoPost.querySelector("#titulo-postagem")

            categoria.innerHTML = banco.nome_categoria
            tituloPostagem.innerHTML = banco.titulo
            usuarioUser.innerHTML = banco.nome_usuario
            conteudo.innerHTML = banco.conteudo
            console.log(conteudo)

            categoria.style.backgroundColor = `var(--${banco.nome_categoria})`
        

            document.querySelector(".feed").appendChild(novoPost)
        })
    })
}