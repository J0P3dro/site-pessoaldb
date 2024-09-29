require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}.local`
});

const Pool = require('pg').Pool;


const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});


const initDatabase = async () => {
 
    await pool.query(`
     CREATE TABLE IF NOT EXISTS experiencias(
        id SERIAL PRIMARY KEY,
        titulo VARCHAR(255) NOT NULL,
        tipo VARCHAR(255) UNIQUE NOT NULL,
        descricao TEXT NOT NULL,
        ano_inicio INT NOT NULL,
        ano_fim INT
      );
    `
      );

      await pool.query (`
       CREATE TABLE IF NOT EXISTS portifolio  (
        id SERIAL PRIMARY KEY,
        titulo VARCHAR(225) NOT NULL,
        link VARCHAR(255) UNIQUE NOT NULL,
        imagem VARCHAR(255) NOT NULL
        );
        `)

        await pool.query (`
          CREATE TABLE IF NOT EXISTS informacoes (
            id SERIAL PRIMARY KEY,
            foto VARCHAR(255) NOT NULL,
            nome VARCHAR(255) NOT NULL,
            cargo VARCHAR(255) NOT NULL,
            resumo VARCHAR(255) NOT NULL
            );
        `)

        await pool.query (`
          CREATE TABLE IF NOT EXISTS usuarios (
          id SERIAL PRIMARY KEY,
          email VARCHAR(255) NOT NULL,
          password VARCHAR(255) NOT NULL
          );
          `)
            console.log('Banco de dados iniciado');
};
module.exports = { pool, initDatabase };
