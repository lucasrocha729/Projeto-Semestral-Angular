<<<<<<< HEAD
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    classificacao : String,
    id : Number,
    name : String,
    price : Number,
    description: String,
    picture: String
});

=======
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    classificacao : String,
    id : Number,
    name : String,
    price : Number,
    description: String,
    picture: String
});

>>>>>>> 8f9e6f0509b280158850db69a661d959adb5a0e7
module.exports = mongoose.model('product', productSchema);