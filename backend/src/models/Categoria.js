const toCreate = (model) => {
    return `INSERT INTO categorias VALUES (DEFAULT,'${model.nome_categoria}')`;
}

const toRead = (model) => {
    return 'SELECT * FROM categorias';
}

const toUpdate = (model) => {
    return `UPDATE categorias SET 
    nome_categoria = '${model.nome_categoria}'
    WHERE id_categoria = ${model.id_categoria}`;
}

const toDelete = (model) => {
    return `DELETE FROM categorias WHERE id_categoria = ${model.id_categoria}`;
}

module.exports = {
    toCreate,
    toRead,
    toUpdate,
    toDelete
}