const mongoose = require('mongoose');

const statusModel = new mongoose.Schema({
    id: {type: Number, required: [true, "id obrigatório para statusModel"]},
    name: {type: String, required: [true, "Nome obrigatório"]},
});

module.exports = mongoose.model('status', statusModel);