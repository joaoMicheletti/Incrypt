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

        }
        
    },
}