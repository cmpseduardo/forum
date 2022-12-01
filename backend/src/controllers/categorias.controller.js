const readAll = (model) => {
    return `SELECT * FROM categorias`
}

const create = (model) => {
    return `INSERT INTO alunos VALUES(DEFAULT, '${model.nome_categoria}')`
}

module.exports = {
    readAll,
    create
}