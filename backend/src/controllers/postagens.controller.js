const readAll = (model) => {
    return `SELECT * FROM postagens`
}

const create = (model) => {
    return `INSERT INTO alunos VALUES(DEFAULT, '${model.id_usuario}', '${model.titulo}', '${model.conteudo}', '${model.imagem}', '${model.id_categoria}', '${model.nome_categoria}', ${model.curtidas})`
}

module.exports = {
    readAll,
    create
}