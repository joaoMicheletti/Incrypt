const connection = require('../database/connection.js');
const Connection = require('../database/connection.js');

module.exports = {
    async Register(request, response){
        const {User, Pass} = request.body;
        const Key = "k$%#@!+=" + User + "k$%#@!+=" + Pass;
        const Data = {
            User,
            Pass,
            Key,
        };
        await Connection('user').insert(Data)
        try {
            return response.json('Usuario cadastrado!');
            console.log(Data);
        }catch(err){
            return response.json("Erro interno");
        };
    },
    async Login(request, response){
        const Data = await connection('user').select('*');
        console.log(Data);
        console.log("login");
    },
}