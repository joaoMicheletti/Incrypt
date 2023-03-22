const Express = require("express");
const routes = Express.Router();
const User = require('./controllers/user.js');
const Product = require('./controllers/product.js');

routes.post('/register_user', User.Register); // Registrar ususarios.
routes.post('/login_user', User.Login); // Login User.
routes.post('/cadastro', Product.Cadastrar); // Cadastrar Produto;
module.exports = routes;