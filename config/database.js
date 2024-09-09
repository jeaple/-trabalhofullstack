const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('banco', 'postgres', 'senha', {
  host: 'localhost',  
  dialect: 'postgres', 
  port: 5432           
});


sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados foi estabelecida com sucesso.');
  })
  .catch(err => {
    console.error('Não foi possível conectar ao banco de dados:', err);
  });

module.exports = sequelize;
