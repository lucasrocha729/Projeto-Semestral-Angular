<<<<<<< HEAD
const contactModel = require('../models/contactModel');

class ContactController {

    async create(req, res){
        const max = await contactModel.findOne({}).sort({id: - 1});
        let contact = req.body;
        contact.id = max == null ? 1 : max.id + 1;
        const result = await contactModel.create(contact);
        res.status(201).json(result); 
    }
    
    async list(req, res){
        const result = await contactModel.find({});
        res.status(200).json(result);
    }

    async findById(req, res){
        const id = req.params.contactId;
        const result = await contactModel.findOne({'id': id});
        res.status(200).json(result);
    }

    async update(req, res){
        const id = req.params.contactId;
        const _id = String((await contactModel.findOne({'id': id}))._id);
        let contact = req.body;
        await contactModel.findByIdAndUpdate(String(_id), contact);
        res.status(200).send();
    }

    async delete(req, res){
        const id = req.params.contactId;
        const _id = String((await contactModel.findOne({'id': id}))._id);
        await contactModel.findByIdAndRemove(String(_id));
        res.status(200).send();
    }
}

=======
const contactModel = require('../models/contactModel');

class ContactController {

    async create(req, res){
        const max = await contactModel.findOne({}).sort({id: - 1});
        let contact = req.body;
        contact.id = max == null ? 1 : max.id + 1;
        const result = await contactModel.create(contact);
        res.status(201).json(result); 
    }
    
    async list(req, res){
        const result = await contactModel.find({});
        res.status(200).json(result);
    }

    async findById(req, res){
        const id = req.params.contactId;
        const result = await contactModel.findOne({'id': id});
        res.status(200).json(result);
    }

    async update(req, res){
        const id = req.params.contactId;
        const _id = String((await contactModel.findOne({'id': id}))._id);
        let contact = req.body;
        await contactModel.findByIdAndUpdate(String(_id), contact);
        res.status(200).send();
    }

    async delete(req, res){
        const id = req.params.contactId;
        const _id = String((await contactModel.findOne({'id': id}))._id);
        await contactModel.findByIdAndRemove(String(_id));
        res.status(200).send();
    }
}

>>>>>>> 8f9e6f0509b280158850db69a661d959adb5a0e7
module.exports = new ContactController();