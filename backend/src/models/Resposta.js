const toCreate = (model) => {
    return `INSERT INTO respostas VALUES (DEFAULT, ${model.id_postagem}, '${model.comentario}')`;
}

const toRead = (model) => {
    return 'SELECT * FROM respostas';
}

const toUpdate = (model) => {
    return `UPDATE respostas SET 
    comentario = '${model.comentario}'
    WHERE id_resposta = ${model.id_resposta}`;
}

const toDelete = (model) => {
    return `DELETE FROM respostas WHERE id_resposta = ${model.id_resposta}`;
}

module.exports = {
    toCreate,
    toRead,
    toUpdate,
    toDelete
}