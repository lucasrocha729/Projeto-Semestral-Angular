const jwt = require('jsonwebtoken');
const auth = require('./app.json');

function gerarToken(client){
    return jwt.sign({id: client.id}, auth.appId,{
        expiresIn: 7200
    })    
}

function autorizar(req, res, next){
    const authHeader = req.headers.authorization; 
    if(!authHeader){
        return res.status(401).send({error: 'Token não enviado'});
    }

    const partes = authHeader.split(' ');
    if(partes.lengh !== 2){
        return res.status(401).send({error: 'Token inválido'});
    }

    const[tipo, token] = partes;
    if(!/^Bearer$/i.test(tipo)){
        return res.status(401).send({error: 'Token inválido'});
    }

    jwt.verify(token, auth.appId, (err, usuario) =>{
        if(err){
            return res.status(401).send({error: 'Token inválido'})
        }
        req.usuarioLogadoId = usuario.id;
        return next();
    })
}
module.exports = {
    gerarToken,
    autorizar
}