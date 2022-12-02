const toCreate = (model) => {
    return `INSERT INTO Categorias VALUE (default,'${model.nome_categoria}'`;
}

const toRead = (model) => {
    return 'SELECT * FROM Categorias';
}

const toUpdate = (model) => {
    return `UPDATE Categorias SET 
    nome = '${model.nome_categoria}',
    WHERE id_categoria = '${model.id_categoria}'`;
}

const toDelete = (model) => {
    return `DELETE FROM Categorias WHERE id_categoria = '${model.id_categoria}'`;
}

module.exports = {
    toCreate,
    toRead,
    toUpdate,
    toDelete
}