const user = document.querySelector("#user");
const psw = document.querySelector("#psw");

function login() {
    let info = {
        "username": user.value,
        "password": psw.value
    }

    fetch("https://jsonplaceholder.typicode.com/users", {
        "method":"POST",
        "headers": {
            "Content-Type":"application/json"
        },
        "body": JSON.stringify(info)
    })
    .then(res => {return res.json()})
    .then(data => {
        if(data.erro === undefined) {
            localStorage.setItem("info", JSON.stringify({"username":data.username, "image":data.img}));

            window.location.href = "../Home/index.html";
        }
    })
}

modal = document.querySelector("dialog")

function abrirModal(){
    modal.showModal()
}

function fecharModal(){
    modal.close()
}

function cadastrarUsuario(){
    const emailUser = document.querySelector("#email-user").value
    const senhaUser = document.querySelector("#senha-user").value
    const nomeUser = document.querySelector("#nome-user").value
    const usuarioUser = document.querySelector("#usuario-user").value

    let novoUsuarioJSON = {
		"email": emailUser,
		"senha": senhaUser,
		"nome": nomeUser,
		"nome_usuario": "@" + usuarioUser

    }

    let novoUsuario = JSON.stringify(novoUsuarioJSON)

    fetch("http://localhost:3000/usuarios/create", {
        "method": "POST",
        "headers": {
            "Content-Type":"application/json"
        },
        "body": novoUsuario
    })
    .then(res => {return res.json()})
    .then(data => {
        if(data.erro === undefined){
            localStorage.setItem("info", novoUsuario)
            alert("Cadastrado com Sucesso")
            console.log(novoUsuario)
        }
    })
    
}