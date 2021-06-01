const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    classificacao : String,
    id : Number,
    name : String,
    price : Number,
    description: String,
    picture: String
});

module.exports = mongoose.model('product', productSchema);