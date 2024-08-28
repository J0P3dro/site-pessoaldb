const { pool } = require('../config/db');

const getUsuariosByEmail = async (email) => {
    const result = await pool.query ('SELECT * FROM usuarios WHERE email = ' + email);
    return result.rows.shift();
}

