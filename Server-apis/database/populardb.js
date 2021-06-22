require('./mongodb');

const statusModel = require ('../models/statusModel');
const status = require ('./status.json');

const clientModel = require ('../models/clientModel');
const client = require ('./client.json');

const orderModel = require ('../models/orderModel');
const order = require ('./order.json');

const productModel = require ('../models/productModel');
const product = require ('./products.json');



function loadData(){


    statusModel.deleteMany({}, () => {
        status.forEach(obj =>{
            statusModel.create(obj);
        })
    }) 

    clientModel.deleteMany({}, () => {
        client.forEach(obj =>{
            clientModel.create(obj);
        })
    })



    productModel.deleteMany({}, () => {
        product.forEach(product =>{
            productModel.create(product);
        })
    })

    orderModel.deleteMany({}, () => {
        order.forEach(obj =>{
            orderModel.create(obj);
        })
    })
}

loadData();

setTimeout(process.exit, 3000);