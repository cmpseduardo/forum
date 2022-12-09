const toCreate = (model) => {
    return `INSERT INTO usuarios VALUES (DEFAULT, 'USER', '${model.email}', '${model.senha}', '${model.nome}', '${model.nome_usuario}', 'Eu estou usando o Mystic!')`;
}

const toRead = (model) => {
    return 'SELECT * FROM usuarios';
}

const toUpdate = (model) => {
    return `UPDATE usuarios SET 
    nome = '${model.nome}', biografia = '${model.biografia}'
    WHERE id_usuario = ${model.id_usuario}`;
}

const toDelete = (model) => {
    return `DELETE FROM usuarios WHERE id_usuario = ${model.id_usuario}`;
}

module.exports = {
    toCreate,
    toRead,
    toUpdate,
    toDelete
}