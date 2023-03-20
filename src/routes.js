const Express = require("express");
const routes = Express.Router();
const User = require('./controllers/user.js');
const Product = require('./controllers/product.js');

routes.get('/register_user', User.Register); // Registrar ususarios.
routes.get('/login_user', User.Login); // Login User.
routes.get('/cad_product', Product.Cad); // Cadastrar Produto;
module.exports = routes;