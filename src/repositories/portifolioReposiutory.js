const {poll} = require ('../config/db');

exports.getPortifolio = async () => {
    const result = await poll.query('SELECT * FROM portifolio');
    return result.rows;
}

exports.getPortifolioById = async (id) => {
    const result = await poll.query('SELECT * FROM portifolio WHERE id = $1', [id]);
    return result.rows[0];
}

exports.createPortifolio = async (req, res) => {
    const portifolio = req.body;
    const result = await poll.query('INSERT INTO portifolio (nome, descricao, url, imagem) VALUES ($1, $2, $3, $4) RETURNING *', [projeto.titulo, projeto.link, projeto.imagem]);
        return result.rows[0];
}


exports.updatePortifolio = async (id,projeto) => {
    const result = await poll.query('UPDATE portifolio SET nome=$1, descricao=$2, url=$3, imagem=$4 WHERE id=$5 RETURNING *', [updatedProjeto.nome, updatedProjeto.descricao, updatedProjeto.link, updatedProjeto.imagem, id]);
    return result.rows[0];
}

exports.deletePortifolio = async (id) => {
    const result = await poll.query('DELETE FROM portifolio WHERE id=$1', [id]);
}

