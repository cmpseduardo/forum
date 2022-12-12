//PEGAR NOME DE USUÁRIO DO LOCALSTORAGE
let olaUser = document.querySelector("#ola-user")
const info = JSON.parse(localStorage.getItem("info"))
olaUser.innerHTML = `Olá, ${info.nome_usuario}!`

//LISTAR PUBLICAÇÕES
let postUsuario = document.querySelector(".post")
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
            console.log(banco)
            let novoPost = postUsuario.cloneNode(true)
            novoPost.classList.remove("model")

            novoPost.id = "id-"+banco.id_postagem;

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
        carregarComentario()
    })
}

function carregarComentario(){
    fetch("http://localhost:3000/respostas/read")
    .then((response) => {
        return response.json()
    })
    .then((data)=> {
        data.forEach(respostas => {
            let respostaPost = document.createElement("div")

            let paragrafo = document.createElement("span")
            paragrafo.innerHTML = `${respostas.nome} comentou:`
            
            let com = document.createElement("p")
            com.innerHTML = `${respostas.comentario}`

            respostaPost.appendChild(paragrafo)
            respostaPost.appendChild(com)
      
            respostaPost.classList.add("comentario-linha")
            console.log(respostaPost)

            let comentarios = document.querySelector(`#id-${respostas.id_postagem}`).querySelector(".comentarios")
            comentarios.appendChild(respostaPost)
        })
    })

}

function carregarSubcomentario(){
    fetch("http://localhost:3000/respostas/read")
    .then((response) => {
        return response.json()
    })
    .then((data)=> {
        data.forEach(respostas => {
            let respostaPost = document.createElement("div")

            let paragrafo = document.createElement("span")
            paragrafo.innerHTML = `${respostas.nome_usuario} comentou:`
            
            let com = document.createElement("p")
            com.innerHTML = `${respostas.comentario}`

            respostaPost.appendChild(paragrafo)
            respostaPost.appendChild(com)
      
            respostaPost.classList.add("comentario-linha")
            console.log(respostaPost)

            let comentarios = document.querySelector(`#id-${respostas.id_postagem}`).querySelector(".comentarios")
            comentarios.appendChild(respostaPost)
        })
    })

}

function comentar(){
    let comentario = document.querySelector("#digite-comentario")
    const comentarioUser = {
        "comentario": comentario.value
    }

    fetch("http://localhost:3000/respostas/create", {
        "method":"POST",
        "headers": {
            "Content-Type":"application/json"
        },
        "body": JSON.stringify(comentarioUser)
    })
    .then(res => {return res.json()})
    .then(data => {
        if(data.erro === undefined) {
           alert("Comentário enviado com sucesso!")
        }
    })
}