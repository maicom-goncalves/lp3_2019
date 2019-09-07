const Sequelize = require('sequelize');

const dbConfig = require('./config');
const ListaModels = require('../models/ListaModels')

const modo = process.env.NODE_ENV || 'development';
const config = dbConfig[modo];

const conexao = new Sequelize(
    config.db,
    config.user,
    config.password, {
    host: config.host,
    dialect: config.dialect,
    port: config.port
});

/**
 * Voce precisa inicializar todos os modelos
 * antes da sincronização que ocorre
 * logo abaixo
 */
const Lista=ListaModels(conecao,Sequelize);

conexao
    .sync({ alter: true })
    .then(() => console.log('BD Conectado e sincronizado'));

const db ={};

module.exports=db;
