const toCreate = (model) => {
    return `INSERT INTO respostas VALUES (DEFAULT, ${model.id_postagem}, '${model.comentario}')`;
}

const toRead = (model) => {
    return 'SELECT * FROM vw_respostas';
    // return 'SELECT postagens.*, usuarios.nome_usuario, categorias.nome_categoria FROM postagens INNER JOIN categorias ON categorias.id_categoria = postagens.id_categoria INNER JOIN usuarios ON usuarios.id_usuario = postagens.id_usuario';
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