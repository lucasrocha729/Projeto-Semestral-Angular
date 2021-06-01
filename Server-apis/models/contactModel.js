const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    id: Number,
    nome: String,
    email: String,
    mensagem: String
});

module.exports = mongoose.model('contact', contactSchema);