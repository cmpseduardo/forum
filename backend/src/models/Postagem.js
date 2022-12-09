const toCreate = (model) => {
    return `INSERT INTO postagens VALUES (DEFAULT, ${model.id_usuario}, '${model.titulo}', '${model.conteudo}', ${model.id_categoria}, ${model.curtidas})`;
}

const toRead = (model) => {
    return 'SELECT postagens.*, usuarios.nome_usuario, categorias.nome_categoria FROM postagens INNER JOIN categorias ON categorias.id_categoria = postagens.id_categoria INNER JOIN usuarios ON usuarios.id_usuario = postagens.id_usuario';
}

const toUpdate = (model) => {
    return `UPDATE postagens SET 
    titulo = '${model.titulo}', conteudo = '${model.conteudo}'
    WHERE id_postagem = ${model.id_postagem}`;
}

const toDelete = (model) => {
    return `DELETE FROM postagens WHERE id_postagem = ${model.id_postagem}`;
}

module.exports = {
    toCreate,
    toRead,
    toUpdate,
    toDelete
}