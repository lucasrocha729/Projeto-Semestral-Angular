const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    id: {type: Number, required: [true, "id obrigatório para clientModel"]},
    senha: {
        type: String,
        select: true,
        require: true
    },
    dtaCriacao: {
        type: Date,
        default: Date.now
    },
    token: {
        type: String,
        select: false
    },    
    firstName: String,
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

userSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.senha, 10);
    this.senha = hash;
    next();
});

module.exports = userSchema;