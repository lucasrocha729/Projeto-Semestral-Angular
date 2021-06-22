const mongoose = require('mongoose');
const productSchema = require('./schemas/productSchema');

const orderSchema = new mongoose.Schema({
    id: {type: Number, required: [true, "id obrigatório para orderModel"]},
    date: { type: Date, default: Date.now },
    itens: [productSchema],
    total: Number,
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    statusId: {type: mongoose.Schema.Types.ObjectId, ref: 'status'} 
});

module.exports = mongoose.model('order', orderSchema);

// id: {type: Number, required: [true, "id obrigatório para contactModel"]},
// name: {type: String, required: [true, "Nome obrigatório"]},

