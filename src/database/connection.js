const  Cofig =  require('../../knexfile.js');

const Connection = knex(Config.development);

module.exports = Connection;
