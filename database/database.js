const Sequelize = require('sequelize');

const connection = new Sequelize('GuiaPerguntas', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432
});

module.exports = connection;