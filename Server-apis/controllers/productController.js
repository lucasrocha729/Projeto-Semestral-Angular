const productModel = require('../models/productModel');

class ProductController {

    async create(req, res){
        const max = await productModel.findOne({}).sort({id: - 1});
        let product = req.body;
        product.id = max == null ? 1 : max.id + 1;
        const result = await productModel.create(product);
        res.status(201).json(result); 
    }
    
    async list(req, res){
        const result = await productModel.find({});
        res.status(200).json(result);
    }

    async findById(req, res){
        const id = req.params.productId;
        const result = await productModel.findOne({'id': id});
        res.status(200).json(result);
    }

    async update(req, res){
        const id = req.params.productId;
        const _id = String((await productModel.findOne({'id': id}))._id);
        let product = req.body;
        await productModel.findByIdAndUpdate(String(_id), product);
        res.status(200).send();
    }

    async delete(req, res){
        const id = req.params.productId;
        const _id = String((await productModel.findOne({'id': id}))._id);
        await productModel.findByIdAndRemove(String(_id));
        res.status(200).send();
    }
}

module.exports = new ProductController();