const { default: knex } = require('knex');
const  Config = require('../../knexfile');

const connection = knex(Config.development);


module.exports = connection;
