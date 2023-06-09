const Express = require("express");
const routes = Express.Router();
const User = require('./controllers/user.js');
const Product = require('./controllers/product.js');

routes.post('/register_user', User.Register); // Registrar ususarios.
routes.post('/login_user', User.Login); // Login User.
routes.post('/cadastro', Product.Cadastrar); // Cadastrar Produto;
routes.get('/list_user', User.List); //listando usuários cadastrados na base de dados;
routes.get('/list_produtos', Product.List); // listando Produtos cadastrados na base de dados;
routes.post('/e_produto', Product.SpecifcProduct); //buscando produto especifico;
module.exports = routes;