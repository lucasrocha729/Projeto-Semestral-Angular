const mongoose = require('mongoose');

const userLogadoSchema = new mongoose.Schema({
    userId = {type: mongoose.Schema.Types.ObjectId, ref: 'user'}
});

module.export = mongoose.model('userLogado', userLogadoSchema);