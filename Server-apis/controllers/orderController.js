const orderModel = require('../models/orderModel');

class OrderController {

    async create(req, res){
        const max = await orderModel.findOne({}).sort({id: - 1});
        let order = req.body;
        order.id = max == null ? 1 : max.id + 1;
        const result = await orderModel.create(order);
        res.status(201).json(result); 
    }
    
    async list(req, res){
        const result = await orderModel.find({'userId': req.params.userId});
        res.status(200).json(result);
    }

    async findById(req, res){
        const {userId, id} = req.params;
        const result = await orderModel.findOne({'id': id, 'userId': userId});
        res.status(200).json(result);
    }

    async update(req, res){
        const id = req.params.orderId;
        const _id = String((await orderModel.findOne({'id': id}))._id);
        let order = req.body;
        await orderModel.findByIdAndUpdate(String(_id), order);
        res.status(200).send();
    }

    async delete(req, res){
        const id = req.params.orderId;
        const _id = String((await orderModel.findOne({'id': id}))._id);
        await orderModel.findByIdAndRemove(String(_id));
        res.status(200).send();
    }
}

module.exports = new OrderController();