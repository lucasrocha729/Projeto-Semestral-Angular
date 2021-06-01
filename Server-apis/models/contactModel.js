<<<<<<< HEAD
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    id: Number,
    nome: String,
    email: String,
    mensagem: String
});

=======
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    id: Number,
    nome: String,
    email: String,
    mensagem: String
});

>>>>>>> 8f9e6f0509b280158850db69a661d959adb5a0e7
module.exports = mongoose.model('contact', contactSchema);