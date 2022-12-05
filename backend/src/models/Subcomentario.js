const toCreate = (model) => {
    return `INSERT INTO subcomentarios VALUES (DEFAULT, ${model.id_postagem}, ${model.id_resposta}, '${model.subcomentario}')`;
}

const toRead = (model) => {
    return 'SELECT * FROM subcomentarios';
}

const toUpdate = (model) => {
    return `UPDATE subcomentarios SET 
    subcomentario = '${model.subcomentario}'
    WHERE id_subcomentario = ${model.id_subcomentario}`;
}

const toDelete = (model) => {
    return `DELETE FROM subcomentarios WHERE id_subcomentario = ${model.id_subcomentario}`;
}

module.exports = {
    toCreate,
    toRead,
    toUpdate,
    toDelete
}