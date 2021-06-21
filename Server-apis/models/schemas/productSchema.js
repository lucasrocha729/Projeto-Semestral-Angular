const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    classificacao : String,
    id : {type: Number, required: [true, "Código é obrigatório!"]},
    name : {type: String, required: [true, "Nome do produto é obrigatório!"]},
    price : {
        type: Number, 
        min: [0, "preço não pode ser menor que 0"],
        required: [true, "preço é obrigatório!"]},
    description: String,
    picture: String
});

module.exports = productSchema;