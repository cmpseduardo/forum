let olaUser = document.querySelector("#ola-user")

const info = JSON.parse(localStorage.getItem("info"))

olaUser.innerHTML = `Olá, ${info.nome_usuario}!`