const experienciasRepository = require('../repositories/experienciasRepository');
const pool = require('../config/db'); 

exports.getAllExperiencias = async (req, res) => {
    try {
        const experiencias = await experienciasRepository.getAllexperiencias();
        res.json(experiencias);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao buscar as experiências." });
    }
};

exports.getExperienciaById = async (id) => {
    const query = `SELECT * FROM experiencias WHERE id = $1`;
    const result = await pool.query(query, [id]);
    return result.rows[0];
};


exports.createExperiencia = async (req, res) => {
    try {
        const experiencia = req.body;
        const newExperiencia = await experienciasRepository.createExperiencia(experiencia);
        res.status(201).json(newExperiencia);
    } catch (error) {
        console.error("Erro ao criar a experiência:", error.message);  // Adiciona a mensagem do erro no log
        res.status(500).json({ message: "Erro ao criar a experiência." });
    }
};

exports.updateExperiencia = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const experiencia = req.body;
        const updatedExperiencia = await experienciasRepository.updateExperiencia(id, experiencia); // Aqui deve-se usar "experiencia"
        res.json(updatedExperiencia);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao atualizar a experiência." });
    }
};

exports.deleteExperiencia = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await experienciasRepository.deleteExperiencia(id);
        res.json({ message: `Experiência ${id} deletada` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao deletar a experiência." });
    }
};