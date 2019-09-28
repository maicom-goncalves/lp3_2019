const Sequelize = require('sequelize');

const dbConfig = require('./config');
const TrabalhoModel = require('../models/TrabalhoModel');


const modo = process.env.NODE_ENV || 'development';
const config = dbConfig[modo];

const conexao = new Sequelize(
    config.db,
    config.user,
    config.password, {
    host: config.host,
    dialect: config.dialect,
    port: config.port
}
);

const Trabalho = TrabalhoModel(conexao, Sequelize);

conexao
    .sync({ alter: true })
    .then(() => console.log('BD conectado e sincronizado'));

const db = { Trabalho};

module.exports = db;

