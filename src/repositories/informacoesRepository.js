const { pool } = require ('../config/db');

exports.getInformacoes = async () => {
    const result = await pool.query('SELECT * FROM informacoes');
    return result.rows;
};

exports.createInformacoes = async (informacoes) =>  {
    const result = await pool.query
    (' INSERT INTO informacoes (foto, nome, cargo, resumo) VALUES ($1, $2, $3, $4, $5, $6)', [informacoes.foto, informacoes.nome, informacoes.cargo, informacoes.resumo]);
    return result.rows[0];
}

exports.deleteInformacoes = async (id) => {
    await pool.query('delete FROM informacoes WHERE id = $1', [id]);
}


