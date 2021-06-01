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

setTimeout(process.exit, 3000);