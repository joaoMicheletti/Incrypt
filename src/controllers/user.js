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
        const {User, Pass} = request.body;
        
        const CUser = await Connection('user')
        .where('user', User).select('user');
        
        const CPass = await Connection('user')
        .where('pass', Pass).select('pass');

        if(CUser.length === 0 ){
            return response.json('User ou Password incorrect!');
        } else if(CPass.length === 0 ){
            return response.json('User ou Password incorrect!');
        } else {
            const Key = await Connection('user').where('user', User).select('key');
            console.log(Key);
            return response.json(Key);
        };
        
    },
    async List(request, response){
        const Data = await Connection('user').select('*')
        
        if(Data.length === 0){
            return response.json('Erro ao consultar a base de Dados');
        } else {
            return response.json(Data);
        }
    },
}