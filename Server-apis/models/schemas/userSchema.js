const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: {type: Number, required: [true, "id obrigatório para clientModel"]},
    senha: {
        type: String,
        required: true,
        select: false
    },
    dtaCriacao: {
        type: Date,
        default: Date.now
    },
    firstName: {type: String, required: [true, "Nome obrigatório"]},
    lastname: String,
    middleName: String,
    login: String,
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    payment: {
        name: String,
        lastName: String,
        email: String,
        phone: String,
        city: String,
        state: String,
        zip: String,
        adress: String
    }
});

usuarioSchema.pre('save', async function(next){
    const hash = await bycryptjs.has(this.senha, 10);
    this.senha = hash;
    next();
});

module.exports = userSchema;