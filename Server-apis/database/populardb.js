<<<<<<< HEAD
require('./mongodb');
const productModel = require ('../models/productModel');
const data = require ('./products.json');

function loadData(){
    productModel.deleteMany({}, () => {
        data.forEach(product =>{
            productModel.create(product);
        })
    })
}

loadData();

=======
require('./mongodb');
const productModel = require ('../models/productModel');
const data = require ('./products.json');

function loadData(){
    productModel.deleteMany({}, () => {
        data.forEach(product =>{
            productModel.create(product);
        })
    })
}

loadData();

>>>>>>> 8f9e6f0509b280158850db69a661d959adb5a0e7
setTimeout(process.exit, 3000);