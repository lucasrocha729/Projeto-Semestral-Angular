const statusModel = require('../models/statusModel');

class StatusController {

    async create(req, res){
        const max = await statusModel.findOne({}).sort({id: - 1});
        let status = req.body;
        status.id = max == null ? 1 : max.id + 1;
        const result = await statusModel.create(status);
        res.status(201).json(result); 
    }
    
    async list(req, res){
        const result = await statusModel.find({});
        res.status(200).json(result);
    }

    async findById(req, res){
        const id = req.params.statusId;
        const result = await statusModel.findOne({'id': id});
        res.status(200).json(result);
    }

    async update(req, res){
        const id = req.params.statusId;
        const _id = String((await statusModel.findOne({'id': id}))._id);
        let status = req.body;
        await statusModel.findByIdAndUpdate(String(_id), status);
        res.status(200).send();
    }

    async delete(req, res){
        const id = req.params.statusId;
        const _id = String((await statusModel.findOne({'id': id}))._id);
        await statusModel.findByIdAndRemove(String(_id));
        res.status(200).send();
    }
}

module.exports = new StatusController();