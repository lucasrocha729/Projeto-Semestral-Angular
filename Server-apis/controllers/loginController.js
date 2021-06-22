const userModel = require('../models/userModel');
const auth = require('../auth/auth');
const bcryptjs = require('bcryptjs');

class LoginController {

    async login(req, res){
        const{ email, senha} = req.body;
        const user = await userModel.findOne({'email': email}).select('+senha');
        if(!usuario){
            res.status(400).send({error: 'User não encontrado!'})    
        }
        if(!await bcryptjs.compare(senha, user.senha)){
            res.status(400).send({error: 'Senha inválida!'})
        }
        const token = auth.gerarToken(user)
        res.status(201).json({id: user.id, nome: user.name, email: user.email, token: user.token});
    }

    async create(req, res){

        let user = req.body;
        const max = await userModel.findOne({}).sort({id: - 1});
        user.id = max == null ? 1 : max.id + 1;

        if(await userModel.findOne({'email': user.email})){
            res.status(400).send({error: 'E-mail ja cadastrado!'})
        }
        const result = await userModel.create(user);
        const token = auth.gerarToken(result);
        
        res.status(201).json({id: user.id, nome: user.nome, email: user.email, token: user.token}); 
    }
    
    async list(req, res){
        const result = await userModel.find({});
        res.status(200).json(result);
    }

    async findById(req, res){
        const id = req.params.clientId;
        const result = await userModel.findOne({'id': id});
        res.status(200).json(result);
    }

    async update(req, res){
        const id = req.params.clientId;
        const _id = String((await userModel.findOne({'id': id}))._id);
        let user = req.body;
        await userModel.findByIdAndUpdate(String(_id), user);
        res.status(200).send();
    }

    async delete(req, res){
        const id = req.params.clientId;
        const _id = String((await userModel.findOne({'id': id}))._id);
        await userModel.findByIdAndRemove(String(_id));
        res.status(200).send();
    }
}

module.exports = new LoginController();