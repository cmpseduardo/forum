function cadastrarUsuario(){
    const emailUser = document.querySelector("#email-user").value
    const senhaUser = document.querySelector("#senha-user").value
    const nomeUser = document.querySelector("#nome-user").value
    const usuarioUser = document.querySelector("#usuario-user").value

    let novoUsuarioJSON = {
        "tipo": "USER",
		"email": emailUser,
		"senha": senhaUser,
		"nome": nomeUser,
		"nome_usuario": usuarioUser,
		"biografia": "Eu estou usando o Mystic!"
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
        }
    })
    
}