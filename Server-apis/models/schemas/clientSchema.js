const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    id: {type: Number, required: [true, "id obrigatório para clientModel"]},
    firstName: {type: String, required: [true, "Nome obrigatório"]},
    lastname: String,
    middleName: String,
    login: String,
    email: String,
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

module.exports = clientSchema;