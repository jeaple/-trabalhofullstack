const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const Pessoa = require('./models/Pessoa');
const cors = require('cors');

const app = express();
app.use(cors()); 
app.use(bodyParser.json());


app.post('/pessoa', async (req, res) => {
  try {
    const { nome, cpf, telefone } = req.body;
    
   
    if (!nome || !cpf) {
      return res.status(400).json({ error: 'Nome e CPF são obrigatórios' });
    }
    
    const pessoa = await Pessoa.create({ nome, cpf, telefone });
    res.status(201).json(pessoa);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar pessoa' });
  }
});



