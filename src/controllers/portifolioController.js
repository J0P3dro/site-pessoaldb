const portifolioRepository = require('../repositories/portifolioReposiutory');

exports.getPortifolio = async (resq, res) => {
    const portifolio = await portifolioRepository.getPortifolio();
    res.json(portifolio);
}

exports.getProjetoById = async (req, res) => {
    const id = parseInt(req.params.id);
    const projeto = await portifolioRepository.getProjetoById(id);
    res.json(projeto);
}

exports.createProjeto = async (req, res) => {
    const { nome, url, descricao } = req.body;
    await portifolioRepository.createProjeto(nome, url, descricao);
    res.json(newProjeto)
}

exports.updateProjeto = async (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, url, descricao } = req.body;
    await portifolioRepository.updateProjeto(id, nome, url, descricao);
    res.json(updatedProjeto);
}

exports.deleteProjeto = async (req, res) => {
    const id = parseInt(req.params.id);
    await portifolioRepository.deleteProjeto(id);
    res.status(204).send();
}


