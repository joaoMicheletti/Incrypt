const express = require('express');
const Connection = require("../database/connection");

module.exports = {
    async Cadastrar(request, response){
        const {Key, Name, Date, Plano} = request.body;
        const Data = {
            Key,
            Name,
            Date,
            Plano
        };
        console.log(Data);
        await Connection('produtos').insert(Data)
        try {
            return response.json("Compra finalizada");
        }catch(Err){
            return response.json("server ErRoR!");

        };        
    },
    async SpecifcProduct(request, response){
        const {Key} = request.body;
        const Data = await Connection('produtos').where('key', Key).select('*')
        try {
            console.log(Data);
            return response.json(Data);
        }catch(Erro){
            return response.json("ErR0 Interno !");
        };
    },
    async List(request, response){
        const Data = await Connection('produtos').select('*')
        
        if(Data.length === 0){
            return response.json('Erro ao consultar a base de Dados');
        } else {
            return response.json(Data);
        }
    },
}