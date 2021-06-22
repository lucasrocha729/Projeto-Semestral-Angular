const clientModel = require('../models/clientModel');

class ClientController {

    async create(req, res){
        const max = await clientModel.findOne({}).sort({id: - 1});
        let client = req.body;
        client.id = max == null ? 1 : max.id + 1;
        const result = await clientModel.create(client);
        res.status(201).json(result); 
    }
    
    async list(req, res){
        const result = await clientModel.find({});
        res.status(200).json(result);
    }

    async findById(req, res){
        const id = req.params.clientId;
        const result = await clientModel.findOne({'id': id});
        res.status(200).json(result);
    }

    async update(req, res){
        const id = req.params.clientId;
        const _id = String((await clientModel.findOne({'id': id}))._id);
        let client = req.body;
        await clientModel.findByIdAndUpdate(String(_id), client);
        res.status(200).send();
    }

    async delete(req, res){
        const id = req.params.clientId;
        const _id = String((await clientModel.findOne({'id': id}))._id);
        await clientModel.findByIdAndRemove(String(_id));
        res.status(200).send();
    }
}

module.exports = new ClientController();