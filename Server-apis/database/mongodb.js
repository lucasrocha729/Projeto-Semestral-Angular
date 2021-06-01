<<<<<<< HEAD
const mongoose = require('mongoose');

const URL = 'mongodb://localhost:27017/meu_banco';

const db = mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const con = mongoose.connection;

con.on('open', function(){
    console.log('conectado ao servidor mongoDB');
});

con.on('error', function(){
    console.log('erro na conexão ao servidor mongoDB');
});

con.on('close', function(){
    console.log('desconectado ao servidor mongo');
});

=======
const mongoose = require('mongoose');

const URL = 'mongodb://localhost:27017/meu_banco';

const db = mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const con = mongoose.connection;

con.on('open', function(){
    console.log('conectado ao servidor mongoDB');
});

con.on('error', function(){
    console.log('erro na conexão ao servidor mongoDB');
});

con.on('close', function(){
    console.log('desconectado ao servidor mongo');
});

>>>>>>> 8f9e6f0509b280158850db69a661d959adb5a0e7
module.exports = db;