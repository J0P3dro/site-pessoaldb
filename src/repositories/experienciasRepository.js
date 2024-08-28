const { Pool } = require("pg");

const { pool } = require('../config/db'); 

    exports.getAllexperiencias = async (req, res) => {
            const results = await pool.query('SELECT * FROM experiencias');
           return results.rows;
    };

    exports.getExperienciasById = async (id) => {
        const result = await pool.query('SELECT * FROM experiencias WHERE id = ?', [id]);
        return result.rows[0];
    }


    exports.createExperiencia = async (experiencia) => {
        const query = `
          INSERT INTO experiencias (titulo, tipo, descricao, ano_inicio, ano_fim) 
          VALUES ($1, $2, $3, $4, $5) 
          RETURNING *;
        `;
        const values = [
            experiencia.titulo, 
            experiencia.tipo, 
            experiencia.descricao, 
            experiencia.ano_inicio, 
            experiencia.ano_fim
        ];
    
        const result = await pool.query(query, values);
        return result.rows[0];
    };
    

    exports.updateExperiencia = async (id, experiencias) => {
        const result = await pool.query (`
            UPDATE experiencias
            SET titulo = $1, tipo = $2, descricao = $3, ano_inicio = $4, ano_fim = $5
            WHERE id = $6
            RETURNING *;`,
            [experiencias.titulo, experiencias.tipo, experiencias.descricao, experiencias.ano_inicio, experiencias.ano_fim, id])
            return result.rows[0];
        }
            
        exports.deleteExperiencia= async (id) => {
            await pool.query('DELETE FROM experiencias WHERE id = $1', [id]);
        }
