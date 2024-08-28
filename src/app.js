require('dotenv').config();
const express = require('express');

const { initDatabase } = require('../src/config/db');



const experienciasRoutes = require('./routes/experienciasRoutes');
const portifolioRoutes = require('./routes/portifolioRoute');

const informacoesRoutes = require('./routes/informacoesRoute');

const authRoute = require('./routes/authRoute');

const app = express();
const port = process.env.APP_PORT || 5000;

app.use(express.json());
app.get('/', (req, res) => {
  res.send('API rodando!');
});

app.use('/api/experiencias', experienciasRoutes);
app.use('/api/portifolio', portifolioRoutes);
app.use('/api/informacoes', informacoesRoutes);
app.use('/api/auth', authRoute);

initDatabase();
app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});