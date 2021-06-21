const mongoose = require('mongoose');

const URL = 'mongodb://localhost:27017/meu_banco';

const db = mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const con = mongoose.connection;

con.on('open', function(){
    console.log('Conectado ao servidor mongoDB, funcionando!!');
});

con.on('error', function(){
    console.log('Erro na conexão ao servidor mongoDB');
});

con.on('close', function(){
    console.log('Desconectado ao servidor mongo');
});

module.exports = db;