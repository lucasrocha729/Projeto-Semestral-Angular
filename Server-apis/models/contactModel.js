const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    id: {type: Number, required: [true, "id obrigatório para contactModel"]},
    nome: {type: String, required: [true, "Nome obrigatório"]},
    email: String,
    mensagem: String
});

module.exports = mongoose.model('contact', contactSchema);